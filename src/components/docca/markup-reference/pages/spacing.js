import { h } from 'preact';

import Header from '../page-header';
import Pre from '../pre';
import EG from '../eg';

const style = `
  border { border: 1; border-color: blue }
  margin { border: 1; border-color: red; margin: 5 }
  padding { border: 1; border-color: green; padding: 5 }
  bottomBorder { extend: border margin padding; border: 0 0 1 0 }
  rounded { extend: border margin padding; border-radius: 5 }
`;

const eg = `

<border>Border</border>
<margin>Margin</margin>
<padding>Padding</padding>

<margin>
  <padding>Margin and Padding</padding>
</margin>

<bottomBorder>Bottom Border</bottomBorder>

<rounded>Rounded Border</rounded>
`;

const preStyle = `<style>${style}</style>`;

const Spacing = () => (
  <sub-page index='Spacing'>
    <Header>Borders, Margins, and Padding</Header>
    <p>A border is the outline of an element. </p>
    <p>A margin adds space around the outside of the border.</p>
    <p>Padding adds space inside the border.</p>
    <co>
      <style>{style}</style>
      <Pre>{preStyle}{eg}</Pre>
      <EG>{eg}</EG>
    </co>
  </sub-page>
);

export default Spacing;
