import { NextPage } from 'next';
import { NavBar } from '../components/Navbar';
import { Text, Loading } from '@nextui-org/react';
import { useGetServiceItems } from '../../src/pages/hooks/api/services';
import { ServiceItem } from '@prisma/client';

const Services: NextPage = (): JSX.Element => {
  const { isLoading, data: serviceItemsQueryData } = useGetServiceItems();

  if (isLoading) {
    <Loading
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        position: 'relative',
      }}
      size="xl"
      type="gradient"
    >
      Loading
    </Loading>;
  }
  return (
    <>
      <NavBar />
      <Text h1 css={{ paddingLeft: '25px' }} size={60}>
        Services
      </Text>
      {serviceItemsQueryData?.map((item) => {
        return (
          <h3 key={item.id}>
            {[item.serviceName, item.description, item.price]}
          </h3>
        );
      })}
    </>
  );
};

export default Services;
