import { h } from 'preact';

import Header from '../page-header';
import Pre from '../pre';
import EG from '../eg';

const style = `
    .italic { font-style: italic }
    .bold { font-weight: bold }

    .noto { font-family: NotoSans }
    .noto-bold { extend: .noto .bold }
    .noto-italic { extend: .noto .italic }
    .noto-bolditalic { extend: .noto .bold .italic }
`;

const eg = `

  <co>
    <p class="noto">NotoSans</p>
    <p class="noto-bold">NotoSans Bold</p>
    <p class="noto-italic">NotoSans Italic</p>
    <p class="noto-bolditalic">NotoSans Bold Italic</p>
  </co>
`;

const preStyle = `<style>${style}</style>`;

const Fonts = () => (
  <newPage id='fonts'>
    <style>{style}</style>
    <Header>Fonts</Header>
    <block>
      <Pre>{preStyle}{eg}</Pre>
      <EG>{eg}</EG>
    </block>
    <co>
      <p>The NotoSans font covers 583 languages such as:</p>
      <co>
        <p>Czech: Vědci jsou šipky sukně. Úřad obdrží žádnou spoluúčast.</p>
        <p>Greek: Lorem ipsum dolor καθίσει Αμέτ, consectetur adipiscing Elit.</p>
        <p>Bulgarian: Lorem Ipsum печал седне Амет, consectetur adipiscing Елит.</p>
        <p>Russian: Lorem Ipsum Dolor сидеть Амет, consectetur adipiscing Элит.</p>
        <p>Vietnamese: Thậm chí tạm thời nibh, luctus ut urna sed, ultricies ultrices Purus.</p>
      </co>
    </co>
  </newPage>
);

export default Fonts;
