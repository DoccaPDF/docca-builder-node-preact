import { h } from 'preact';

import Header from '../page-header';
import Pre from '../pre';

const pre = `
  <doc>
    <style></style>
    <page>
      <header>
        <ro><co>Markup Reference</co></ro>
      </header>

      <sub-page>
        <header>The First Page/s</header>
        <co><ro></ro></co>
      </sub-page>

      <sub-page>
        <header>Starts on a New Page</header>
        <co><ro></ro></co>
      </sub-page>

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
  <sub-page index='Pages'>
    <Header>Pages</Header>
    <p>Each <el>page</el> element will start on a new page in the PDF and may span multiple pages in the resulting PDF document.</p>
    <p>Each <el>sub-page</el> element will start on a new page and will inherit the <el>header</el> and <el>footer</el> of it's parent <el>page</el>.</p>
    <p><el>header</el> and <el>footer</el> elements are included in each page their parent element spans.</p>
    <p><el>block</el> elements will not be split unless they are too big to fit on a single page, including any headers or footers.</p>
    <Pre>{pre}</Pre>
  </sub-page>
);

export default Pages;
