import Image from 'next/image';
import Link from 'next/link';
const Logo: React.FC = (): JSX.Element => {
  return (
    <Link href="/" className="p-0 mx-8">
      <Image
        width={415}
        height={405}
        src="/logo.png"
        alt="Makeup By J'Victoria Logo"
        className="w-full h-full"
      />
    </Link>
  );
};

export default Logo;
