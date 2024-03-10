import { NextPage } from 'next';

const AboutPage: NextPage = (): JSX.Element => {
  return (
    <div className="h-screen md:px-12 px-4 py-20 overflow-scroll">
      <h1 className="text-white text-5xl text-center pb-8">About Me!</h1>
      <div className="flex md:flex-row flex-col h-auto justify-center items-center">
        <img
          src="/about_jv.jpg"
          alt="J'Victoria"
          width="350"
          height="150"
          className="rounded-xl items-center"
        />
        <section className="md:px-12 mt-8 md:w-3/4 md:mx-auto sm:w-full text-white pt-8 text-lg ">
          <p className="pb-4">
            I am Jeanetta, a talented and experienced makeup artist who has been
            in the beauty industry since 2017. With a passion for making people
            look and feel their best, I have honed my skills through years of
            practice and dedication to the craft. I have had the opportunity to
            work with clients in various locations, including Guam, Arizona, and
            now Hawaii. This diverse experience has allowed me to develop a
            versatile style and adapt to different skin types and cultural
            backgrounds.
          </p>
          <p className="pb-4">
            I have worked on a wide range of clients, from bridal parties to
            models for photoshoots. I stay current on the latest trends and
            techniques, constantly seeking out new inspiration and education to
            improve my skills. One of the things that sets me apart is my
            ability to listen to my clients and understand their unique needs
            and preferences. I take the time to consult with each client,
            discussing their desired look and ensuring that they are completely
            satisfied with the final result. With a keen attention to detail and
            a natural talent for enhancing natural beauty, I am dedicated to
            providing the highest level of service and creating looks that make
            my clients feel confident and beautiful. I am also dedicated to
            using high-quality products to ensure that my clients&apos; makeup
            lasts all day and night.
          </p>
          <p className="pb-4">
            If you are in need of a makeup artist for a special occasion or
            photoshoot, I am the perfect choice. With my experience and skill, I
            will help you achieve the look you desire, leaving you feeling
            confident and beautiful.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
