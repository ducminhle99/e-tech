'use client';
import { BackIcon } from '@/components/icons/back';
import { NextIcon } from '@/components/icons/next';
import { Button, Carousel } from 'antd';
import { listHotGame, listHotGame2 } from './data';
import { GameItem, MobileGameItem } from './item';

export const ListGame = () => {
  return (
    <>
      <Carousel draggable className="px-10 mt-8 w-full md:!hidden custom-carousel" dots={false}>
        {listHotGame.map((item, index) => (
          <MobileGameItem {...item} key={index} />
        ))}
      </Carousel>
      <div className="relative hidden md:block">
        <div className="absolute right-0 -top-[60px] flex">
          <Button type="text" className="!px-0 opacity-20" disabled>
            <BackIcon />
          </Button>
          <Button type="text" className="!px-0">
            <NextIcon />
          </Button>
        </div>
        <div className="flex gap-5 pl-[25px] mt-[30px]">
          {listHotGame2.map((item, index) => (
            <GameItem {...item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};
