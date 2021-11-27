import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

const modal_style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'max-content',
  bgcolor: '#1B242B',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  rowGap: '36px'
};

export default function ModalBase({children, handleModal, open}) {
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={modal_style}>
            {children}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}