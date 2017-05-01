import { h } from 'preact';

import Header from '../page-header';
import Pre from '../pre';
import EG from '../eg';

const style = `
    .decor {
      border: 1; border-color: red; margin: 5; padding: 3;
      width: 50%;
    }

    .right { align: right }
    .center { align: center }
    .items-right { align-items: right }
    .items-center { align-items: center }
`;

const eg = `

  <co class="mar">
    <ro class="decor"> Row </ro>
    <ro class="decor right items-right"> Row </ro>
    <ro class="decor items-center"> Row </ro>
    <ro class="decor center items-right"> Row </ro>
  </co>
`;

const eg2 = `

  <co>
    <co class="decor"> Column </co>
    <co class="decor right items-right"> Column </co>
    <co class="decor items-center"> Column </co>
    <co class="decor center items-right"> Column </co>
  </co>
`;

const preStyle = `<style>${style}</style>`;

const Alignment = () => (
  <sub-page index='Alignment'>
    <style>{style}</style>
    <Header>Alignment</Header>
    <p>Elements can be aligned and they can align their child elements.</p>
    <block>
      <Pre>{preStyle}{eg}</Pre>
      <EG>{eg}</EG>
    </block>
    <block>
      <Pre>{preStyle}{eg2}</Pre>
      <EG>{eg2}</EG>
    </block>
  </sub-page>
);

export default Alignment;
