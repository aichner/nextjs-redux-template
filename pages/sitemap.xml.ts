//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
//#endregion

//#region > Data
const EXTERNAL_DATA_URL = "https://www.inspiremedia.at";
//#endregion

//#region > Functions
const createSitemap = (
  articles: any[]
) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${`${EXTERNAL_DATA_URL}/`}</loc>
        <priority>0.9</priority>
      </url>
      <url>
        <loc>${`${EXTERNAL_DATA_URL}/aktuelles`}</loc>
      </url>
      <url>
        <loc>${`${EXTERNAL_DATA_URL}/team`}</loc>
      </url>
      <url>
        <loc>${`${EXTERNAL_DATA_URL}/versprechen`}</loc>
      </url>
      <url>
        <loc>${`${EXTERNAL_DATA_URL}/standpunkte`}</loc>
      </url>
      <url>
        <loc>${`${EXTERNAL_DATA_URL}/leben`}</loc>
      </url>
      <url>
        <loc>${`${EXTERNAL_DATA_URL}/impressum`}</loc>
        <priority>0.1</priority>
      </url>
      <url>
        <loc>${`${EXTERNAL_DATA_URL}/datenschutz`}</loc>
        <priority>0.1</priority>
      </url>
        ${
          articles.length > 0 &&
          articles
            .map(({ slug, arDate }) => {
              if (slug) {
                return `
              <url>
                  <loc>${`${EXTERNAL_DATA_URL}/artikel/${slug}`}</loc>
                  ${arDate && `<lastmod>${arDate}</lastmod>`}
              </url>
          `;
              }
            })
            .join("")
        }
    </urlset>
    `;
//#endregion

//#region > Components

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const articles = [];

    res.setHeader("Content-Type", "text/xml");
    res.write(createSitemap(articles));
    res.end();
  }
}
//#endregion

//#region > Exports
export default Sitemap;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 InspireMedia GmbH
 */
