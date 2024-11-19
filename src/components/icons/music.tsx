import Image from 'next/image';
import React from 'react';
type Props = { width?: number; height?: number };
export const MusicIcon = ({ height = 24, width = 24 }: Props) => {
  return <Image src="/icons/music.svg" width={width} height={height} alt="music" />;
};
