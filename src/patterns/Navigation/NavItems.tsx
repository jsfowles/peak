import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { navMotion, navItemMotion } from './motion';

const NAV_ITEMS = [
  { id: 1, title: 'Home', route: '/' },
  { id: 2, title: 'About', route: '/about' },
  // { id: 3, title: 'About', route: '/about' },
  // { id: 4, title: 'About', route: '/about' },
];

const NavItems = () => (
  <motion.nav key="parent" variants={navMotion} style={{ display: 'flex' }}>
    {NAV_ITEMS.map(({ id, title, route }) => (
      <motion.div key={id} variants={navItemMotion}>
        <Link href={route} passHref key={id}>
          <a style={{ padding: '0 20px' }}>{title}</a>
        </Link>
      </motion.div>
    ))}
  </motion.nav>
);

export default NavItems;
