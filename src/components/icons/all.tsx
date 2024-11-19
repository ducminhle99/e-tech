import Image from 'next/image';
import React from 'react';
type Props = { width?: number; height?: number };
export const AllIcon = ({ height = 20, width = 20 }: Props) => {
  return <Image src="/icons/all.svg" width={width} height={height} alt="all" />;
};
