import React, { useEffect, useState, useRef } from 'react';

export async function PrivateLabelPageModule(apiUri, host, resolvedUrl) {

    var data = {};
    if (host.includes("localhost"))
    {
        host = "http://" + host;
    }
    else
    {
        host = "https://" + host;
    }

    const response = await fetch(apiUri + "/api/PrivateLabel/GetCompanyIdFromDomain?domain=" + host);
    if (response.status == 200)
    {
        var dataResponse = await response.json();
        if (dataResponse != null)
        {
            if (dataResponse.companyId != null)
            {
                data.oemCompanyId = dataResponse.companyId;
            }

            if (dataResponse.demoCompanyId != null)
            {
                data.demoId = dataResponse.demoCompanyId;
            }

            if (dataResponse.favIcon != null)
            {
                data.favIcon = dataResponse.favIcon;
            }

            if (dataResponse.companyName != null)
            {
                data.companyName = dataResponse.companyName;
            }

            if (dataResponse.googleAnalytics4Code != null)
            {
                data.googleAnalytics4Code = dataResponse.googleAnalytics4Code;
            }

            if (dataResponse.microsoftClarityCode != null)
            {
                data.microsoftClarityCode = dataResponse.microsoftClarityCode;
            }

            // check for redirect
            if (dataResponse.redirectTrafficToCanonical)
            {
                data.redirect = {
                    redirect: {
                        destination: dataResponse.canonicalBaseUrl,
                        permanent: false,
                    },
                }
            }
        }
    }
    
    return data;
}

export function HeaderRecords({pageProps})
{
    return (
        <>
            {(pageProps != null && pageProps.oemCompanyId != null) &&
            <>
                <link
                    href={process.env.apiUri + "/api/PrivateLabel/GetDataFromRecord?oemCompanyId=" + pageProps.oemCompanyId}
                    rel="stylesheet"
                />

                {/* <link rel="manifest" href="/manifest.json" />
                <link
                  href="/icons/favicon-16x16.png"
                  rel="icon"
                  type="image/png"
                  sizes="16x16"
                />
                <link
                  href="/icons/favicon-32x32.png"
                  rel="icon"
                  type="image/png"
                  sizes="32x32"
                /> */}
            </>
            }
        </>
    )
}