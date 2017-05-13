import { h } from 'preact';

import Header from '../page-header';
import Pre from '../pre';
import EG from '../eg';

const ro = `
  <ro>
    <p>Para 1</p>
    <p>Para 2</p>
    <p>Para 3</p>
  </ro>
`;

const co = `
  <co>
    <p>Para 1</p>
    <p>Para 2</p>
    <p>Para 3</p>
  </co>
`;

const RoCo = () => (
  <sub-page index='Rows and Columns'>
    <Header>Rows and Columns (ro & co)</Header>
    <block>
      <subhead>Rows</subhead>
      <el>row</el> (or <el>ro</el>) elements are styled by default with the `flow: row` rule.
      <p>
        The elements in a row are laid out horizontally and the available space is divided up
        evenly between the elements unless elements have their widths explicitly styled.
      </p>
      <Pre>{ro}</Pre>
      <EG>{ro}</EG>
    </block>
    <block>
      <subhead>Columns</subhead>
      All other elements which have not been styled as row or inline are styled with the `flow: column` rule.
      <p>The elements in a column are laid out vertically.</p>
      <Pre>{co}</Pre>
      <EG>{co}</EG>
    </block>
  </sub-page>
);

export default RoCo;
