import Image from 'next/image';
import React from 'react';
type Props = { width?: number; height?: number };
export const TwitterIcon = ({ height = 20, width = 20 }: Props) => {
  return <Image src="/icons/twitter.svg" width={width} height={height} alt="twitter" />;
};