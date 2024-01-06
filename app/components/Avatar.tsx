'use client';

import Image from 'next/image';

export const Avatar = () => {
  return (
    <Image
      className='rounded-full'
      src='/images/placeholder.jpg'
      height='30'
      width='30'
      alt='Avatar Icon'
    />
  );
};
