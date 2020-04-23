import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row } from '@identity/grid';
// import Logo from '@components/Logo';
import { footerMotion, logoMotion } from './motion';

const Footer = () => {
  return (
    <motion.footer
      variants={footerMotion}
      initial="hidden"
      animate="visible"
      style={{
        background: 'white',
        boxShadow: 'var(--box-shadow)',
      }}
    >
      <Container space={{ padding: 'vertical-md' }}>
        <Row>
          <motion.div variants={{ ...logoMotion }}>
            <div>THE PEAK</div>
          </motion.div>
        </Row>
      </Container>
    </motion.footer>
  );
};

export default Footer;
