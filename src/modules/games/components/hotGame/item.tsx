'use client';
import { Button } from 'antd';
import Image from 'next/image';

export type GameItemProps = {
  image: string;
  logo: string;
  label: string;
  desc: string;
  color?: string;
};

export const MobileGameItem = ({ desc, image, label, logo, color = 'gray' }: GameItemProps) => {
  return (
    <div className="w-full">
      <div className="h-[348px] w-full rounded-[14px] overflow-hidden">
        <Image alt="logo" src={image} width={490} height={221} loading="lazy" className="object-cover w-full !h-[180px]" />
        <div className="p-5 h-full" style={{ backgroundColor: color }}>
          <div className="flex gap-5">
            <Image alt="logo" src={logo} width={90} height={90} loading="lazy" className="object-cover w-[60px] !h-[60px]" />
            <div>
              <p className="text-white font-semibold text-base">{label}</p>
              <p className="text-xs opacity-50 text-white">{desc}</p>
            </div>
          </div>
          <div className="mt-6 flex justify-between">
            <div>
              <p className="text-sm text-white">MEDIUM</p>
              <p className="text-xs opacity-50 text-white ">Volatility</p>
            </div>
            <div>
              <p className="text-sm text-white">95.01%</p>
              <p className="text-xs opacity-50 text-white ">RTP</p>
            </div>
            <div>
              <p className="text-sm text-white">x5000</p>
              <p className="text-xs opacity-50 text-white ">Maximum Win</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const GameItem = ({ desc, image, label, logo }: GameItemProps) => {
  return (
    <div className="flex-1">
      <Image src={image} alt="logo" loading="lazy" height={222} width={490} className="object-cover !w-full !h-[222px] rounded-[10px]" />
      <div className="flex items-center gap-5 mt-[30px]">
        <Image src={logo} alt="logo" height={90} width={90} className="object-cover !w-[90px] !h-[90px]" loading="lazy" />
        <div className="flex flex-1 items-center justify-between flex-wrap">
          <div className="max-w-[270px]">
            <p className="font-semibold text-xl">{label}</p>
            <p className="text-sm opacity-50">{desc}</p>
          </div>
          <Button className="!w-[75px] !h-[28px] !rounded-[3px]">View</Button>
        </div>
      </div>
    </div>
  );
};
