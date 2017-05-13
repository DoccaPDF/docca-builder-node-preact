import { h } from 'preact';

import Header from './index';
import Address from '../address';

const defaultStyle = `
  .header-supplier {
    align-items: right;
    padding: 10 0;
    font-size: 9;
  }
  .items-right { align-items: right }
  .logo { width: 200 }
  l { align-items: right }
  .supplierName { font-size: 40 }
`;

const LogoAddressHeader = ({ supplier, style = defaultStyle }) => (
  <Header>
    <style>{style}</style>
    <row>
      <column>
        {supplier.logo && <img class='logo' src={supplier.logo} />}
        {!supplier.logo && <l class='supplierName'>{supplier.name}</l>}
      </column>
      <column class='header-supplier'>
        <Address class='items-right' recipient={supplier} />
        <l>Phone: {supplier.phone}</l>
        <l>Email: {supplier.email}</l>
      </column>
    </row>
  </Header>
);

export default LogoAddressHeader;
