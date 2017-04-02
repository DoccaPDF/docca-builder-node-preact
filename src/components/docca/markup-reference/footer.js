import { h } from 'preact';

import PageNumbers from '../../page-numbers/';

const defaultStyle = `
  .pages {
    height: stretch;
    align-items: right;
    valign-items: bottom;
  }
`;

const Footer = ({ style = defaultStyle }) => (
  <footer>
    <style>{style}</style>
    <ro>
      <co>
        <p>Docca Markup Reference</p>
        Questions? email <text href='mailto:support@docca.io'>support@docca.io</text>
      </co>
      <co class='pages'>
        <PageNumbers />
      </co>
    </ro>
  </footer>
);

export default Footer;
