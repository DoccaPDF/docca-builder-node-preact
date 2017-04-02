import { h } from 'preact';

const defaultStyle = `
  logo { width: 150 }
  title { valign: bottom; font-size: 20; padding: 0 0 5 20 }
  co { height: stretch }
`;

const Header = ({ style = defaultStyle }) => (
  <header>
    <style>{style}</style>
    <ro>
      <logo><img src='logo.png' /></logo>
      <co><title>Markup Reference</title></co>
    </ro>
  </header>
);

export default Header;
