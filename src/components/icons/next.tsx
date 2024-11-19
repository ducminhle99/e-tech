import Image from 'next/image';
import React from 'react';
type Props = { width?: number; height?: number };
export const NextIcon = ({ height = 30, width = 30 }: Props) => {
  return <Image src="/icons/next.svg" width={width} height={height} alt="next" />;
};
