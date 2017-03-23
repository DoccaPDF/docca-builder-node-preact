import { h } from 'preact';

/**
 * display invoice details
 */
const InvoiceHeader = ({ className }) => (
  <header class={className}>
    <p>Description</p>
    <itemQ>Quantity</itemQ>
    <itemP>Price</itemP>
    <itemT>Total</itemT>
  </header>
);

export default InvoiceHeader;
