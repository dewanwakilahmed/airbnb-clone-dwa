'use client';

import { FC } from 'react';

interface MenuItemsProps {
  onClick: () => void;
  label: string;
}

export const MenuItem: FC<MenuItemsProps> = ({ onClick, label }) => {
  return (
    <div
      className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
      onClick={onClick}
    >
      {label}
    </div>
  );
};
