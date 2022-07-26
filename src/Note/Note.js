import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Header from "../Header/Header/Header"
import Typography from '@mui/material/Typography';
import "./note.css"

import {Link} from "react-router-dom"

import Topbar from '../Topbar/Topbar';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  border: '0.5px solid ',
 border:'white',
 borderRadius:'20px',
  boxShadow: 24,
  p: 4,
};

export default function KeepMountedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      
   <Box className='button'>
   <hp>Accepted</hp>
   
 <hq onClick={handleOpen}>Rejected</hq>
 
 </Box>
      
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
         <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2" textAlign="center">
          Reation Of Rejection
          </Typography>
          <form>
        
        <textarea type="text" placeholder='Write a brief description about creator rejection... ' className='input'></textarea>
        </form>
       
          <Typography id="keep-mounted-modal-description" sx={{ mt: 50, alignContent:"center",justifyContent:"center"}}>
      <Link to="/rejected" element={<Header/>}>
        <h3 className='h3' style={{textDecoration:'none'}}>Submit</h3>
        </Link>
          </Typography>
         
        </Box>
      </Modal>
    </div>
  );
}