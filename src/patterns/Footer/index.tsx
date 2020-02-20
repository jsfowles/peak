import React from 'react';
import { Container, Row } from '@identity/grid';
import Logo from '@components/Logo';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid gray' }}>
      <Container space={{ padding: 'vertical-md' }}>
        <Row>
          <Logo />
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
