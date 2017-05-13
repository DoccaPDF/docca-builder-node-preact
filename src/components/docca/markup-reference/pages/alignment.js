import { h } from 'preact';

import Header from '../page-header';
import Pre from '../pre';
import EG from '../eg';

const style = `
  box { width: 75%; border: 1; border-color: red; margin: 3; padding: 3 }

  .right { align: right }
  .center { align: center }
  .items-right { align-items: right }
  .items-center { align-items: center }
`;

const eg = `

<co>
  <box>Left</box>
  <box class="right"> Right </box>
  <box class="center"> Center </box>
  <box class="items-right"> Items Right </box>
  <box class="items-center"> Items Center </box>
  <box class="right items-right"> Both Right </box>
  <box class="center items-center"> Both Center </box>
</co>
`;

const style2 = `
  box { height: 50; border: 1; border-color: red; margin: 3; padding: 3 }
  ro { border: 1; border-color: green; margin: 3 }
  .tall { height: 80 }
  .bottom { valign: bottom }
  .center { valign: center }
  .items-bottom { valign-items: bottom }
  .items-center { valign-items: center }
`;

const eg2 = `

<ro class="tall">
  <box class="bottom"> Bottom </box>
  <box class="center"> Center </box>
</ro>
<ro>
  <box class="items-bottom"> Items Bottom </box>
  <box class="items-center"> Items Center </box>
</ro>
<ro class="tall">
  <box class="bottom items-bottom"> Both Bottom </box>
  <box class="center items-center"> Both Center </box>
</ro>
`;

const preStyle = `<style>${style}</style>`;
const preStyle2 = `<style>${style2}</style>`;

const Alignment = () => (
  <sub-page index='Alignment'>
    <Header>Alignment</Header>
    <block>
      <style>{style}</style>
      <subhead id='h-align' index='Horizontal'>Horizontal Alignment</subhead>
      <p> The <sty>align</sty> and <sty>align-items</sty> style rules align elements horizontally. </p>
      <Pre>{preStyle}{eg}</Pre>
      <EG>{eg}</EG>
    </block>
    <block>
      <style>{style2}</style>
      <subhead id='v-align' index='Vertical'>Vertical Alignment</subhead>
      <p> The <sty>valign</sty> and <sty>valign-items</sty> style rules align elements vertically. </p>
      <Pre>{preStyle2}{eg2}</Pre>
      <EG>{eg2}</EG>
    </block>
  </sub-page>
);

export default Alignment;
