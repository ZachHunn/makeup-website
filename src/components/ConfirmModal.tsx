import React, { FC } from 'react';
import { Button, Modal, Text } from '@nextui-org/react';

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
  return (
    <div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Travel Appointments
          </Text>
        </Modal.Header>

        <Modal.Body>
          <Text className="text-center font-bold">
            *Travel must be booked 3-5 days in advance.*
          </Text>
          <Text>
            If you require travel to you on O&apos;ahu, there will be an
            additional $30 charge. For travel to other islands or locations,
            please get in touch with me to go over the specifics.
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="default" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
