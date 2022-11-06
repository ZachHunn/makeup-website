import { NextPage } from 'next';
import { NavBar } from '../components/Navbar';

const AboutPage: NextPage = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <h1>About</h1>
    </>
  );
};

export default AboutPage;
