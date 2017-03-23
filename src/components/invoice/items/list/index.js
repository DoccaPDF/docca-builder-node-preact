import { h } from 'preact';

import Item from '../item';

const InvoiceItemsList = ({ className, items }) => {
  const itemList = items.map(item => <Item item={item} />);
  return (
    <column class={className}>
      {itemList}
    </column>
  );
};

export default InvoiceItemsList;
