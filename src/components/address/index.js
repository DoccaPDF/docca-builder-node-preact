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
  const addr = recipient.address.map(line => <p>{line}</p>);
  return (
    <column class={className}>
      {title && <p class='bold'>{title}</p>}
      <p>{recipient.name}</p>
      {recipient.attn && <p>{recipient.attn}</p>}
      {addr}
    </column>
  );
};

export default Address;
