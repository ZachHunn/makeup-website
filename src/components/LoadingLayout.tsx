import { Loading, Text } from '@nextui-org/react';
export const LoadingLayout: React.FC = (): JSX.Element => {
  return (
    <div className="pt-32 mb-auto">
      <Loading
        className="mx-auto w-full "
        size="xl"
        type="gradient"
        color="currentColor"
      >
        <Text h2> Loading </Text>
      </Loading>
    </div>
  );
};
