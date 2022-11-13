import { NextPage } from 'next';
import { NavBar } from '../components/Navbar';
import { Text, Image } from '@nextui-org/react';

const AboutPage: NextPage = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <Text h1 css={{ paddingLeft: '25px' }} size={60}>
        About Me!
      </Text>

      <Image
        css={{
          borderRadius: '50px',
          border: 'solid 1px',
          width: 'auto',
          height: '400px',
          margin: 'auto',
        }}
        objectFit="fill"
        src="about_jv.jpg"
        alt="makeup artist photo"
      />
    </>
  );
};

export default AboutPage;
