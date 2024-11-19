'use client';
import Link from 'next/link';
import { ItemProps } from './type';
import clsx from 'clsx';
import { Divider } from 'antd';
import { usePathname } from 'next/navigation';

export const MenuItem = ({ link, text }: ItemProps) => {
  const path = usePathname();
  const isActive = path === link;
  return (
    <li className="relative group">
      <Link
        prefetch={false}
        href={link}
        className={clsx('text-[#FFFFFF80] text-[15px] h-[90px] flex items-center group-hover:!text-white', { '!text-white': isActive })}
      >
        {text}
      </Link>
      <div className={clsx('hidden absolute bg-white h-[3px] bottom-0 w-full group-hover:!block', { '!block': isActive })} />
    </li>
  );
};

export const MobileMenuItem = ({ link, text }: ItemProps) => {
  const path = usePathname();
  const isActive = path === link;
  return (
    <li className="my-2">
      <Link prefetch={false} href={link} className={clsx('flex justify-center underline-offset-2 hover:underline', { underline: isActive })}>
        {text}
      </Link>
      <Divider className="!my-2" />
    </li>
  );
};
