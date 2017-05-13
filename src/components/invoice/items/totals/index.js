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
const InvoiceItemTotals = ({ className, invoice, totals, style = defaultStyle }) => (
  <column class={className}>
    <style>{style}</style>
    <item>
      <column>Subtotal in {invoice.currency}:</column>
      <amount>{totals.subtotal}</amount>
    </item>
    <item>
      <column>* {invoice.tax_name} ({invoice.tax_percent}%):</column>
      <amount>{totals.taxAmount}</amount>
    </item>
    <amountDue>
      <column>Amount due in {invoice.currency}:</column>
      <amount>{totals.amountDue}</amount>
    </amountDue>
  </column>
);

export default InvoiceItemTotals;
