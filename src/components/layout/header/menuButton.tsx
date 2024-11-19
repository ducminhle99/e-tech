'use client';
import { Button } from 'antd';
import clsx from 'clsx';
import { useState } from 'react';
import { MobileMenuItem } from './item';
import { ItemProps } from './type';

export const MenuButton = ({ listItem }: { listItem: ItemProps[] }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="md:!hidden">
      <Button type="text" className="!px-2 drop-shadow-xl" aria-label="menu" onClick={() => setIsOpen((pre) => !pre)}>
        <div className="flex flex-col items-center justify-center">
          <span className={clsx('block h-[2px] w-[18px] bg-white mb-1 transition-all duration-300', { 'rotate-45 translate-y-2': isOpen })}></span>
          <span className={clsx('block h-[2px] w-[18px] bg-white mb-1 transition-all duration-300', { 'opacity-0 mb-2': isOpen })}></span>
          <span className={clsx('block h-[2px] w-[18px] bg-white transition-all duration-300', { '-rotate-45 -translate-y-2': isOpen })}></span>
        </div>
      </Button>
      {isOpen && (
        <nav className="md:hidden absolute left-0 right-0 top-[60px] bg-white shadow-md">
          <ul className="[&>li:last-child>.ant-divider]:!hidden">
            {listItem.map((item, index) => (
              <MobileMenuItem link={item.link} text={item.text} key={index} />
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};
