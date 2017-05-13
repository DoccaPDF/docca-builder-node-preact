import { h } from 'preact';

import Header from '../page-header';
import Pre from '../pre';
import EG from '../eg';

const style = `
  tag { flow: column; font-size: 12 }
  bold { font-weight: bold }
  .blue { font-color: blue }
  green { extend: bold; font-color: green }

  .items-right { align-items: right }
  rightBox { width: 50%; border: 1; border-color: red }
`;

const nestedStyle = `bold { font-color: darkred }`;

const eg = `

<tag>
  Default
  <bold>Bold</bold>
  <bold class="blue">Blue Bold</bold>
  <green>Green Bold</green>
  <co>
    <style>
      ${nestedStyle}
    </style>
    <bold>Red Bold</bold>
  </co>
  <co class="items-right">
    <rightBox> Para aligned right, text inside not. </rightBox>
  </co>
</tag>
`;

const preStyle = `<style>${style}</style>`;

const Style = () => (
  <sub-page index='Style'>
    <style>{style}</style>
    <Header>Style</Header>
    <p>
      Styles control the layout and appearance of elements in a document in the same
      way as CSS in HTML. Styles can be applied to elements by name or as classes applied
      to specific elements. Styles can extend other styles. Style sheets in nested elements
      override their parents.
    </p>
    <p>Font styles are the only styles which flow down to through child elements.</p>
    <p>Some alignment styles affect child elements rather than the element they are applied to.</p>
    <Pre>{preStyle}{eg}</Pre>
    <EG>{eg}</EG>
  </sub-page>
);

export default Style;
