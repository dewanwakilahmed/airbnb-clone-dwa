'use client';

import { FC } from 'react';
import { User } from '@prisma/client';

import { Container } from '@/app/components/Container';
import { Logo } from '@/app/components/navbar/Logo';
import { Search } from '@/app/components/navbar/Search';
import { UserMenu } from '@/app/components/navbar/UserMenu';

interface NavbarProps {
  currentUser?: User | null;
}

export const Navbar: FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};
