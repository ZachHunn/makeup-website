'use client';
import {
  Button,
  Card,
  CardBody,
  Divider,
  CardFooter,
  CardHeader,
} from '@nextui-org/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { ConfirmModal } from '../components/ConfirmModal';
import { LoadingLayout } from '../components/LoadingLayout';
import { PageTitle } from '../components/PageTitle';
import { useGetServiceItems } from '../hooks/api/services';

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
    <LoadingLayout />;
  }

  return (
    <>
      <PageTitle name={'Services'} />
      <div className="md:grid md:grid-cols-3 md:px-20 md:gap-3 grid-cols-1">
        {serviceItemsQueryData?.map((item) => (
          <div key={item.id} className="p-6">
            <Card className="border-none h-full sm:min-h-[320px]">
              <CardHeader className="md:absolute md:z-10 md:top-1 absolute z-10 ">
                <p className="text-xl" color="white">
                  {item.serviceName}
                </p>
              </CardHeader>
              <CardBody className="p-0">
                <Card.Image
                  className="w-full h-full bg-gray-500"
                  objectFit="cover"
                  src="makeup_brushes.png"
                  alt="Makeup Brushes"
                />
              </CardBody>
              <Divider />
              <CardFooter>
                <div className="flex justify-between flex-wrap">
                  <p className="text-lg pl-5">{`$${item.price}.00`}</p>
                  <Button
                    onClick={() => {
                      setModalIsOpen(true);
                    }}
                    color="default"
                    className="pr-5"
                    size="xs"
                    flat
                  >
                    <p className="text-grey-500">Book Now</p>
                  </Button>
                </div>
              </CardFooter>
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
};

export default Services;
