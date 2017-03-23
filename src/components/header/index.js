import { h } from 'preact';

const Header = (props) => {
  const { children } = props;
  return (
    <header>{ children }</header>
  );
};

export default Header;
