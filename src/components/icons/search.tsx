import Image from 'next/image';
import React from 'react';
type Props = { width?: number; height?: number; className?: string };
export const SearchIcon = ({ height = 20, width = 20, className }: Props) => {
  return <Image src="/icons/search.svg" width={width} height={height} alt="search" className={className} />;
};
