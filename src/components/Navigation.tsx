import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
export const Navigation: React.FC = () => {
  const navbarLinks = [
    { Gallery: '/' },
    { Services: '/Services' },
    { About: '/AboutPage' },
    { Contact: '/Contact' },
  ];

  return (
    <header className="h-auto w-full bg-white sticky top-0 shadow-md z-10">
      <nav className="w-1/2 h-auto py-8 px-12 flex items-center justify-around mx-auto">
        <Link href="/">
          <p className="text-secondary hover:text-accent hover:underline hover:underline-offset-8 hover:text-lg">
            Gallery
          </p>
        </Link>

        <Link href="/Services">
          <p className="text-secondary hover:text-accent hover:underline hover:underline-offset-8 hover:text-lg">
            Services
          </p>
        </Link>

        <Logo />

        <Link href="/AboutPage">
          <p className="text-secondary hover:text-accent hover:underline hover:underline-offset-8 hover:text-lg">
            About
          </p>
        </Link>

        <Link href="/Contact">
          <p className="text-secondary hover:text-accent hover:underline hover:underline-offset-8 hover:text-lg">
            Contact
          </p>
        </Link>
      </nav>
    </header>
  );
};
