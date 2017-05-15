import { h } from 'preact';

import { CurrencyFormatter } from '../../currency';

import Header from '../header/name-and-address';
import Footer from '../footer/page-numbers';
import Address from '../address';
import Items from './items';
import Final from './final';

const defaultStyle = `
  page { margin: 30; font-size: 10 }
  .detail { margin: 10 0 20 0 }
  .bold { font-weight: bold }
  final {
    extend: column;
    valign: bottom;
  }
  footer { margin: 20 0 0 0 }
  page-numbers { align-items: right }
`;

function getItemsWithTotals (lineItems) {
  return lineItems.map(
    item => ({ ...item, total: item.amount * item.quantity })
  );
}

function formatItemAmounts ({ formatter, items }) {
  return items.map(item => ({
    ...item,
    amount: formatter.format(item.amount / 100),
    total: formatter.format(item.total / 100)
  }));
}

function formatTotalsAmounts ({ formatter, invoice }) {
  return {
    ...invoice,
    subtotal: formatter.format(invoice.subtotal / 100),
    tax: formatter.format(invoice.tax / 100),
    total: formatter.format(invoice.total / 100),
    amount_due: formatter.format(invoice.amount_due / 100)
  };
}

/**
 * display invoice
 */
const Invoice = ({ style = defaultStyle, doc = {}, data }) => {
  let items = getItemsWithTotals(data.invoice.lines.data);

  const formatter = CurrencyFormatter(data.currency_format);
  items = formatItemAmounts({ formatter, items });
  const invoice = formatTotalsAmounts({ formatter, invoice: data.invoice });

  let recipient = { email: data.customer.email };
  if (data.customer.shipping) {
    if (data.customer.shipping.address) {
      const addressFields = ['line1', 'line2', 'city', 'state', 'postal_code', 'country'];
      const shipAddress = data.customer.shipping.address;
      recipient.address = addressFields.reduce((result, field) => {
        if (shipAddress[field]) {
          result.push(shipAddress[field]);
        }
        return result;
      }, []);
    }
    recipient.attn = data.customer.shipping.name;
  }

  return (
    <doc size='A4' {...doc}>
      <style>{style}</style>
      <page>
        <Header supplier={data.supplier} />
        <row class='detail'>
          <Address title='Bill to' recipient={recipient} />
        </row>
        <Items invoice={invoice} items={items} currency={data.customer.currency} />
        <Final class='final' invoice={invoice} billTo={recipient.attn} paymentNote='Thanks!' />
        <Footer />
      </page>
    </doc>
  );
};

export default Invoice;
