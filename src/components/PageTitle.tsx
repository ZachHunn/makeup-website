import { FC } from 'react';

type PageTitleProps = {
  name: string;
};
export const PageTitle: FC<PageTitleProps> = ({ name }): JSX.Element => {
  return (
    <div className="mt-16">
      <h1 className="text-[60px] pl-8 text-white">{name}</h1>
    </div>
  );
};
