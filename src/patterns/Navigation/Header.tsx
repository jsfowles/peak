import React from 'react';

import { motion } from 'framer-motion';
import { Container, Row } from '@identity/grid';
import { NavItems } from '@patterns/Navigation';
// import Logo from '@components/Logo';

import { headerMotion, logoMotion } from './motion';

const Header = () => {
  return (
    <motion.header
      variants={headerMotion}
      initial="hidden"
      animate="visible"
      style={{
        background: '#ffffff',
        boxShadow: 'var(--box-shadow)',
      }}
    >
      <Container space={{ padding: 'vertical-md' }}>
        <Row justifyContent="space-between">
          <motion.div
            variants={{ ...logoMotion }}
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div>THE PEAK</div>
            <NavItems />
          </motion.div>
        </Row>
      </Container>
    </motion.header>
  );
};

export default Header;
