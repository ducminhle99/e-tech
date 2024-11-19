import Image from 'next/image';
import React from 'react';
type Props = { width?: number; height?: number };
export const YoutubeIcon = ({ height = 20, width = 20 }: Props) => {
  return <Image src="/icons/youtube.svg" width={width} height={height} alt="youtube" />;
};
