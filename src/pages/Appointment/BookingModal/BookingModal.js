import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';
import { jsonEval } from '@firebase/util';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const BookingModal = ({openBooking,handleBookingClose,book,date,setBookingSucces}) => {
   const {name,time,price}=book;
   const {user}=useAuth()
   const initialInfo={patientName:user.displayName,email:user.email,phone:user.phone}
   const [infoBooking,setInfoBooking]=useState(initialInfo);
   const handelOnBlur=e=>{
     const field=e.target.name;
     const value=e.target.value;
     const newInfo={...infoBooking};
     newInfo[field]=value;
     console.log(newInfo)
     setInfoBooking(newInfo)

   }
 const handelSubmitBooking=e=>{
   e.preventDefault();
   
 //collect data 
const appointment={
  ...infoBooking,
  time,
  price,
  serviceName:name,
  date:date.toLocaleDateString()


}
//send server data
fetch('https://arcane-coast-52786.herokuapp.com/appointments',{
  method:'POST',
  headers:{
'content-type':"application/json"
  },
  body:JSON.stringify(appointment)

})
.then(res=>res.json())
.then(data=>{
  if(data.insertedId){
    setBookingSucces(true)
    handleBookingClose()
  }
})

 
   handleBookingClose()
 }
    return (
        <Modal
        keepMounted
        open={openBooking}
        onClose={handleBookingClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h4" component="h2">
          {name}
          </Typography>
          <form onSubmit={handelSubmitBooking}>
         
        
         <TextField
            disabled
           sx={{width:'90%',m:1}}
          id="outlined-size-small"
          defaultValue={time}
          size="small"
        />
          <TextField
          
           sx={{width:'90%',m:1}}
          id="outlined-size-small"
          onBlur={handelOnBlur}
          name='patientName'
          defaultValue={user.displayName}
          size="small"
        />
          <TextField
          
           sx={{width:'90%',m:1}}
          id="outlined-size-small"
          name='email'
          onBlur={handelOnBlur}
          defaultValue={user.email}
          size="small"
        />
          <TextField
          
           sx={{width:'90%',m:1}}
          id="outlined-size-small"
          name='phone'
          onBlur={handelOnBlur}
          defaultValue='phone number'
          size="small"
        />
          <TextField
        disabled
           sx={{width:'90%',m:1}}
          id="outlined-size-small"
          defaultValue={date.toDateString()}
          size="small"
        />
          
        
          <Button type='submit' variant="contained">submit</Button>
         </form>

        </Box>
      </Modal>
    );
};

export default BookingModal;