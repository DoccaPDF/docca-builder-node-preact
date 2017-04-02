import { h } from 'preact';

import Header from '../page-header';
import Pre from '../pre';
import EG from '../eg';

const style = `
  .decor { border: 1; border-color: red; margin: 5; padding: 3 }

  .itemsFullHeight { height-items: stretch }
  .fullHeight { height: stretch }
`;

const eg = `
  <ro class="mar itemsFullHeight">
    <co class="decor"> Height set to tallest child height. </co>
    <co class="decor"> Height set by wrapped content if we make it long enough.</co>
  </ro>
`;

const eg2 = `
  <ro class="mar">
    <co class="decor fullHeight"> Height set to tallest child height. </co>
    <co class="decor"> Height set by wrapped content if we make it long enough.</co>
    <co class="decor"> Height set by content.</co>
  </ro>
`;

const Height = () => (
  <newPage id='height'>
    <style>{style}</style>
    <Header>Height</Header>
    <block>
      <subhead>Stretch all items of a row to the height of the tallest item.</subhead>
      <Pre>{style}{eg}</Pre>
      <EG>{eg}</EG>
    </block>
    <block>
      <subhead>Stretch one item to the height of the tallest item.</subhead>
      <Pre>{eg2}</Pre>
      <EG>{eg2}</EG>
    </block>
  </newPage>
);

export default Height;
