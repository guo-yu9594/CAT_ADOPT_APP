import React from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import "../App.css";
import MediaCard from './MediaCard'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'fit-content',
  height: 'fit-content',
  border: 0
};

const MyModal = ({ handleClose, open, state, actions }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <center>
          <MediaCard details={state.onModal} actions={actions} />
        </center>
      </Box>
    </Modal>
  );
};

export default MyModal;
