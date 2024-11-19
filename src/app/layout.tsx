import { AppProviders } from '@/containers/appProviders';
import { PublicLayout } from '@/containers/publicLayout';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const inter = localFont({
  src: './fonts/Inter-VariableFont_opsz,wght.ttf',
  variable: '--font-inter',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'E-Tech',
  description: 'E-Tech test 1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AppProviders>
          <PublicLayout>{children}</PublicLayout>
        </AppProviders>
      </body>
    </html>
  );
}
