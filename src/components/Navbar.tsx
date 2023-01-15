import { Link, Navbar, Text } from '@nextui-org/react';
import React from 'react';
import { useRouter } from 'next/router';

export const NavBar: React.FC = (): JSX.Element => {
  const router = useRouter();
  const NavbarLinks = [
    { Portfolio: '/' },
    { About: '/AboutPage' },
    { Services: '/Services' },
    { Contact: '/Contact' },
  ];

  return (
    <header className="w-full">
      <Navbar variant="sticky">
        <Navbar.Brand
          className="grid sm:mx-auto cursor-pointer hover:text-shampoo"
          onClick={() => router.push('/')}
        >
          <Text
            color="inherit"
            size="$2xl"
            css={{ fontFamily: 'Style Script, cursive', padding: '$0' }}
            className="sm:pl-5"
          >
            Makeup By J&apos;Victoria
          </Text>
          <Text
            transform="capitalize"
            size="$sm"
            css={{ fontFamily: 'Montserrat, sans-serif', textAlign: 'center' }}
            className="hidden md:block "
          >
            &#x2022; Makeup Artist &#x2022;
          </Text>
        </Navbar.Brand>

        <Navbar.Content
          className="mx-auto hidden md:flex"
          variant="highlight-rounded"
        >
          {NavbarLinks.map((link) => {
            return Object.entries(link).map(([linkText, href]) => {
              return (
                <Navbar.Link key={linkText} href={href}>
                  <Text
                    css={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                    className="tracking-wide hover:text-pink hover:underline hover:underline-offset-8"
                    size={25}
                  >
                    {linkText}
                  </Text>
                </Navbar.Link>
              );
            });
          })}
        </Navbar.Content>

        <Navbar.Toggle className="md:hidden" aria-label="toggle navigation" />
        <Navbar.Collapse className="background-blur-md">
          {NavbarLinks.map((link) => {
            return Object.entries(link).map(([linkText, href]) => {
              return (
                <Navbar.CollapseItem className="w-full p-1" key={linkText}>
                  <Link href={href} className="mx-auto">
                    <Text
                      css={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                      className="tracking-wide hover:text-pink hover:underline hover:underline-offset-8"
                      size={50}
                      color="#ff4ecd"
                    >
                      {linkText}
                    </Text>
                  </Link>
                </Navbar.CollapseItem>
              );
            });
          })}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
