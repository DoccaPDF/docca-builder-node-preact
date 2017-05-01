import { h } from 'preact';

import Header from '../page-header';
import Pre from '../pre';
import EG from '../eg';

const style = `
  co { border: 1; border-color: red; }
  .halfWidth { width: 50% }
  .width200 { width: 200 }
`;

const eg = `

  <co class="halfWidth">
    <ro> <img src="logo.png" /> </ro>
    <ro class="halfWidth"> <img src="logo.png" /> </ro>
    <ro> <img class="halfWidth" src="logo.png" /> </ro>
    <ro> <img class="width200" src="logo.png" /> </ro>
  </co>
`;

const preStyle = `<style>${style}</style>`;

const Images = () => (
  <sub-page index='Images'>
    <style>{style}</style>
    <Header>Images</Header>
    <p>Images fill the available width of their container element unless their width is set directly.</p>
    <p>An image is embedded in the PDF once regardless of the number of times it is displayed in the PDF.</p>
    <p>For print quality images it is recommended that the physical size of the image be approximately twice as wide as it's display width.</p>
    <block>
      <Pre>{preStyle}{eg}</Pre>
      <EG>{eg}</EG>
    </block>
  </sub-page>
);

export default Images;
