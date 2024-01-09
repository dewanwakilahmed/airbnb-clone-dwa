'use client';

import { FC } from 'react';
import Image from 'next/image';

interface AvatarProps {
  src: string | null | undefined;
}

export const Avatar: FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      className='rounded-full'
      src={src || '/images/placeholder.jpg'}
      height='30'
      width='30'
      alt='Avatar Icon'
    />
  );
};
