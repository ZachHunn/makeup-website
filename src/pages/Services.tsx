import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { ConfirmModal } from '../components/ConfirmModal';
import { LoadingLayout } from '../components/LoadingLayout';
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
    return <LoadingLayout />;
  }

  return (
    <div className="h-full py-20 ">
      <h1 className="text-white text-5xl text-center pb-8">Services</h1>
      <div className="flex flex-row flex-wrap gap-6 justify-center">
        {serviceItemsQueryData
          ?.sort((a, b) => a.price - b.price)
          ?.map((item) => (
            <div
              className="card w-96 h-80 bg-white shadow-xl rounded-xl"
              key={item.id}
            >
              <figure>
                <img
                  src="/service_page_card.png"
                  alt="Shoes"
                  className="h-52 w-full rounded-t-lg"
                />
              </figure>
              <div className="card-body px-3 pt-3">
                <h2 className="card-title font-bold text-lg text-accent">
                  {item.serviceName}
                </h2>
                <div className="flex justify-between pt-3">
                  <p className=" pt-1 pl-2 text-xl"> ${item.price}</p>
                  <button
                    onClick={() => {
                      setModalIsOpen(true);
                    }}
                    className="border border-transparent p-2 bg-base text-white rounded-xl hover:bg-accent hover:animate-pulse"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <ConfirmModal
        isOpen={modalIsOpen}
        setIsOpen={setModalIsOpen}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Services;
