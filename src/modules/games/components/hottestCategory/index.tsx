import { BackIcon } from '@/components/icons/back';
import { NextIcon } from '@/components/icons/next';
import { Button, Carousel } from 'antd';
import { listHottestData, mobileHottestData } from './data';
import { CategoryItem } from './item';
import { PlusIcon } from '@/components/icons/plus';

export const HottestCategory = () => {
  return (
    <section className="mt-5 md:flex-1 md:mt-[85px]">
      <h2 className="font-semibold text-lg uppercase px-[25px] mb-[30px]">Hottest Category</h2>
      <div className="md:hidden flex justify-center">
        <Carousel
          draggable
          autoplay
          infinite
          className="flex justify-center w-full min-h-[290px] max-w-[420px] custom-carousel"
          dots={{ className: '.custom-dots custom-dots-2 !-bottom-5' }}
        >
          {mobileHottestData.map((item, index) => (
            <CategoryItem {...item} key={index} />
          ))}
        </Carousel>
      </div>
      <div className="md:hidden w-full px-5">
        <Button className="w-full mt-[50px] !h-[50px] !text-black">
          Load More <PlusIcon />
        </Button>
      </div>
      <div className="hidden md:block pl-[25px] relative">
        <div className="absolute right-0 -top-[60px] flex">
          <Button type="text" className="!px-0 opacity-20" disabled>
            <BackIcon />
          </Button>
          <Button type="text" className="!px-0">
            <NextIcon />
          </Button>
        </div>
        <div className="flex gap-5 flex-wrap">
          {listHottestData.map((item, index) => {
            return (
              <div className="max-w-[490px] min-w-[340px]" key={index}>
                <CategoryItem {...item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
