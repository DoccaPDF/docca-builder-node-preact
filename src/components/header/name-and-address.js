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

  .supplierName { font-size: 40 }
`;

const LogoAddressHeader = ({ supplier, style = defaultStyle }) => (
  <Header>
    <style>{style}</style>
    <row>
      <column>
        {supplier.logo && <img class='logo' src={supplier.logo} />}
        {!supplier.logo && <p class='supplierName'>{supplier.name}</p>}
      </column>
      <column class='header-supplier'>
        <Address className='items-right' recipient={supplier} />
        <p>Phone: {supplier.phone}</p>
        <p>Email: {supplier.email}</p>
      </column>
    </row>
  </Header>
);

export default LogoAddressHeader;
