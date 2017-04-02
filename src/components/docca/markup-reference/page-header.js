import { h } from 'preact';

const defaultStyle = `
  heading { font-weight: bold; font-size: 14; margin: 10 0 10 0 }
`;

const PageHeader = ({ style = defaultStyle, children }) => (
  <header>
    <style>{style}</style>
    <heading>{children}</heading>
  </header>
);

export default PageHeader;
