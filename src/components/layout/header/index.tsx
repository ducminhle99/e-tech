import Image from 'next/image';
import Link from 'next/link';
import { MenuItem } from './item';
import { MenuButton } from './menuButton';
import { ItemProps } from './type';

const itemData: ItemProps[] = [
  { link: '/home', text: 'HOME' },
  { link: '/', text: 'GAMES' },
  { link: '/news', text: 'NEWS' },
  { link: '/math', text: 'MATH' },
  { link: '/company', text: 'COMPANY' },
  { link: '/event', text: 'EVENTS' },
  { link: '/partners', text: 'PARTNERS' },
];

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center bg-gradient-to-b from-[#00000080] md:from-[#000000] md:to-[#00000080] to-transparent p-4 h-[100px] md:h-[90px]">
      <div className="!max-w-[1240px] flex justify-between w-full md:items-center items-start relative">
        <Link href="/">
          <Image src="/icons/logo.svg" width={54} height={32} alt="E-Tech" className="md:!w-[109px] md:!h-[64px] drop-shadow-lg" loading="lazy" />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-[42px]">
            {itemData.map((item, index) => (
              <MenuItem link={item.link} text={item.text} key={index} />
            ))}
          </ul>
        </nav>
        <MenuButton listItem={itemData} />
      </div>
    </header>
  );
};
