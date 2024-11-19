import { MusicIcon } from '@/components/icons/music';
import { TCategoryItem } from './item';
import { PokerIcon } from '@/components/icons/poker';

export const listHottestData: TCategoryItem[] = [
  {
    color: '#5C6EFF',
    icon: <MusicIcon />,
    name: 'Music',
    desc: 'Music makes everything better, and these games will grove to it!',
    slot1: '/images/image6.webp',
    slot2: '/images/image3.webp',
    slot3: '/images/image13.webp',
    slot4: '/images/image5.webp',
    slot5: '/images/image11.webp',
  },
  {
    desc: 'The classic table games for the gentlemen and ladies.',
    icon: <PokerIcon />,
    name: 'Table Games',
    slot1: '/images/image6.webp',
    slot2: '/images/image3.webp',
    slot3: '/images/image13.webp',
    slot4: '/images/image5.webp',
    slot5: '/images/image7.webp',
    color: '#19796A',
  },
];

export const mobileHottestData = [...listHottestData, ...listHottestData];
