import { h } from 'preact';

import Footer from './index';
import PageNumbers from '../page-numbers';

const defaultStyle = `
  pageNo { width: 100%; align-items: right; valign: bottom }

`;

const PageNumbersFooter = ({ supplier, style = defaultStyle }) => (
  <Footer>
    <style>{style}</style>
    <PageNumbers />
  </Footer>
);

export default PageNumbersFooter;
