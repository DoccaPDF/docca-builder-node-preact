import { h } from 'preact';

const defaultStyle = `
  .logo {
    font-size: 40;
    padding: 20;
    margin: 20;
    width: 150;
  }

  .title {
    font-size: 20;
    margin: 0 0 0 30;
    valign: bottom;
  }
`;

const Header = ({ style = defaultStyle }) => (
  <header>
    <style>{style}</style>
    <ro>
      <co>
        <text class='logo'>Docca </text><text class='title'> Markup Reference</text>
      </co>
    </ro>
  </header>
);

export default Header;
