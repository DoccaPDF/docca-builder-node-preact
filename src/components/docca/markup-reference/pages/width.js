import { h } from 'preact';

import Header from '../page-header';
import Pre from '../pre';
import EG from '../eg';

const style = `
    .decor { border: 1; border-color: red; margin: 3; padding: 3 }

    .halfWidth { width: 50% }
    .quarterWidth { width: 25% }
    .width100 { width: 100 }
`;

const eg = `

  <co class="mar">
    <ro class="decor halfWidth"> Width 50% </ro>
    <ro class="decor quarterWidth"> Width 25% </ro>
    <ro class="decor width100"> Width 100 pixels </ro>
  </co>
`;

const preStyle = `<style>${style}</style>`;

const Width = () => (
  <newPage id='width'>
    <Header>Width</Header>
    <co>
      <style>{style}</style>
      <Pre>{preStyle}{eg}</Pre>
      <EG>{eg}</EG>
    </co>
  </newPage>
);

export default Width;
