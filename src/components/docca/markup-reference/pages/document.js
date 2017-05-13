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
          <co>
            Page Content
          </co>
          <footer>
            <ro> <co>Docca Markup Reference</co> </ro>
          </footer>
        </page>
      </doc>
`;

const Document = () => (
  <sub-page index='The Document'>
    <Header>The Document</Header>
    <p>
      A Docca document consists of a <el>doc</el> block containing a <el>style</el> block
      and one or more <el>page</el> blocks. The <el>doc</el> element can include attributes
      which define the values in the resulting PDF's information properties.
    </p>
    <Pre>{pre}</Pre>
  </sub-page>
);

export default Document;
