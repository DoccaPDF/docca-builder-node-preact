import { h } from 'preact';

import Header from '../page-header';
import Pre from '../pre';

const pre = `
  <doc>
    <style>
    </style>

    <page>
      <header>
        <ro><co>Markup Reference</co></ro>
      </header>

      <newPage>
        <header>The First Page/s</header>
        <co><ro></ro></co>
      </newPage>

      <newPage>
        <header>Starts on a New Page</header>
        <co><ro></ro></co>
      </newPage>

      <footer>
        <co>Page n of n</co>
      </footer>
    </page>

    <page>
      <header>
        <ro><co>Glossary</co></ro>
      </header>
    </page>
  </doc>
`;

const Pages = () => (
  <newPage id='pages'>
    <Header>Pages</Header>
    <p>Each &lt;page&gt; element will start on a new page in the PDF and may span multiple pages in the resulting PDF document.</p>
    <p>Each &lt;newPage&gt; element will start on a new page and will include the &lt;header&gt; and &lt;footer&gt; of it's parent.</p>
    <p>&lt;header&gt; and &lt;footer&gt; elements are included in each page their parent block is in.</p>
    <Pre>{pre}</Pre>
    <p>&lt;block&gt;elements will not be split unless they are too big to fit on a single page, including any headers or footers.</p>
  </newPage>
);

export default Pages;
