import { h } from 'preact';

import Header from '../page-header';
import Pre from '../pre';
import EG from '../eg';

const ro = `
  <ro>
    <co> <p>Column 1 Para 1</p> <p>Column 1 Para 2</p> </co>
    <co> <p>Column 2</p> </co>
    <co> <p>Column 3</p> </co>
  </ro>
`;

const co = `
  <co>
    <ro> <p>Row 1 Para 1</p> <p>Row 1 Para 2</p> </ro>
    <ro> <p>Row 2</p> </ro>
    <ro> <p>Row 3</p> </ro>
  </co>
`;

const RoCo = () => (
  <newPage id='roAndCo'>
    <Header>Rows and Columns (ro & co)</Header>
    <block>
      <subhead>Rows</subhead>
      &lt;row&gt; and &lt;ro&gt; elements are styled by default with the `flow: row` rule.
      <p>The elements in a row are laid out horizontally and the available space is divided up evenly between the elements.</p>
      <Pre>{ro}</Pre>
      <EG>{ro}</EG>
    </block>
    <block>
      <subhead>Columns</subhead>
      &lt;column&gt; and &lt;co&gt; elements are styled by default with the `flow: column` rule.
      <p>The elements in a column are laid out vertically.</p>
      <Pre>{co}</Pre>
      <EG>{co}</EG>
    </block>
  </newPage>
);

export default RoCo;
