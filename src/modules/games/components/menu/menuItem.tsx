import clsx from 'clsx';
import { ReactNode } from 'react';

type MenuItemProps = {
  label: string;
  icon: ReactNode;
  isSelected?: boolean;
  labelClassName?: string;
  className?: string;
};

export const MobileMenuItem = ({ icon, label, className, isSelected, labelClassName }: MenuItemProps) => {
  return (
    <li
      className={clsx(
        'opacity-20 cursor-pointer h-20 flex flex-col items-center pt-5 flex-1 border-b-[1px] border-b-black hover:opacity-80',
        { '!opacity-80': isSelected },
        className
      )}
    >
      {icon}
      <p className={clsx('text-[10px] font-semibold mt-[6px]', labelClassName)}>{label}</p>
    </li>
  );
};

export const MenuItem = ({ icon, label, className, isSelected, labelClassName }: MenuItemProps) => {
  return (
    <li className={clsx('opacity-20 cursor-pointer flex items-center gap-1 hover:opacity-80', className, { '!opacity-80': isSelected })}>
      {icon}
      <p className={clsx('text-base font-semibold', labelClassName)}>{label}</p>
    </li>
  );
};
