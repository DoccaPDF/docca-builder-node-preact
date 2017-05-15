import { h } from 'preact';

/**
 * display invoice details
 */
const InvoiceHeader = ({ className }) => (
  <header class={className}>
    <l>Description</l>
    <itemQ>Quantity</itemQ>
    <itemP>Price</itemP>
    <itemT>Total</itemT>
  </header>
);

export default InvoiceHeader;
