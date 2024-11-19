import { ArrowIcon } from '@/components/icons/arrow';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type ThumbnailProps = {
  image: string;
  alt: string;
  color: string;
  link: string;
  text: string;
};

export const Thumbnail = ({ alt, color, image, link, text }: ThumbnailProps) => {
  return (
    <div className="relative h-[420px] md:h-[576px] w-full" style={{ backgroundColor: color }}>
      <div className="w-full !h-full max-w-[1400px] mx-auto relative">
        <Image alt={alt} src={image} className="object-cover w-full !h-full" width={1400} height={576} loading="lazy" />
        <div
          className="absolute top-0 left-0 bottom-0 w-10 hidden md:block"
          style={{
            background: `linear-gradient(to right, ${color}, transparent)`,
          }}
        />
        <div
          className="absolute top-0 right-0 bottom-0 w-10  hidden md:block"
          style={{
            background: `linear-gradient(to left, ${color}, transparent)`,
          }}
        />
      </div>
      <div className="md:hidden absolute bottom-0 left-0 right-0 h-[112px] pt-4 flex flex-col items-center bg-gradient-to-t from-[#00000080] to-transparent">
        <p className="text-2xl text-white">{text}</p>
        <Link href={link} className="text-sm text-white flex items-center gap-1 mt-5">
          Game Details
          <ArrowIcon />
        </Link>
      </div>
    </div>
  );
};
