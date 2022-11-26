import { Navbar, Text } from '@nextui-org/react';
import React from 'react';

export const NavBar: React.FC = (): JSX.Element => {
  return (
    <Navbar shouldHideOnScroll isBordered variant="sticky">
      <Navbar.Brand className="grid">
        <Text
          color="inherit"
          size="$2xl"
          css={{ fontFamily: 'Style Script, cursive', padding: '$0' }}
        >
          Makeup By J&apos;Victoria
        </Text>
        <Text
          transform="capitalize"
          size="$xs"
          css={{ fontFamily: 'Montserrat, sans-serif', textAlign: 'center' }}
        >
          &#x2022; Makeup Artist &#x2022;
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        className="mx-auto"
        enableCursorHighlight
        variant="highlight-rounded"
      >
        <Navbar.Link href="/">Portfolio</Navbar.Link>
        <Navbar.Link href="/AboutPage">About</Navbar.Link>
        <Navbar.Link href="/Services">Services</Navbar.Link>
        <Navbar.Link href="/Contact">Contact</Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
};
