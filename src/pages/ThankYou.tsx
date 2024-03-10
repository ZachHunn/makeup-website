import { NextPage } from 'next';
import styles from '../styles/ThankyouPage.module.scss';

const ThankYou: NextPage = () => {
  return (
    <div className={styles.background}>
      <p className="text-center md:text-6xl text-5xl mt-12 md:pt-0">
        Thank you for your inquiry{' '}
      </p>
    </div>
  );
};

export default ThankYou;
