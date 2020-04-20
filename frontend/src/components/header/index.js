import React from 'react';
import { string, element } from 'prop-types';
import './header.scss';
import Link from '../link';

const linkProps = {
  href: 'https://reactjs.org',
  target: '_blank',
  rel: 'noopener noreferrer',
  className: 'App-link'
};

const Header = ({ title, className }) => (
  <header className={className}>
    {title}
    <Link {...linkProps}>Learn React</Link>
  </header>
);

Header.propTypes = {
  title: string.isRequired,
  className: string.isRequired
};

export default Header;
