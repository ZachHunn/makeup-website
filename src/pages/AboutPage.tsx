import { NextPage } from 'next';
import { NavBar } from '../components/Navbar';
import { Text, Image } from '@nextui-org/react';

const AboutPage: NextPage = (): JSX.Element => {
  return (
    <>
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

      <Text className="px-12 pb-10 mt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        consectetur facilis nobis dolorem veniam molestiae nisi nostrum!
        Assumenda, doloremque? Animi possimus vero placeat aliquid perferendis
        omnis culpa atque est voluptate. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Sed exercitationem dolorum sequi totam architecto
        consequatur repellendus, ipsam veniam eaque in non provident! Asperiores
        officia ipsam at eaque impedit natus corporis. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Labore voluptates ducimus, earum,
        unde exercitationem explicabo rem, sunt repudiandae dolor alias quidem
        non consequuntur aspernatur neque ea facere architecto sint repellendus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        atque similique quasi numquam nemo earum quas debitis natus hic aliquid,
        qui mollitia. Maiores enim nesciunt totam eligendi perferendis incidunt!
        Esse! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
        minima libero commodi animi culpa quasi praesentium quisquam deleniti,
        accusantium neque iusto aspernatur accusamus fuga sed, aliquid, qui ex
        unde autem. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Hic deleniti esse reprehenderit, molestias fugiat quis vel optio aperiam
        qui harum nobis magni non quaerat iure. Aperiam mollitia reprehenderit
        perferendis aspernatur!
      </Text>
    </>
  );
};

export default AboutPage;
