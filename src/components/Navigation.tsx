'use client';
import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { useScroll } from '../hooks/useScroll';
import { MenuButton } from './MenuButton';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

type MenuItem = {
  title: string;
  href: string;
};
const MenuItems: MenuItem[] = [
  { title: 'Gallery', href: '/' },
  { title: 'Services', href: '/Services' },
  { title: 'About', href: '/AboutPage' },
  { title: 'Contact', href: '/Contact' },
];

const menuVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const Navigation: React.FC = () => {
  const { scrollDirection } = useScroll();
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const toggleNavVisibility = (direction: string | null) => {
    switch (direction) {
      case 'up':
        return 'hidden-nav';
      case 'down':
        return 'active-nav';
      default:
        return '';
    }
  };

  return (
    <header
      className={`${toggleNavVisibility(
        scrollDirection,
      )} w-full bg-white sticky top-0 shadow-md z-10`}
    >
      <>
        <nav className="w-full h-auto py-8 px-12 hidden items-center justify-around mx-auto md:flex">
          <div className="flex justify-center items-center w-full">
            <Link href="/" className="mr-4 px-4">
              <p className="text-lg text-secondary hover:text-accent hover:underline hover:underline-offset-8">
                Gallery
              </p>
            </Link>

            <Link href="/Services" className="mr-4 px-4">
              <p className="text-lg text-secondary hover:text-accent hover:underline hover:underline-offset-8">
                Services
              </p>
            </Link>

            <Logo />

            <Link href="/AboutPage" className="mr-4 px-4">
              <p className=" text-lg text-secondary hover:text-accent hover:underline hover:underline-offset-8">
                About
              </p>
            </Link>

            <Link href="/Contact" className="mr-4 px-4">
              <p className="text-lg text-secondary hover:text-accent hover:underline hover:underline-offset-8">
                Contact
              </p>
            </Link>
          </div>
        </nav>
      </>

      <div className="w-screen">
        <nav
          className={` h-20 px-4 w-full md:hidden flex justify-between items-center`}
        >
          <h1 className="text-md uppercase text-black font-semibold">
            Makeup By J'Victoria
          </h1>

          <MenuButton
            isOpen={isOpen}
            //@ts-ignore
            onClick={() => setIsOpen(!isOpen)}
            strokeWidth="2"
            color="#000"
            transition={{ ease: 'easeOut', duration: 0.2 }}
            width="24"
            height="12"
          />
        </nav>
      </div>

      <div
        className={`${isOpen ? 'dropdown flex justify-center pb-5' : 'hidden'}`}
      >
        <motion.ul variants={menuVariants}>
          {MenuItems.map((menuItem) => (
            <motion.li
              variants={menuItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              key={menuItem.title}
            >
              <div
                key={menuItem.title}
                onClick={() => {
                  setIsOpen((prev) => !prev);
                  router.push(menuItem.href);
                }}
              >
                <p className='text-3xl p-3 text-secondary hover:text-accent hover:underline hover:underline-offset-8"'>
                  {menuItem.title}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </header>
  );
};
