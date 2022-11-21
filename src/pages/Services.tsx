import { Button, Card, Grid, Loading, Row, Text } from '@nextui-org/react';
import { ServiceItem } from '@prisma/client';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useGetServiceItems } from '../../src/pages/hooks/api/services';

const Services: NextPage = (): JSX.Element => {
  const { isLoading, data: serviceItemsQueryData } = useGetServiceItems();
  const router = useRouter();

  if (isLoading) {
    <Loading
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        position: 'float',
      }}
      size="xl"
      type="gradient"
    >
      Loading
    </Loading>;
  }
  return (
    <>
      <Text h1 css={{ paddingLeft: '25px' }} size={60}>
        Services
      </Text>
      <Grid.Container gap={2} justify="center">
        {serviceItemsQueryData?.map((item: ServiceItem) => (
          <Grid key={item.id}>
            <Card
              css={{
                width: '100%',
                minWidth: '320px',
                maxWidth: '400px',
                maxHeight: '400px',
                minHeight: '320px',
                border: 'none',
              }}
            >
              <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                <Text className="text-xl" color="white">
                  {item.serviceName}
                </Text>
              </Card.Header>
              <Card.Body className="p-0">
                <Card.Image
                  className="w-100% h-100%"
                  objectFit="cover"
                  src="makeup_brushes.png"
                  alt="#"
                />
              </Card.Body>
              <Card.Divider />
              <Card.Footer css={{ justifyItems: 'flex-start' }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text className="text-lg pl-5">{`$${item.price}.00`}</Text>
                  <Button
                    onClick={() => router.push('/Booking')}
                    color="default"
                    className="pr-5"
                    size="xs"
                  >
                    <Text className="text-gray-500">Book Now</Text>
                  </Button>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
};

export default Services;
