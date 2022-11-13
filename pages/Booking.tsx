import { NextPage } from 'next';
import { NavBar } from '../components/Navbar';
import { Text } from '@nextui-org/react';

const Booking: NextPage = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <Text h1 css={{ paddingLeft: '25px' }} size={60}>
        Portfolio
      </Text>
    </>
  );
};

export default Booking;
