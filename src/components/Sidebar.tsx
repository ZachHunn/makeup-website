import React, {FC, useState } from 'react';
import {Modal, Text} from '@nextui-org/react'

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
}
export const Sidebar: FC<SidebarProps> = ({isOpen, setIsOpen, handleClose}) => {

  return (
    <div className='h-full'>
      <Modal 
      closeButton
      fullScreen
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className='w-1/3'
      >
         <Modal.Header>
          <Text id="modal-title" size={18}>
            Menu
          </Text>
        </Modal.Header>
      </Modal>
    </div>
  );
}
