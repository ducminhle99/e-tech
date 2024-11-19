import { GamesPage } from '@/modules/games';
export async function generateMetadata() {
  return {
    title: 'GAMES',
    description: 'games page',
  };
}

export default function Games() {
  return <GamesPage />;
}
