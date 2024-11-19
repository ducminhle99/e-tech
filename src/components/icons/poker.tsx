import Image from 'next/image';
import React from 'react';
type Props = { width?: number; height?: number };
export const PokerIcon = ({ height = 24, width = 24 }: Props) => {
  return <Image src="/icons/poker.svg" width={width} height={height} alt="poker" />;
};
