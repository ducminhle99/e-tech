'use client';
import Image from 'next/image';
import React, { ReactNode } from 'react';

export type TCategoryItem = {
  icon: ReactNode;
  name: string;
  desc: string;
  slot1: string;
  slot2: string;
  slot3: string;
  slot4: string;
  slot5: string;
  color: string;
};

export const CategoryItem = ({ desc, icon, name, slot1, slot2, slot3, slot4, slot5, color }: TCategoryItem) => {
  return (
    <div className="cursor-pointer w-full h-full bg-[#0000000D] rounded-[22px] p-4 md:p-5 gap-4 flex">
      <div className="flex flex-col gap-4 flex-1">
        <div className="flex-1 aspect-square rounded-2xl overflow-hidden p-4" style={{ background: color }}>
          {icon}
          <p className="text-white mt-3 text-lg">{name}</p>
          <p className="mt-3 text-[11px] text-white opacity-60">{desc}</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <Image src={slot1} width={75} height={75} className="object-cover flex-1" alt="logo" loading="lazy" />
          <Image src={slot2} width={75} height={75} className="object-cover flex-1" alt="logo" loading="lazy" />
        </div>
      </div>
      <div className="flex flex-col gap-4 flex-1">
        <div className="flex items-center justify-between gap-4">
          <Image src={slot3} width={75} height={75} className="object-cover flex-1" alt="logo" loading="lazy" />
          <Image src={slot4} width={75} height={75} className="object-cover flex-1" alt="logo" loading="lazy" />
        </div>
        <div className="flex-1">
          <Image src={slot5} width={167} height={167} className="object-cover h-full w-full rounded-2xl aspect-square" alt="logo" loading="lazy" />
        </div>
      </div>
    </div>
  );
};
