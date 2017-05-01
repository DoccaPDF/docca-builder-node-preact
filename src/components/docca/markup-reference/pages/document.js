import { h } from 'preact';

import Header from '../page-header';
import Pre from '../pre';

const pre = `
      <doc
        size="A4"
        author="jason@docca.io"
        title="Docca Markup Reference"
        subject="Reference for Docca document markup"
        creator="Docca"
        keywords="docca document markup reference"
        moddate="20170101000000Z"
      >
        <style>
          page { margin: 10; padding: 10; }
          .title { valign: bottom; font-size: 20; padding: 0 0 5 20 }
        </style>

        <page>
          <header>
            <ro>
              <logo><img src="logo.png" /></logo>
              <co class="title">Markup Reference</co>
            </ro>
          </header>

          <newPage>
            <header>
              <heading>The Document</heading>
            </header>
            <co><ro></ro></co>
          </newPage>

          <footer>
            <ro>
              <co>Docca Markup Reference</co>
              <co>Page <span class="pageNo">3</span> of <span class="pagesNo">3</span></co>
            </ro>
          </footer>
        </page>
      </doc>
`;

const Document = () => (
  <sub-page index='The Document'>
    <Header>The Document</Header>
    <p>A Docca document consists of a doc block containing a style block and one or more page blocks.</p>
    <Pre>{pre}</Pre>
  </sub-page>
);

export default Document;
