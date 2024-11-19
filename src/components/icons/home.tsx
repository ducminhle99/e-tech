import Image from 'next/image';
import React from 'react';
type Props = { width?: number; height?: number };
export const HomeIcon = ({ height = 20, width = 20 }: Props) => {
  return <Image src="/icons/home.svg" width={width} height={height} alt="home" />;
};
