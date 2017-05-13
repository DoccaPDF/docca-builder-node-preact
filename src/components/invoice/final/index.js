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
const Final = ({ className, invoice, amountDue, style = defaultStyle }) => (
  <final>
    <style>{style}</style>
    {invoice.tax_note && <row>{invoice.tax_note}</row>}
    <billDetail>
      <column>
        <row><l class='billDetailLabel'>Bill to:</l><l>{invoice.customer.name}</l></row>
        <row><l class='billDetailLabel'>Billing ID:</l><l>{invoice.billing_id}</l></row>
        <row><l class='billDetailLabel'>Invoice number:</l><l>{invoice.number}</l></row>
      </column>
      <column>
        <footAmountDue>
          <l>Amount due in {invoice.currency}:</l>
          <amount>{amountDue}</amount>
        </footAmountDue>
      </column>
    </billDetail>
    {invoice.payment_note && <note>{invoice.payment_note}</note>}
  </final>
);

export default Final;
