import Image from 'next/image';
import React from 'react';
type Props = { width?: number; height?: number; className?: string };
export const PlusIcon = ({ height = 12, width = 12, className }: Props) => {
  return <Image src="/icons/plus.svg" width={width} height={height} alt="all" className={className} />;
};
