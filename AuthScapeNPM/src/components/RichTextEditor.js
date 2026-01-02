import React, { useEffect, useCallback, useState } from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { $generateHtmlFromNodes, $generateNodesFromDOM } from '@lexical/html';
import { $getRoot, $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND, $createParagraphNode } from 'lexical';
import { $setBlocksType } from '@lexical/selection';
import { $createHeadingNode, $createQuoteNode, HeadingNode, QuoteNode } from '@lexical/rich-text';
import { ListItemNode, ListNode, INSERT_ORDERED_LIST_COMMAND, INSERT_UNORDERED_LIST_COMMAND } from '@lexical/list';
import { LinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link';
import { CodeNode } from '@lexical/code';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import CodeIcon from '@mui/icons-material/Code';
import LinkIcon from '@mui/icons-material/Link';
import LinkOffIcon from '@mui/icons-material/LinkOff';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';

const theme = {
  paragraph: 'lexical-paragraph',
  quote: 'lexical-quote',
  heading: {
    h1: 'lexical-h1',
    h2: 'lexical-h2',
    h3: 'lexical-h3',
    h4: 'lexical-h4',
    h5: 'lexical-h5',
    h6: 'lexical-h6',
  },
  list: {
    nested: { listitem: 'lexical-nested-listitem' },
    ol: 'lexical-ol',
    ul: 'lexical-ul',
    listitem: 'lexical-listitem',
  },
  text: {
    bold: 'lexical-bold',
    italic: 'lexical-italic',
    underline: 'lexical-underline',
    strikethrough: 'lexical-strikethrough',
    code: 'lexical-code',
  },
  link: 'lexical-link',
  code: 'lexical-code-block',
};

const editorStyles = `
  .lexical-editor-container { border: 1px solid #ccc; border-radius: 4px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif; }
  .lexical-editor-inner { position: relative; }
  .lexical-editor-input { padding: 12px; outline: none; overflow-y: auto; }
  .lexical-editor-input:focus { outline: none; }
  .lexical-placeholder { position: absolute; top: 12px; left: 12px; color: #999; pointer-events: none; user-select: none; }
  .lexical-paragraph { margin: 0 0 8px 0; }
  .lexical-h1 { font-size: 2em; font-weight: bold; margin: 16px 0 8px 0; }
  .lexical-h2 { font-size: 1.5em; font-weight: bold; margin: 14px 0 8px 0; }
  .lexical-h3 { font-size: 1.17em; font-weight: bold; margin: 12px 0 8px 0; }
  .lexical-h4 { font-size: 1em; font-weight: bold; margin: 10px 0 8px 0; }
  .lexical-h5 { font-size: 0.83em; font-weight: bold; margin: 8px 0 8px 0; }
  .lexical-h6 { font-size: 0.67em; font-weight: bold; margin: 6px 0 8px 0; }
  .lexical-quote { margin: 8px 0; padding: 8px 16px; border-left: 4px solid #ccc; background: #f9f9f9; font-style: italic; }
  .lexical-ul, .lexical-ol { margin: 8px 0; padding-left: 24px; }
  .lexical-listitem { margin: 4px 0; }
  .lexical-bold { font-weight: bold; }
  .lexical-italic { font-style: italic; }
  .lexical-underline { text-decoration: underline; }
  .lexical-strikethrough { text-decoration: line-through; }
  .lexical-code { background: #f0f0f0; padding: 2px 4px; border-radius: 3px; font-family: monospace; }
  .lexical-link { color: #0066cc; text-decoration: underline; }
  .lexical-code-block { background: #f5f5f5; padding: 12px; border-radius: 4px; font-family: monospace; overflow-x: auto; }
`;

const toolbarButtonStyle = {
  minWidth: 32, width: 32, height: 32, padding: '4px', margin: '2px', borderRadius: '2px',
  border: '1px solid transparent',
  '&:hover': { backgroundColor: '#f0f0f0', border: '1px solid #ccc' },
};

const activeButtonStyle = {
  ...toolbarButtonStyle,
  backgroundColor: '#e0e0e0',
  border: '1px solid #ccc',
};

function HtmlImportPlugin({ initialHtml }) {
  const [editor] = useLexicalComposerContext();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (initialHtml && !initialized) {
      editor.update(() => {
        const parser = new DOMParser();
        const dom = parser.parseFromString(initialHtml, 'text/html');
        const nodes = $generateNodesFromDOM(editor, dom);
        const root = $getRoot();
        root.clear();
        nodes.forEach(node => root.append(node));
      });
      setInitialized(true);
    }
  }, [editor, initialHtml, initialized]);

  return null;
}

function HtmlExportPlugin({ onChange }) {
  const [editor] = useLexicalComposerContext();

  const handleChange = useCallback(() => {
    editor.update(() => {
      const html = $generateHtmlFromNodes(editor, null);
      onChange(html);
    });
  }, [editor, onChange]);

  return <OnChangePlugin onChange={handleChange} />;
}

function Toolbar({ isDisabled }) {
  const [editor] = useLexicalComposerContext();
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [isCode, setIsCode] = useState(false);
  const [blockType, setBlockType] = useState('paragraph');

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat('bold'));
      setIsItalic(selection.hasFormat('italic'));
      setIsUnderline(selection.hasFormat('underline'));
      setIsStrikethrough(selection.hasFormat('strikethrough'));
      setIsCode(selection.hasFormat('code'));
    }
  }, []);

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => { updateToolbar(); });
    });
  }, [editor, updateToolbar]);

  const formatText = (format) => { editor.dispatchCommand(FORMAT_TEXT_COMMAND, format); };

  const formatBlock = (type) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        if (type === 'paragraph') $setBlocksType(selection, () => $createParagraphNode());
        else if (type === 'quote') $setBlocksType(selection, () => $createQuoteNode());
        else if (type.startsWith('h')) $setBlocksType(selection, () => $createHeadingNode(type));
        setBlockType(type);
      }
    });
  };

  const formatList = (listType) => {
    if (listType === 'bullet') editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
    else if (listType === 'number') editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
  };

  const insertLink = () => {
    const url = prompt('Enter URL:');
    if (url) editor.dispatchCommand(TOGGLE_LINK_COMMAND, url);
  };

  const removeLink = () => { editor.dispatchCommand(TOGGLE_LINK_COMMAND, null); };
  const undo = () => { editor.dispatchCommand('UNDO', undefined); };
  const redo = () => { editor.dispatchCommand('REDO', undefined); };

  if (isDisabled) return null;

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', padding: '8px', borderBottom: '1px solid #ccc', backgroundColor: '#f9f9f9', gap: '4px' }}>
      <Select size="small" value={blockType} onChange={(e) => formatBlock(e.target.value)} sx={{ minWidth: 120, height: 32, mr: 1 }}>
        <MenuItem value="paragraph">Normal</MenuItem>
        <MenuItem value="h1">Heading 1</MenuItem>
        <MenuItem value="h2">Heading 2</MenuItem>
        <MenuItem value="h3">Heading 3</MenuItem>
        <MenuItem value="h4">Heading 4</MenuItem>
        <MenuItem value="h5">Heading 5</MenuItem>
        <MenuItem value="h6">Heading 6</MenuItem>
        <MenuItem value="quote">Blockquote</MenuItem>
      </Select>
      <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
      <Tooltip title="Bold (Ctrl+B)"><IconButton size="small" onClick={() => formatText('bold')} sx={isBold ? activeButtonStyle : toolbarButtonStyle}><FormatBoldIcon fontSize="small" /></IconButton></Tooltip>
      <Tooltip title="Italic (Ctrl+I)"><IconButton size="small" onClick={() => formatText('italic')} sx={isItalic ? activeButtonStyle : toolbarButtonStyle}><FormatItalicIcon fontSize="small" /></IconButton></Tooltip>
      <Tooltip title="Underline (Ctrl+U)"><IconButton size="small" onClick={() => formatText('underline')} sx={isUnderline ? activeButtonStyle : toolbarButtonStyle}><FormatUnderlinedIcon fontSize="small" /></IconButton></Tooltip>
      <Tooltip title="Strikethrough"><IconButton size="small" onClick={() => formatText('strikethrough')} sx={isStrikethrough ? activeButtonStyle : toolbarButtonStyle}><StrikethroughSIcon fontSize="small" /></IconButton></Tooltip>
      <Tooltip title="Code"><IconButton size="small" onClick={() => formatText('code')} sx={isCode ? activeButtonStyle : toolbarButtonStyle}><CodeIcon fontSize="small" /></IconButton></Tooltip>
      <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
      <Tooltip title="Bullet List"><IconButton size="small" onClick={() => formatList('bullet')} sx={toolbarButtonStyle}><FormatListBulletedIcon fontSize="small" /></IconButton></Tooltip>
      <Tooltip title="Numbered List"><IconButton size="small" onClick={() => formatList('number')} sx={toolbarButtonStyle}><FormatListNumberedIcon fontSize="small" /></IconButton></Tooltip>
      <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
      <Tooltip title="Insert Link"><IconButton size="small" onClick={insertLink} sx={toolbarButtonStyle}><LinkIcon fontSize="small" /></IconButton></Tooltip>
      <Tooltip title="Remove Link"><IconButton size="small" onClick={removeLink} sx={toolbarButtonStyle}><LinkOffIcon fontSize="small" /></IconButton></Tooltip>
      <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
      <Tooltip title="Undo (Ctrl+Z)"><IconButton size="small" onClick={undo} sx={toolbarButtonStyle}><UndoIcon fontSize="small" /></IconButton></Tooltip>
      <Tooltip title="Redo (Ctrl+Y)"><IconButton size="small" onClick={redo} sx={toolbarButtonStyle}><RedoIcon fontSize="small" /></IconButton></Tooltip>
    </Box>
  );
}

function onError(error) { console.error('Lexical error:', error); }

export const RichTextEditor = ({ html, onSave, height = 400, isDisabled = false }) => {
  const [editorHtml, setEditorHtml] = useState(html || '');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => { setIsMounted(true); }, []);

  useEffect(() => {
    if (html != null) setEditorHtml(html);
  }, [html]);

  const handleChange = useCallback((newHtml) => { setEditorHtml(newHtml); }, []);

  if (!isMounted) {
    return <div style={{ minHeight: height, border: '1px solid #ccc', borderRadius: 4 }} />;
  }

  const initialConfig = {
    namespace: 'RichTextEditor',
    theme,
    onError,
    nodes: [HeadingNode, QuoteNode, ListNode, ListItemNode, LinkNode, CodeNode],
    editable: !isDisabled,
  };

  return (
    <>
      <style>{editorStyles}</style>
      <LexicalComposer initialConfig={initialConfig}>
        <div className="lexical-editor-container">
          <Toolbar isDisabled={isDisabled} />
          <div className="lexical-editor-inner">
            <RichTextPlugin
              contentEditable={<ContentEditable className="lexical-editor-input" style={{ minHeight: height, maxHeight: height }} />}
              placeholder={<div className="lexical-placeholder">Enter text...</div>}
              ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
            <ListPlugin />
            <LinkPlugin />
            <HtmlImportPlugin initialHtml={html} />
            <HtmlExportPlugin onChange={handleChange} />
          </div>
        </div>
      </LexicalComposer>
      <hr />
      <Box sx={{ textAlign: "right" }}>
        <Button variant="contained" disabled={isDisabled} onClick={async () => { await onSave(editorHtml); }}>Save</Button>
      </Box>
    </>
  );
};

// Also export as LexicalEditor for backwards compatibility
export const LexicalEditor = RichTextEditor;
