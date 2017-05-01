import { h } from 'preact';

import Header from '../page-header';
import Pre from '../pre';
import EG from '../eg';

const style1 = `
    col { extend: co; border: 1; border-color: blue }
    .radius { border-radius: 5 }
    .mar { margin: 5 }
    .pad { padding: 5 }
`;

const eg1 = `

  <ro><col>Border</col></ro>
  <ro><col class="mar">Margin and Border</col></ro>
  <ro><col class="mar pad">Margin, Border, Padding</col></ro>
  <ro><col class="mar radius pad">Margin, Rounded Border, Padding</col></ro>
`;

const style2 = `
    .bor { border: 0 0 1 0; border-color: blue }
    .mar { margin: 5 0 0 0 }
    .pad { padding: 0 5 }
`;

const eg2 = `

  <ro><col class="bor">Bottom Border</col></ro>
  <ro><col class="bor mar">Top Margin and Bottom Border</col></ro>
  <ro><col class="bor mar pad">Top Margin, Bottom Border, Sides Padding</col></ro>
`;

const preStyle1 = `<style>${style1}</style>`;
const preStyle2 = `<style>${style2}</style>`;

const Spacing = () => (
  <sub-page index='Spacing'>
    <Header>Borders, Margins, and Padding</Header>
    <p>A border is an outline of an element. </p>
    <p>A margin adds space around the outside of the border.</p>
    <p>Padding adds space inside the border.</p>
    <co>
      <style>{style1}</style>
      <Pre>{preStyle1}{eg1}</Pre>
      <EG>{eg1}</EG>
    </co>
    <co>
      <style>{style2}</style>
      <Pre>{preStyle2}{eg2}</Pre>
      <EG>{eg2}</EG>
    </co>
  </sub-page>
);

export default Spacing;
