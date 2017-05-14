import { h } from 'preact';

const defaultStyle = `
  billDetail {
    border: 2 0 0 0;
    margin: 5 0 0 0;
    padding: 5 0 0 0;
  }
  .billDetailLabel { width: 90; }
  footAmountDue {
    extend: row;
    margin: 5 0 0 0;
    padding: 2 4;
    border: 1;
    border-color: blue;
    font-weight: bold;
  }
  note {
    margin: 20 0 0 0;
    font-weight: bold;
  }
  amountDue {
    padding: 3 0;
    border: 2 0 0 0;
  }
  amount {
    align-items: right;
  }
`;

/**
 * display totals for invoice items
 *
 * @param {Object} { invoice }
 */
const Final = ({ className, invoice, currency, billTo, paymentNote, style = defaultStyle }) => (
  <final>
    <style>{style}</style>
    <billDetail>
      <column>
        <row><l class='billDetailLabel'>Bill to:</l><l>{billTo}</l></row>
        <row><l class='billDetailLabel'>Invoice number:</l><l>{invoice.metadata.invoice_number}</l></row>
      </column>
      <column>
        <footAmountDue>
          <l>Amount due in {currency}:</l>
          <amount>{invoice.amount_due}</amount>
        </footAmountDue>
      </column>
    </billDetail>
    {paymentNote && <note>{paymentNote}</note>}
  </final>
);

export default Final;
