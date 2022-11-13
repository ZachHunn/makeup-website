import { Image } from '@nextui-org/react';
import React from 'react';
export const Logo: React.FC = (): JSX.Element => {
  return (
    <Image
      width={100}
      height={100}
      src="jvictoria_transparent.png"
      alt="Makeup By J'Victoria Logo"
    />
  );
};
