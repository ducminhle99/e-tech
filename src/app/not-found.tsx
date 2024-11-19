import { Button } from 'antd';
import Link from 'next/link';

export async function generateMetadata() {
  return {
    title: 'not found',
  };
}

export default function NotFound() {
  return (
    <>
      <div className="px-4 flex flex-col items-center justify-center min-h-screen">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">
          <Button>Return GAMES</Button>
        </Link>
      </div>
    </>
  );
}
