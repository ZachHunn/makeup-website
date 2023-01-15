import { Text } from '@nextui-org/react';
import { NextPage } from 'next';
import styles from '../styles/ThankyouPage.module.scss';

const ThankYou: NextPage = () => {
  return (
    <div className={styles.background}>
      <Text
        css={{ fontFamily: 'Barlow Condensed, sans-serif' }}
        className="text-center md:text-6xl text-5xl pt-12 md:pt-0"
      >
        {' '}
        Thank you for your inquiry{' '}
      </Text>
    </div>
  );
};

export default ThankYou;
