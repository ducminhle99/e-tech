import Image from 'next/image';
import React from 'react';
type Props = { width?: number; height?: number };
export const LogoIcon = ({ height = 53, width = 31 }: Props) => {
  return <Image src="/icons/logo2.svg" width={width} height={height} alt="logo" />;
};
