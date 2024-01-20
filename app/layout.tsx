import { FC, ReactNode } from 'react';

import type { Metadata } from 'next';

import { Nunito } from 'next/font/google';

import '@/app/globals.css';

import { ClientOnly } from '@/app/components/ClientOnly';
import { Navbar } from '@/app/components/navbar/Navbar';
import { RegisterModal } from '@/app/components/modal/RegisterModal';
import { LoginModal } from '@/app/components/modal/LoginModal';
import { RentModal } from '@/app/components/modal/RentModal';
import { ToasterProvider } from '@/app/providers/ToasterProvider';

import getCurrentUser from '@/app/actions/getCurrentUser';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Airbnb | Vacation rentals, cabins, beach houses & more',
  description: 'Airbnb Clone',
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = async ({ children }) => {
  const currentUser = await getCurrentUser();

  return (
    <html lang='en'>
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
