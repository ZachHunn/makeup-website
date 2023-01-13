import { Button, Card, Grid, Loading, Row, Text } from '@nextui-org/react';
import { ServiceItem } from '@prisma/client';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { ConfirmModal } from '../components/ConfirmModal';
import { useGetServiceItems } from './hooks/api/services';

const Services: NextPage = (): JSX.Element => {
  const { isLoading, data: serviceItemsQueryData } = useGetServiceItems();
  const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);
  const router = useRouter();

  const handleClose = () => {
    setModalIsOpen(false);
    router.push(
      'https://squareup.com/appointments/book/10mjamah16g32e/LHG8WR1A3JCED/start',
    );
  };

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
      <Text h1 className="pl-12" size={60}>
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
                  className="w-full h-full"
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
                    onClick={() => {
                      setModalIsOpen(true);
                    }}
                    color="default"
                    className="pr-5"
                    size="xs"
                    flat
                  >
                    <Text className="text-grey-500">Book Now</Text>
                  </Button>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
      <ConfirmModal
        isOpen={modalIsOpen}
        setIsOpen={setModalIsOpen}
        handleClose={handleClose}
      />
    </>
  );
};

export default Services;
