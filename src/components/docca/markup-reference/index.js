import { h } from 'preact';

import { getPDFInfoDate } from '../../../dates';

import Header from './header';
import Footer from './footer';

import IndexPage from '../../index-page';
import Document from './pages/document';
import Style from './pages/style';
import Pages from './pages/pages';
import RoCo from './pages/ro-co';
import Spacing from './pages/spacing';
import Width from './pages/width';
import Height from './pages/height';
import Alignment from './pages/alignment';
import Fonts from './pages/fonts';
import Images from './pages/images';
import Charts from './pages/charts';

const defaultStyle = `
  page { margin: 40 }
  .index { margin: 50 }
  p { margin: 0 0 5 0 }
  header { font-weight: bold; font-size: 14; margin: 0 0 5 0 }
  subhead { font-weight: bold; font-size: 11; margin: 0 0 5 0 }
  .index { margin: 20; font-size: 12 }
  .index-container {
    border: 0; border-color: red;
  }
  .index-page-row {
    border: 0 0 1 0; border-color: lightgrey;
    padding: 5;
  }
  .index-page-number-row {
    align-items: right
  }
  .index-mark-row {
    border: 0; border-color: orange;
    padding: 2 2 2 10;
  }
  page-numbers {
    align-items: right
  }
`;

/**
 * Docca Markup Guide
 */
const MarkupRef = ({ style = defaultStyle }) => {
  return (
    <doc
      size='A4'
      author='jason@docca.io'
      title='Docca Markup Reference'
      subject='Reference for Docca document markup'
      creator='Docca'
      keywords='docca document markup reference'
      moddate={getPDFInfoDate(new Date())}
    >
      <style>{style}</style>
      <index>
        <Header />
        <IndexPage />
      </index>
      <page>
        <Header />
        <Document />
        <Style />
        <Pages />
        <RoCo />
        <Spacing />
        <Width />
        <Height />
        <Alignment />
        <Fonts />
        <Images />
        <Charts />
        <Footer />
      </page>
    </doc>
  );
};

export default MarkupRef;
