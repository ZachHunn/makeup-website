import React, { FC } from 'react';
import { Button, Modal, Text } from '@nextui-org/react';

type ConfirmDialigProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleYes: () => void;
  handleNo: () => void;
};
export const ConfirmModal: FC<ConfirmDialigProps> = ({
  isOpen,
  setIsOpen,
  handleYes,
  handleNo,
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
            Travel Fee
          </Text>
        </Modal.Header>

        <Modal.Body>
          <Text>
            If you require travel to you on the island of O&apos;ahu, a $30
            travel fee will be added to your total. If you require travel
            somewhere, please contact me to discuss the details.
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={handleNo}>
            No Travel Required
          </Button>
          <Button auto flat color="default" onClick={handleYes}>
            Travel Required
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
