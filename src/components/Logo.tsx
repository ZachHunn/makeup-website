import Image from 'next/image';
import Link from 'next/link';
const Logo: React.FC = (): JSX.Element => {
  return (
    <Link href="/">
      <Image
        className="ml-4"
        width={175}
        height={150}
        src="/logo.png"
        alt="Makeup By J'Victoria Logo"
      />
    </Link>
  );
};

export default Logo;
