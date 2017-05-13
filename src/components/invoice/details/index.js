import { h } from 'preact';

/**
 * display invoice details
 */
const InvoiceDetails = ({ invoice, className, title, titleClass }) => (
  <column class={className}>
    <l class={titleClass}>{title}</l>
    <row>
      <l>Invoice Number:</l>
      <l>{invoice.number}</l>
    </row>
    <row>
      <l>Issue Date:</l>
      <l>{invoice.issue_date}</l>
    </row>
    <row>
      <l>Payment Terms:</l>
      <l>{invoice.payment_terms}</l>
    </row>
    <row>
      <l>Billing ID:</l>
      <l>{invoice.billing_id}</l>
    </row>
    <row>
      <l>Billing Account Number:</l>
      <l>{invoice.account_number}</l>
    </row>
  </column>
);

export default InvoiceDetails;
