import { h } from 'preact';

import Header from '../header/logo-and-address';
import Footer from '../footer/page-numbers';
import Address from '../address';
import InvoiceDetails from './details';
import Items from './items';

const defaultStyle = `
  page { margin: 30 }
  .detail { margin: 10 0 20 0 }
  .bold { font-weight: bold }

  footer { margin: 20 0 0 0 }
`;

/**
 * display invoice
 */
const Invoice = ({ style = defaultStyle, doc = {}, invoice }) => (
  <doc width='595' height='842' {...doc}>
    <style type='text/css'>{style}</style>
    <page>
      <Header supplier={invoice.supplier} />
      <row class='detail'>
        <Address title='Bill to' recipient={invoice.customer} />
        <InvoiceDetails title='Details' titleClass='bold' invoice={invoice} />
      </row>
      <Items invoice={invoice} />
      <Footer />
    </page>
  </doc>
);

export default Invoice;
