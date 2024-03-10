import React, { FC, useRef } from 'react';

type ConfirmDialigProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
};
export const ConfirmModal: FC<ConfirmDialigProps> = ({
  isOpen,
  setIsOpen,
  handleClose,
}): JSX.Element => {
  const dialogRef = useRef(null);
  return (
    <dialog
      ref={dialogRef}
      open={isOpen}
      id="confirmation-modal"
      className={`md:w-5/6 ${
        isOpen
          ? 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
          : 'hidden'
      } w-full bg-white rounded-xl shadow text-accent`}
    >
      <div className="p-8">
        <h3 className="font-bold text-2xl text-center text-accent">
          Travel Appointments
        </h3>
        <p className="md:w-3/4 mx-auto py-6 text-xl">
          If you need travel arrangements to your location on the island of
          O&apos;ahu, there will be an additional charge of $30. For travel to
          other islands or locations, please feel free to contact me to discuss
          the details further.
        </p>

        <p className="mx-auto w-full text-center pb-5">
          To continue booking, click "Ok", and you will be directed to Square to
          book your appointment.
        </p>

        <div className="modal-action flex justify-end flex-row">
          <form method="dialog">
            <button
              className="text-xl border border-base rounded md:w-40 w-20 p-2 bg-accent text-white mr-2.5"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Close
            </button>
            <button
              className="text-xl border-base border rounded md:w-40 w-20 p-2 bg-accent text-white"
              onClick={handleClose}
            >
              OK
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};
