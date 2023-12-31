import type { Metadata } from 'next';

// Font
import { Nunito } from 'next/font/google';

// CSS
import './globals.css';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Airbnb | Vacation rentals, cabins, beach houses & more',
  description: 'Airbnb Clone',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
