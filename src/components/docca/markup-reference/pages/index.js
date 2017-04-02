import { h } from 'preact';

import Header from '../page-header';

const defaultStyle = `
  .link { font-color: blue }
`;

const Index = ({ style = defaultStyle }) => (
  <newPage class='index'>
    <style>{style}</style>
    <Header>Index</Header>
    <co>
      <p><text class='link' href='#theDocument'>Document</text></p>
      <p><text class='link' href='#style'>Style</text></p>
      <p><text class='link' href='#pages'>Pages</text></p>
      <p><text class='link' href='#roAndCo'>Rows and Columns</text></p>
      <p><text class='link' href='#spacing'>Borders, Margins, and Padding</text></p>
      <p><text class='link' href='#width'>Width</text></p>
      <p><text class='link' href='#height'>Height</text></p>
      <p><text class='link' href='#alignment'>Alignment</text></p>
      <p><text class='link' href='#fonts'>Fonts</text></p>
      <p><text class='link' href='#images'>Images</text></p>
      <p><text class='link' href='#charts'>Charts</text></p>
    </co>
  </newPage>
);

export default Index;
