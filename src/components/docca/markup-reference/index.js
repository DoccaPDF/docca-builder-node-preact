import { h } from 'preact';
import _map from 'lodash/map';
import _padStart from 'lodash/padStart';

import Header from './header';
import Footer from './footer';

import Index from './pages/index';
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
  page { margin: 20 }
  p { margin: 0 0 5 0 }
  subhead { font-weight: bold; font-size: 11; margin: 0 0 5 0 }
  .index { margin: 20; font-size: 12 }
`;

function getDate (date) {
  const parts = _map(['Date', 'Hours', 'Minutes', 'Seconds'], part =>
    _padStart(date[`getUTC${part}`](), 2, '0')
  );
  parts.unshift(_padStart(date.getUTCMonth() + 1, 2, '0'));
  parts.unshift(date.getUTCFullYear());
  return `${parts.join('')}Z`;
}

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
      moddate={getDate(new Date())}
    >
      <style>{style}</style>
      <page>
        <Header />
        <Index />
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

        // <Index />
        // <Document />
        // <Style />
        // <Pages />
        // <RowsColumns />
        // <Spacing />
        // <Width />
        // <Height />
        // <Alignment />
        // <Fonts />
        // <Images />
        // <Charts />

export default MarkupRef;
