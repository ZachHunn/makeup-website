import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import { NavBar } from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Makeup By J&apos;Victoria</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <NavBar />
      </header>

      <main>
        <h1>Gallery</h1>
      </main>
    </div>
  );
}
