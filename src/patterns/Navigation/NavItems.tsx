import React from 'react';
import Link from 'next/link';

const NAV_ITEMS = [
  { id: 1, title: 'Home', route: '/' },
  { id: 2, title: 'About', route: '/about' },
];

const NavItems = () => (
  <nav>
    {NAV_ITEMS.map(({ id, title, route }) => (
      <Link href={route} passHref key={id}>
        <a style={{ padding: '0 20px' }}>{title}</a>
      </Link>
    ))}
  </nav>
);

export default NavItems;
