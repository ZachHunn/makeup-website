import { Button, Card, Row, Text } from '@nextui-org/react';
import { ServiceItem } from '@prisma/client';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { ConfirmModal } from '../components/ConfirmModal';
import { LoadingLayout } from '../components/LoadingLayout';
import { PageTitle } from '../components/PageTitle';
import { useGetServiceItems } from '../hooks/api/services';

export default function Home() {
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
    <LoadingLayout />;
  }

  return (
    <>
      <PageTitle name={'Services'} fontSize={60} />
      <div className="md:grid md:grid-cols-3 md:px-20 md:gap-3 grid-cols-1">
        {serviceItemsQueryData?.map((item: ServiceItem) => (
          <div key={item.id} className="p-6">
            <Card className="border-none h-full sm:min-h-[320px]">
              <Card.Header className="md:absolute md:z-10 md:top-1 absolute z-10 ">
                <Text className="text-xl" color="white">
                  {item.serviceName}
                </Text>
              </Card.Header>
              <Card.Body className="p-0">
                <Card.Image
                  className="w-full h-full bg-gray-500"
                  objectFit="cover"
                  src="makeup_brushes.png"
                  alt="Makeup Brushes"
                />
              </Card.Body>
              <Card.Divider />
              <Card.Footer>
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
          </div>
        ))}
      </div>
      <ConfirmModal
        isOpen={modalIsOpen}
        setIsOpen={setModalIsOpen}
        handleClose={handleClose}
      />
    </>
  );
}
