import React from 'react';
import { Container, Row } from '@identity/grid';
import { NavItems } from '@patterns/Navigation';
import Logo from '@components/Logo';

const Header = () => {
  return (
    <header style={{ borderBottom: '1px solid gray' }}>
      <Container space={{ padding: 'vertical-md' }}>
        <Row>
          <Logo />
          <NavItems />
        </Row>
      </Container>
    </header>
  );
};

export default Header;
