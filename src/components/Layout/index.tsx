import React from 'react';
import { Header } from '@patterns/Navigation';
import Footer from '@patterns/Footer';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
