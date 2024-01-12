'use client';

import { FC, useCallback } from 'react';
import Image from 'next/image';
import { CldUploadWidget } from 'next-cloudinary';
import { TbPhotoPlus } from 'react-icons/tb';

declare global {
  var cloudinary: any;
}

const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

interface ImageUploadProps {
  value: string;
  onChange: (value: string) => void;
}

export const ImageUpload: FC<ImageUploadProps> = ({ value, onChange }) => {
  const handleUpload = useCallback(
    (result: any) => onChange(result.info.secure_url),
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <div
            className='relative cursor-pointer hover:opactiy-70 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col    justify-center items-center gap-4 text-neutral-600'
            onClick={() => open?.()}
          >
            <TbPhotoPlus size={50} />

            <div className='font-semibold text-lg'>Click to upload</div>

            {value && (
              <div className='absolute inset-0 w-full h-full'>
                <Image
                  fill
                  style={{ objectFit: 'cover' }}
                  src={value}
                  alt='House'
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};
