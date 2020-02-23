import React from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { Container, Row } from '@identity/grid';
import { NavItems } from '@patterns/Navigation';
import Logo from '@components/Logo';

const Header = () => {
  return (
    <AnimatePresence>
      <motion.header
        transition={{
          type: 'spring',
          damping: 50,
          stiffness: 250,
          staggerChildren: 0.25,
          when: 'beforeChildren',
        }}
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        exit={{ y: 0 }}
        style={{
          background: '#ffffff',
          boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 10px',
        }}
      >
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{
            delay: 0.25,
            damping: 50,
            stiffness: 250,
          }}
        >
          <Container space={{ padding: 'vertical-md' }}>
            <Row justifyContent="space-between">
              <Logo />
              <NavItems />
            </Row>
          </Container>
        </motion.div>
      </motion.header>
    </AnimatePresence>
  );
};

export default Header;
