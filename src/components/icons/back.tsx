import Image from 'next/image';
import React from 'react';
type Props = { width?: number; height?: number };
export const BackIcon = ({ height = 30, width = 30 }: Props) => {
  return <Image src="/icons/back.svg" width={width} height={height} alt="back" />;
};
