import Image from 'next/image';
import React from 'react';
type Props = { width?: number; height?: number };
export const ArrowIcon = ({ height = 13, width = 12 }: Props) => {
  return <Image src="/icons/arrow.svg" width={width} height={height} alt="arrow" />;
};
