'use client';
import { TimeLineIcon } from '@/components/icons/TimeLine';
import { AllIcon } from '@/components/icons/all';
import { FilterIcon } from '@/components/icons/filter';
import { HomeIcon } from '@/components/icons/home';
import { SearchIcon } from '@/components/icons/search';
import { Divider } from 'antd';
import { MenuItem, MobileMenuItem } from './menuItem';

export const MenuBar = () => {
  return (
    <section className="md:max-w-[160px]">
      <ul className="flex md:hidden">
        <MobileMenuItem icon={<HomeIcon />} label="HOME" />
        <MobileMenuItem icon={<TimeLineIcon />} label="TIMELINE" />
        <MobileMenuItem icon={<AllIcon />} label={'ALL \n GAMES'} labelClassName="whitespace-pre-line text-center !mt-0" isSelected />
        <MobileMenuItem icon={<SearchIcon />} label="SEARCH" />
        <MobileMenuItem icon={<FilterIcon />} label="FILTER" className="border-l-[1px]" />
      </ul>
      <ul className="hidden md:block w-[160px] space-y-5 mt-11">
        <li>
          <div className="flex items-center gap-1">
            <SearchIcon className="opacity-20" />
            <input className="!outline-none !border-none w-full" />
          </div>
          <Divider className="!my-3" />
        </li>
        <MenuItem icon={<HomeIcon />} label="Games Home" isSelected />
        <MenuItem icon={<TimeLineIcon />} label="Timeline" />
        <MenuItem icon={<AllIcon />} label="All Games" />
      </ul>
    </section>
  );
};
