import { GameCarousel } from './components/gameCarousel';
import { HotGame } from './components/hotGame';
import { HottestCategory } from './components/hottestCategory';
import { MenuBar } from './components/menu';
import './style.css';
export const GamesPage = () => {
  return (
    <article className="w-full">
      <GameCarousel />
      <div className="max-w-[1240px] mx-auto md:flex md:pt-[100px]">
        <MenuBar />
        <div>
          <HotGame />
          <HottestCategory />
        </div>
      </div>
    </article>
  );
};
