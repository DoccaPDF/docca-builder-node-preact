import { h } from 'preact';

import _defaults from 'lodash/defaults';
import _forEach from 'lodash/forEach';
import _sumBy from 'lodash/sumBy';

import InvoiceItemsHeader from './header';
import InvoiceItemsList from './list';
import InvoiceItemTotals from './totals';

const defaultStyle = `
  .itemsHeader {
    extend: row;
    font-weight: bold;
    border: 2 0;
    padding: 2 0;
  }

  .itemsList {
    extend: column;
    font-size: 8;
  }

  item { padding: 3 0; }
  itemQ {
    width: 60;
    align-items: right;
  }
  itemP {
    width: 90;
    align-items: right;
  }
  itemT {
    width: 90;
    align-items: right;
  }

  .totals {
    border: 2 0 0 0;
  }

  .itemTotals {
    extend: column;
    align: right;
    width: 50%;
  }
`;

const InvoiceItems = ({ invoice, style = defaultStyle, className = 'items' }) => {
  const format = _defaults({}, invoice.currency_format, {
    locales: 'en-US',
    options: {
      style: 'currency',
      currency: 'USD'
    }
  });
  const dollars = new Intl.NumberFormat(format.locales, format.options);

  const items = invoice.items.map(item => {
    return {
      ...item,
      total: item.price * item.quantity
    };
  });
  const subtotal = _sumBy(items, 'total');
  const taxAmount = subtotal * invoice.tax_percent / 100;
  const amountDue = subtotal + taxAmount;
  const totals = { subtotal, taxAmount, amountDue };

  items.forEach(item => {
    item.price = dollars.format(item.price / 100);
    item.total = dollars.format(item.total / 100);
  });
  _forEach(totals, (value, key) => {
    totals[key] = dollars.format(value / 100);
  });

  return (
    <column class='{className}'>
      <style>{style}</style>
      <InvoiceItemsHeader className='itemsHeader' />
      <InvoiceItemsList className='itemsList' items={items} />
      <row class='totals'>
        <InvoiceItemTotals className='itemTotals' invoice={invoice} totals={totals} />
      </row>
    </column>
  );
};

export default InvoiceItems;
