import { h } from 'preact';

import Header from '../page-header';
import Pre from '../pre';
import EG from '../eg';

const style = `
    .decor { border: 1; border-color: red; margin: 3; padding: 3 }
    .decor2 { border: 1; border-color: green; margin: 3; padding: 3 }
    .items-right { align-items: right }

    .bold { font-weight: bold }
    .halfWidth { width: 50% }
    .quarterWidth { width: 25% }
    .threeQuarterWidth { width: 75% }
    .width100 { width: 100 }
`;

const eg = `

  <co class="mar">
    <ro class="decor halfWidth"> Width 50% </ro>
    <ro class="decor quarterWidth"> Width 25% </ro>
    <ro class="decor width100"> Width 100 pixels </ro>
  </co>
`;

const eg2 = `
  <ro class="decor"> Text <span class="bold" debug="y" >in</span> Row </ro>
  <ro class="decor compact"> Text <span class="bold" debug="y" >in</span> compact Row </ro>
  <ro class="decor"><co class="decor2"> Text in <span class="bold">Column</span> in Row </co></ro>
  <ro class="decor"><co class="decor2 compact"> Text in compact <span class="bold">Column</span> in Row </co></ro>
  <ro class="decor compact"><co class="decor2 compact"> Text in compact <span class="bold">Column</span> in compact Row </co></ro>
  <block>
    <co class="decor compact items-right">
      <ro class="decor2 compact"> Text in compact Row in compact Column </ro>
      <ro class="decor2 compact"> And again </ro>
    </co>
  </block>
  <ro class="decor" debug="1">
    <co class="decor2 threeQuarterWidth"> Text in Column in Row 3/4</co>
    <co class="decor2 threeQuarterWidth"> Text in Column in Row 3/4</co>
  </ro>
  <ro class="decor">
    <co class="decor2"> Text in Column in Row </co>
    <co class="decor2"> Text in Column in Row </co>
  </ro>
  <ro class="decor"><ro class="decor2"> Text in Row in Row </ro></ro>
  <ro class="decor">
    <ro class="decor2 width100"> Text in Row in Row Text in Row in Row Text in Row in Row Text in Row in Row </ro>
    <ro class="decor2"> Text in Row in Row Text in Row in Row Text in Row in Row Text in Row in Row Text in Row in Row </ro>
  </ro>
  <co class="decor"> Text in Column </co>
  <co class="decor"><ro class="decor2"> Text in Row in Column </ro></co>
  <co class="decor">
    <ro class="decor2"> Text in Row in Column </ro>
    <ro class="decor2"> Text in Row in Column </ro>
  </co>
  <co class="decor"><co class="decor2"> Text in Column in Column </co></co>
  <co class="decor">
    <co class="decor2"> Text in Column in Column </co>
    <co class="decor2"> Text in Column in Column </co>
  </co>
`;

const preStyle = `<style>${style}</style>`;

const Width = () => (
  <sub-page index='Width'>
    <Header>Width</Header>
    <co class='outer'>
      <style>{style}</style>
      <Pre>{preStyle}{eg}</Pre>
      <EG>{eg}</EG>
      <EG>{eg2}</EG>
    </co>
  </sub-page>
);

export default Width;
