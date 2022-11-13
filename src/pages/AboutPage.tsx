import { NextPage } from 'next';
import { NavBar } from '../components/Navbar';
import { Text } from '@nextui-org/react';

const AboutPage: NextPage = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <Text h1 css={{ paddingLeft: '25px' }} size={60}>
        About Me!
      </Text>
    </>
  );
};

export default AboutPage;
