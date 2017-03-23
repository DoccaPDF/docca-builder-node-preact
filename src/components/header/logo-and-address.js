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
`;

const LogoAddressHeader = ({ supplier, style = defaultStyle }) => (
  <Header>
    <style>{style}</style>
    <row>
      <column>
        <img class='logo' src={supplier.logo} />
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
