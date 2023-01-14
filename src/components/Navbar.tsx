import { Link, Navbar, Text } from '@nextui-org/react';
import React from 'react';

export const NavBar: React.FC = (): JSX.Element => {
  
const NavbarLinks = [{'Portfolio' : '/'}, {'About': '/AboutPage'}, {'Services': '/Services'}, {'Contact': '/Contact'}]

return (
    <header className='w-full'>
      <Navbar shouldHideOnScroll variant="sticky" >
        <Navbar.Brand className="grid sm:mx-auto">
          <Text
            color="inherit"
            size="$2xl"
            css={{ fontFamily: 'Style Script, cursive', padding: '$0' }}
            className='sm:pl-5'
          >
            Makeup By J&apos;Victoria
          </Text>
          <Text
            transform="capitalize"
            size="$xs"
            css={{ fontFamily: 'Montserrat, sans-serif', textAlign: 'center' }}
            className='hidden md:block'
          >
            &#x2022; Makeup Artist &#x2022;
          </Text>
        </Navbar.Brand>
     
        <Navbar.Content
          className="mx-auto hidden md:flex"
          enableCursorHighlight
          variant="highlight-rounded"
        >
          {NavbarLinks.map(link => {
            return Object.entries(link).map(([linkText, href]) => {
              return <Navbar.Link key={linkText} href={href}>{linkText}</Navbar.Link>
            })
          })}

        </Navbar.Content>

        <Navbar.Toggle className='md:hidden' aria-label="toggle navigation" />
        <Navbar.Collapse>
          {
            NavbarLinks.map(link => {
              return Object.entries(link).map(([linkText, href]) => {
               return (<Navbar.CollapseItem className='w-full p-1' key={linkText}>
                  <Link href={href}>
                    <Text className='text-center' size={50} color="#ff4ecd">{linkText}</Text>
                  </Link>
               </Navbar.CollapseItem>)
              })
            })
          }
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
