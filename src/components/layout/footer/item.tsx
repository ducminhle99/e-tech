'use client';
import { PlusIcon } from '@/components/icons/plus';
import { Collapse } from 'antd';
import clsx from 'clsx';

type Props = {
  label: string;
  data: string[];
};

export const FooterCollapseItem = ({ data, label }: Props) => {
  return (
    <div>
      <Collapse
        ghost
        expandIcon={({ isActive }) => {
          return <PlusIcon className={clsx({ 'rotate-90': isActive })} />;
        }}
        expandIconPosition="end"
        items={[
          {
            key: '1',
            label: <p className="font-semibold uppercase text-sm">{label}</p>,
            children: data.map((item, index) => (
              <p className="text-xs opacity-60" key={index}>
                {item}
              </p>
            )),
          },
        ]}
      ></Collapse>
    </div>
  );
};

export const FooterItem = ({ data, label }: Props) => {
  return (
    <div>
      <p className="font-semibold uppercase text-sm mb-5">{label}</p>
      {data.map((item, index) => (
        <p className="text-xs opacity-40" key={index}>
          {item}
        </p>
      ))}
    </div>
  );
};
