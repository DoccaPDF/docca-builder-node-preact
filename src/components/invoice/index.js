import { h } from 'preact';
import _defaults from 'lodash/defaults';
import _mapValues from 'lodash/mapValues';
import _sumBy from 'lodash/sumBy';

import Header from '../header/name-and-address';
import Footer from '../footer/page-numbers';
import Address from '../address';
import InvoiceDetails from './details';
import Items from './items';
import Final from './final';

const defaultStyle = `
  page { margin: 30 }
  .detail { margin: 10 0 20 0 }
  .bold { font-weight: bold }
  final {
    extend: column;
    valign: bottom;
  }
  footer { margin: 20 0 0 0 }
`;

function getFormatter (invoiceCurrencyFormat) {
  const format = _defaults({}, invoiceCurrencyFormat, {
    locales: 'en-US',
    options: {
      style: 'currency',
      currency: 'USD'
    }
  });
  return new Intl.NumberFormat(format.locales, format.options);
}

function getItemsWithTotals (invoiceItems) {
  return invoiceItems.map(item => ({ ...item, total: item.price * item.quantity }));
}

function getTotals ({ items, taxPercent }) {
  const subtotal = _sumBy(items, 'total');
  const taxAmount = subtotal * taxPercent / 100;
  const amountDue = subtotal + taxAmount;
  return { subtotal, taxAmount, amountDue };
}

function formatItemAmounts ({ formatter, items }) {
  return items.map(item => ({
    ...item,
    price: formatter.format(item.price / 100),
    total: formatter.format(item.total / 100)
  }));
}

function formatTotalsAmounts ({ formatter, totals }) {
  return _mapValues(totals, (value, key) => {
    return formatter.format(value / 100);
  });
}

/**
 * display invoice
 */
const Invoice = ({ style = defaultStyle, doc = {}, invoice }) => {
  let items = getItemsWithTotals(invoice.items);
  let totals = getTotals({ items, taxPercent: invoice.tax_percent });

  const formatter = getFormatter(invoice.currency_format);
  items = formatItemAmounts({ formatter, items });
  totals = formatTotalsAmounts({ formatter, totals });

  return (
    <doc width='595' height='842' {...doc}>
      <style type='text/css'>{style}</style>
      <page>
        <Header supplier={invoice.supplier} />
        <row class='detail'>
          <Address title='Bill to' recipient={invoice.customer} />
          <InvoiceDetails title='Details' titleClass='bold' invoice={invoice} />
        </row>
        <Items invoice={invoice} items={items} totals={totals} />
        <Final className='final' invoice={invoice} amountDue={totals.amountDue} />
        <Footer />
      </page>
    </doc>
  );
};

export default Invoice;
