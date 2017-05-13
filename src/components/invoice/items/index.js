import { h } from 'preact';

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

  item { flow: row; padding: 3 0; }
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

const InvoiceItems = ({ invoice, items, totals, style = defaultStyle, className = 'items' }) => (
  <column class='{className}'>
    <style>{style}</style>
    <InvoiceItemsHeader className='itemsHeader' />
    <InvoiceItemsList className='itemsList' items={items} />
    <row class='totals'>
      <InvoiceItemTotals className='itemTotals' invoice={invoice} totals={totals} />
    </row>
  </column>
);

export default InvoiceItems;
