import { Select } from 'antd';
import { selectOptions } from './declaration';
import { ListGame } from './list';

export const HotGame = () => {
  return (
    <section className="mt-5 md:flex-1">
      <div className="flex justify-between px-[25px]">
        <h2 className="font-semibold text-lg">HOT GAME</h2>
        <Select defaultValue="date" className="w-[146px] custom-select md:!hidden" options={selectOptions} />
      </div>
      <ListGame />
    </section>
  );
};
