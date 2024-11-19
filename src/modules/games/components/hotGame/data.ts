import { GameItemProps } from './item';

export const listHotGame: GameItemProps[] = [
  {
    desc: 'Legend has it that a farmer was granted a seed fr,om a deity.',
    image: '/images/image9.webp',
    label: 'Tree Of Fortune',
    logo: '/images/image13.webp',
    color: '#C48F03',
  },
  {
    desc: '4TECH™ has just launched their very first Mahjong inspired slot machine gam…',
    image: '/images/image8.webp',
    label: 'Mahjong Ways',
    logo: '/images/image4.webp',
    color: '#2B8013',
  },
  {
    desc: 'Águila which means ‘The Eagle’ is a three-person Mexican bandit team that is activ…',
    image: '/images/image10.webp',
    label: 'Wild Bandito',
    logo: '/images/image12.webp',
    color: '#DC66BD',
  },
];

const [, ...rest] = listHotGame;
export const listHotGame2 = rest;
