import { h } from 'preact';

const InvoiceItem = ({ item }) => (
  <item>
    <p>{item.description}</p>
    <itemQ>{item.quantity}</itemQ>
    <itemP>{item.price}</itemP>
    <itemT>{item.total}</itemT>
  </item>
);

export default InvoiceItem;
