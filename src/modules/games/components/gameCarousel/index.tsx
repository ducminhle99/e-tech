'use client';
import { Carousel } from 'antd';
import { Thumbnail } from './thumbnail';

export const GameCarousel = () => {
  return (
    <Carousel
      infinite
      draggable
      autoplay
      dots={{
        className: '!bottom-[112px] md:!bottom-[42px] gap-[8px] custom-dots !max-w-[1400px] !mx-auto md:!justify-start !px-[100px]',
      }}
    >
      <Thumbnail alt="Chicky Run" color="#1047B9" image="/images/image1.webp" link="" text="Chicky Run" />
      <Thumbnail alt="Futebol Fever" color="#03827E" image="/images/image2.webp" link="" text="Futebol Fever" />
      <Thumbnail alt="Chicky Run" color="#1047B9" image="/images/image1.webp" link="" text="Chicky Run" />
      <Thumbnail alt="Futebol Fever" color="#03827E" image="/images/image2.webp" link="" text="Futebol Fever" />
      <Thumbnail alt="Chicky Run" color="#1047B9" image="/images/image1.webp" link="" text="Chicky Run" />
    </Carousel>
  );
};
