import { NextPage } from 'next';
import { NavBar } from '../components/Navbar';
import { Text } from '@nextui-org/react';

const Contact: NextPage = (): JSX.Element => {
  return (
    <>
      <Text h1 css={{ paddingLeft: '25px' }} size={60}>
        Contact Me!
      </Text>
    </>
  );
};

export default Contact;
