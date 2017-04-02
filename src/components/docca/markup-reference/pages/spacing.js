import { h } from 'preact';

import Header from '../page-header';
import Pre from '../pre';
import EG from '../eg';

const style1 = `
  .bor { border: 1; border-color: red }
  .borRad { extend: .bor; border-radius: 5 }
  .mar { margin: 5 }
  .pad { padding: 5 }
`;

const eg1 = `
  <ro><co class="bor">Border</co></ro>
  <ro><co class="mar bor">Margin and Border</co></ro>
  <ro><co class="mar bor pad">Margin, Border, Padding</co></ro>
  <ro><co class="mar borRad pad">Margin, Rounded Border, Padding</co></ro>
`;

const style2 = `
  .bor { border: 0 0 1 0; border-color: red }
  .mar { margin: 5 0 0 0 }
  .pad { padding: 0 5 }
`;

const eg2 = `
  <ro><co class="bor">Bottom Border</co></ro>
  <ro><co class="mar bor">Top Margin and Bottom Border</co></ro>
  <ro><co class="mar bor pad">Top Margin, Bottom Border, Sides Padding</co></ro>
`;

const Spacing = () => (
  <newPage id='spacing'>
    <Header>Borders, Margins, and Padding</Header>
    <p>A border is an outline of an element. </p>
    <p>A margin adds space around the outside of the border.</p>
    <p>Padding adds space inside the border.</p>
    <co>
      <style>{style1}</style>
      <Pre>{style1}{eg1}</Pre>
      <EG>{eg1}</EG>
    </co>
    <co>
      <style>{style2}</style>
      <Pre>{style2}{eg2}</Pre>
      <EG>{eg2}</EG>
    </co>
  </newPage>
);

export default Spacing;
