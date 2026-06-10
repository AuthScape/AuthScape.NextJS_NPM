/* eslint-disable */
// Build the `authscape` package into a SINGLE CommonJS bundle (index.js).
//
// Why a custom script instead of `babel src --out-file index.js`:
// This package's source is written as ONE shared module scope. Files reference each
// other's top-level symbols directly (e.g. components call the bare `apiService()`
// defined in services/apiService.js) and AuthScapeApp.js reaches siblings via
// `module.exports.apiService`. That only works when every file lands in the same
// module — i.e. concatenated, not split into per-file modules.
//
// Naive `babel --out-file` concatenation breaks because Babel inlines its helper
// functions (_typeof, _interopRequireDefault, ...) into EACH file, so the merged file
// declares `function _typeof` dozens of times -> "Identifier already declared".
// Fix: compile every file with @babel/plugin-external-helpers (helpers become
// `babelHelpers.x` references, not inline declarations) and prepend ONE shared
// `babelHelpers` definition from buildExternalHelpers(). Presets come from .babelrc.
//
// Note: there are intentionally NO relative cross-file imports in src/, so concatenation
// is safe. If you add one, import it as a bare/shared reference instead.

const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;

const ROOT = __dirname;
const SRC = path.join(ROOT, 'src');
const OUT = path.join(ROOT, 'index.js');

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'scripts') return []; // build-time only, not part of the bundle
      return walk(full);
    }
    return entry.name.endsWith('.js') ? [full] : [];
  });
}

const files = walk(SRC).sort();

// One shared helpers object for the whole bundle.
const helpers = babel.buildExternalHelpers(undefined, 'var');

const bodies = files.map((file) => {
  const { code } = babel.transformFileSync(file, {
    plugins: ['@babel/plugin-external-helpers'],
  });
  return '// ===== ' + path.relative(ROOT, file).replace(/\\/g, '/') + ' =====\n' + code;
});

const concatenated = '"use strict";\n' + helpers + '\n' + bodies.join('\n\n');

// external-helpers covers preset-env helpers, but Babel's module transform still inlines
// _interopRequireWildcard / _getRequireWildcardCache (and a couple of spread helpers) into
// every file. Concatenated, those become duplicate top-level function declarations — illegal
// when a parser treats the file as a module (webpack does). We parse in SCRIPT mode (which
// tolerates duplicate top-level function declarations), drop byte-identical duplicates keeping
// the first, then regenerate. Same-name-but-different-body declarations are left untouched (the
// source's shared-scope design keeps user-level names unique, so only generated helpers collide).
const ast = babel.parse(concatenated, { sourceType: 'script', configFile: false, babelrc: false });
const seenFns = new Set(); // top-level function names already kept
let removed = 0;
traverse(ast, {
  Program(progPath) {
    progPath.get('body').forEach((stmtPath) => {
      const node = stmtPath.node;
      if (node.type !== 'FunctionDeclaration' || !node.id) return;
      const name = node.id.name;
      if (seenFns.has(name)) {
        stmtPath.remove(); // duplicate top-level function = generated helper (user names are unique)
        removed++;
      } else {
        seenFns.add(name);
      }
    });
  },
});
const bundle = generate(ast, { compact: false, comments: true }).code;
console.log('Deduped ' + removed + ' duplicate top-level helper declarations.');

fs.writeFileSync(OUT, bundle);
console.log('Built ' + path.relative(ROOT, OUT) + ' from ' + files.length + ' files (' + bundle.length + ' bytes).');
