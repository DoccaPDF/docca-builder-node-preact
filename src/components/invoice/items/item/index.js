import { h } from 'preact';

const InvoiceItem = ({ item }) => (
  <item>
    <l>{item.description}</l>
    <itemQ>{item.quantity}</itemQ>
    <itemP>{item.price}</itemP>
    <itemT>{item.total}</itemT>
  </item>
);

export default InvoiceItem;
