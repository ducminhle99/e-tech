import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import React from 'react';

type Props = React.PropsWithChildren;

export const PublicLayout = ({ children }: Props) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};
