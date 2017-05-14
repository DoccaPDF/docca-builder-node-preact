import { h } from 'preact';

const defaultStyle = `
  amount {
    align-items: right;
  }
  amountDue {
    extend: item;
    border: 2 0 0 0;
  }
`;

/**
 * display totals for invoice items
 *
 * @param {Object} { invoice }
 */
const InvoiceItemTotals = ({ className, invoice, currency, style = defaultStyle }) => (
  <column class={className}>
    <style>{style}</style>
    <item>
      <column>Subtotal in {currency}:</column>
      <amount>{invoice.subtotal}</amount>
    </item>
    {invoice.tax_percent &&
      <item>
        <column>* Tax ({invoice.tax_percent}%):</column>
        <amount>{invoice.tax}</amount>
      </item>
    }
    <amountDue>
      <column>Amount due in {currency}:</column>
      <amount>{invoice.amount_due}</amount>
    </amountDue>
  </column>
);

export default InvoiceItemTotals;
