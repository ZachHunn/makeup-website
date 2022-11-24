import { Text } from '@nextui-org/react';
import { NextPage } from 'next';
import Script from 'next/script';

const Booking: NextPage = (): JSX.Element => {
  return (
    <>
      <Text h1 css={{ paddingLeft: '25px' }} size={60}>
        Book Now
      </Text>
      <Script src="https://square.site/appointments/buyer/widget/10mjamah16g32e/LHG8WR1A3JCED.js" />
    </>
  );
};

export default Booking;
