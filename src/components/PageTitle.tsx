import { Text } from '@nextui-org/react';
import { FC } from 'react';

type PageTitleProps = {
  name: string;
  fontSize: number;
};
export const PageTitle: FC<PageTitleProps> = ({
  name,
  fontSize,
}): JSX.Element => {
  return (
    <Text
      h1
      css={{ fontFamily: 'Barlow Condensed, sans-serif' }}
      className="md:pl-12 md:text-left text-center"
      size={fontSize}
    >
      {name}
    </Text>
  );
};
