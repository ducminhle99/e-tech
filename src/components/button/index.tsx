'use client';
import { Button as AntButton, ButtonProps } from 'antd';
import clsx from 'clsx';

type Props = ButtonProps;

export const Button = ({ children, className, ...props }: Props) => {
  return (
    <AntButton {...props} className={clsx('hover:opacity-90', className)}>
      {children}
    </AntButton>
  );
};
