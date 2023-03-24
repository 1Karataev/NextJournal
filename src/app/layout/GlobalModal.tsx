import React, {ReactNode} from 'react';
import {Box, Modal} from '@mui/material';
import {NextPage} from 'next';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '10px',
  p: 4,
};

interface GlobalModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Function;
  component: ReactNode;
}

const GlobalModal: NextPage<GlobalModalProps> = ({isModalOpen, setIsModalOpen, component}) => {
  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {component}
        </Box>
      </Modal>
    </div>
  );
};

export default GlobalModal;
