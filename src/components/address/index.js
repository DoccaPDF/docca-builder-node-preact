import { h } from 'preact';

/**
 * display an address
 * @param {String} title - a title to add above the address
 * @param {Object} recipient - address details
 * @param {String} recipient.name - company or person name
 * @param {String} [recipient.attn] - person name
 * @param {Array}  recipient.address - lines in the address; street city, etc
 */
const Address = ({ title, recipient, className }) => {
  const addr = recipient.address
    ? recipient.address.map(line => <l>{line}</l>)
    : undefined;
  return (
    <column class={className}>
      {title && <p class='bold'>{title}</p>}
      <l>{recipient.name}</l>
      {recipient.attn && <l>{recipient.attn}</l>}
      {recipient.email && <l>{recipient.email}</l>}
      {addr}
    </column>
  );
};

export default Address;
