import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Row } from '@identity/grid';
import Logo from '@components/Logo';

const Footer = () => {
  return (
    <AnimatePresence>
      <motion.footer
        transition={{ type: 'spring', damping: 50, stiffness: 250 }}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: 0 }}
        style={{
          background: 'white',
          boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 10px',
        }}
      >
        <Container space={{ padding: 'vertical-md' }}>
          <Row>
            <Logo />
          </Row>
        </Container>
      </motion.footer>
    </AnimatePresence>
  );
};

export default Footer;
