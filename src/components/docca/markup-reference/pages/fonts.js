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
  <sub-page index='Fonts'>
    <style>{style}</style>
    <Header>Fonts</Header>
    <p>
      A <link href='#avail-fonts'>large selection</link> of
      the <link href='https://www.google.com/get/noto/'>Google Noto Fonts</link> are
      available for use.
    </p>
    <block>
      <Pre>{preStyle}{eg}</Pre>
      <EG>{eg}</EG>
    </block>
    <co>
      <p>The NotoSans font covers 583 languages such as:</p>
      <co>
        <p><b>Czech</b>: Vědci jsou šipky sukně. Úřad obdrží žádnou spoluúčast.</p>
        <p><b>Greek</b>: Lorem ipsum dolor καθίσει Αμέτ, consectetur adipiscing Elit.</p>
        <p><b>Bulgarian</b>: Lorem Ipsum печал седне Амет, consectetur adipiscing Елит.</p>
        <p><b>Russian</b>: Lorem Ipsum Dolor сидеть Амет, consectetur adipiscing Элит.</p>
        <p><b>Vietnamese</b>: Thậm chí tạm thời nibh, luctus ut urna sed, ultricies ultrices Purus.</p>
      </co>
    </co>

    <block>
      <subhead id='avail-fonts' index='Available Fonts'>Available Fonts</subhead>
      <ro>
        <co>
          <o>Arimo</o>
          <o>Cousine</o>
          <o>NotoKufiArabic</o>
          <o>NotoMono</o>
          <o>NotoNaskhArabic</o>
          <o>NotoNaskhArabicUI</o>
          <o>NotoSans</o>
          <o>NotoSansArmenian</o>
          <o>NotoSansBengali</o>
          <o>NotoSansBengaliUI</o>
          <o>NotoSansCham</o>
          <o>NotoSansDevanagari</o>
          <o>NotoSansDevanagariUI</o>
          <o>NotoSansEthiopic</o>
          <o>NotoSansGeorgian</o>
          <o>NotoSansGujarati</o>
          <o>NotoSansGujaratiUI</o>
          <o>NotoSansGurmukhi</o>
          <o>NotoSansGurmukhiUI</o>
        </co>
        <co>
          <o>NotoSansHebrew</o>
          <o>NotoSansKannada</o>
          <o>NotoSansKannadaUI</o>
          <o>NotoSansKhmer</o>
          <o>NotoSansKhmerUI</o>
          <o>NotoSansLao</o>
          <o>NotoSansLaoUI</o>
          <o>NotoSansMalayalam</o>
          <o>NotoSansMalayalamUI</o>
          <o>NotoSansMyanmar</o>
          <o>NotoSansMyanmarUI</o>
          <o>NotoSansOriya</o>
          <o>NotoSansOriyaUI</o>
          <o>NotoSansSinhala</o>
          <o>NotoSansTamil</o>
          <o>NotoSansTamilUI</o>
          <o>NotoSansTelugu</o>
          <o>NotoSansTeluguUI</o>
          <o>NotoSansThaana</o>
        </co>
        <co>
          <o>NotoSansThai</o>
          <o>NotoSansThaiUI</o>
          <o>NotoSansTibetan</o>
          <o>NotoSansUI</o>
          <o>NotoSerif</o>
          <o>NotoSerifArmenian</o>
          <o>NotoSerifBengali</o>
          <o>NotoSerifDevanagari</o>
          <o>NotoSerifGeorgian</o>
          <o>NotoSerifGujarati</o>
          <o>NotoSerifKannada</o>
          <o>NotoSerifKhmer</o>
          <o>NotoSerifLao</o>
          <o>NotoSerifMalayalam</o>
          <o>NotoSerifTamil</o>
          <o>NotoSerifTelugu</o>
          <o>NotoSerifThai</o>
          <o>Tinos</o>
        </co>
      </ro>
    </block>
  </sub-page>
);

export default Fonts;
