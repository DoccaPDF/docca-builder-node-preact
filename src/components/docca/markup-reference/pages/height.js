import { h } from 'preact';

import Header from '../page-header';
import Pre from '../pre';
import EG from '../eg';

const style = `
    co { border: 1; border-color: red; margin: 3; padding: 3 }
    ro { margin: 5 }
    height50 { extend: co; height: 50 }
    .stretch-items { height-items: stretch }
    .stretch { height: stretch }
`;

const eg = `

<ro class="stretch-items">
  <co> Stretched </co>
  <co> Height set by content if we make it long enough. </co>
</ro>

<ro class="stretch-items">
  <co> Stretched </co>
  <height50> Height set by style. </height50>
</ro>

<ro>
  <co class="stretch"> Stretched </co>
  <co> Height set by content if we make it long enough. </co>
  <co> Not Stretched </co>
</ro>
`;

const preStyle = `<style>${style}</style>`;

const Height = () => (
  <sub-page index='Height'>
    <style>{style}</style>
    <Header>Height</Header>
    <block>
      <Pre>{preStyle}{eg}</Pre>
      <EG>{eg}</EG>
    </block>
  </sub-page>
);

export default Height;
