import { h } from 'preact';

/**
 * display invoice details
 */
const InvoiceDetails = ({ invoice, className, title, titleClass }) => (
  <column class={className}>
    <p class={titleClass}>{title}</p>
    <row>
      <p>Invoice Number:</p>
      <p>{invoice.number}</p>
    </row>
    <row>
      <p>Issue Date:</p>
      <p>{invoice.issue_date}</p>
    </row>
    <row>
      <p>Payment Terms:</p>
      <p>{invoice.payment_terms}</p>
    </row>
    <row>
      <p>Billing ID:</p>
      <p>{invoice.billing_id}</p>
    </row>
    <row>
      <p>Billing Account Number:</p>
      <p>{invoice.account_number}</p>
    </row>
  </column>
);

export default InvoiceDetails;
