import { h } from 'preact';

const defaultStyle = `
  billDetail {
    border: 2 0 0 0;
    margin: 5 0 0 0;
    padding: 5 0 0 0;
  }
  .billDetailLabel { width: 90; }
  footAmountDue {
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
    extend: p;
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
        <row><p class='billDetailLabel'>Bill to:</p><p>{invoice.customer.name}</p></row>
        <row><p class='billDetailLabel'>Billing ID:</p><p>{invoice.billing_id}</p></row>
        <row><p class='billDetailLabel'>Invoice number:</p><p>{invoice.number}</p></row>
      </column>
      <column>
        <footAmountDue>
          <p>Amount due in {invoice.currency}:</p>
          <amount>{amountDue}</amount>
        </footAmountDue>
      </column>
    </billDetail>
    {invoice.payment_note && <note>{invoice.payment_note}</note>}
  </final>
);

export default Final;
