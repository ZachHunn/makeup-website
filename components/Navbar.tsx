import { Navbar, Text } from '@nextui-org/react';
import { Logo } from './Logo';

export const NavBar: React.FC = (): JSX.Element => {
  return (
    <Navbar shouldHideOnScroll variant="sticky">
      <Navbar.Brand>
        <Logo />
        <Text b color="inherit" hideIn="xs">
          Makeup By J&apos;Victoria
        </Text>
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
        <Navbar.Link href="/">Gallery</Navbar.Link>
        <Navbar.Link href="/AboutPage">About</Navbar.Link>
        <Navbar.Link href="/Services">Services</Navbar.Link>
        <Navbar.Link href="/Booking">Book Now</Navbar.Link>
        <Navbar.Link href="/Contact">Contact</Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
};
