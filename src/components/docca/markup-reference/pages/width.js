import { h } from 'preact';

import Header from '../page-header';
import Pre from '../pre';
import EG from '../eg';

const style = `
    default { border: 1; border-color: red; margin: 3; padding: 3 }
    width150 { extend: default; width: 150 }
    width50p { extend: default; width: 50% }
`;

const eg = `

<width50p> Width 50% </width50p>
<width150> Width 150 points </width150>

<ro>
  <width50p> Width 50% </width50p>
  <width150> Width 150 points </width150>
  <default>The</default>
  <default>Rest</default>
</ro>

<ro>
  <width150> Width 150 ignored </width150>
  <width150> Width 150 ignored </width150>
  <width150> Width 150 ignored </width150>
  <width150> Width 150 ignored </width150>
</ro>
`;

const preStyle = `<style>${style}</style>`;

const Width = () => (
  <sub-page index='Width'>
    <Header>Width</Header>
    <p> Width can be set in either points or percentage of available width. </p>
    <p>
      The available width is divided up evenly between the remaining elements in a row
      after allocating the width of those elements with styled widths.
    </p>
    <p>
      If the styled widths of the elements in a row exceed the available width then
      the width styles are ignored.
    </p>
    <co>
      <style>{style}</style>
      <Pre>{preStyle}{eg}</Pre>
      <EG>{eg}</EG>
    </co>
  </sub-page>
);

export default Width;
