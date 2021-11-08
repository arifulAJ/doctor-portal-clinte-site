import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';
const Booking = ({book,date,setBookingSucces}) => {
     const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    const {name,time,spaces}=book;

    return (
     
        <>
        <Grid item xs={12} md={6} lg={4}>
               <Paper elevation={3} sx={{py:5}} >
             <Typography variant='h5'  sx={{ color: 'info.main',fontWeight:600 }} gutterBottom component='div'> 
              {name}
             </Typography>
             <Typography variant='h6' gutterBottom component='div'> 
              {time}
             </Typography>
             <Typography variant="caption" display="block" gutterBottom>
       {spaces}
      </Typography>
      <Button onClick={handleBookingOpen} variant="contained">Booking Appointment</Button>



                </Paper>
    
         </Grid>
         <BookingModal 
         book={book}
         date={date}
         openBooking={openBooking}
         handleBookingClose={handleBookingClose}
         setBookingSucces={setBookingSucces}
         ></BookingModal>
        </>

   
    );
};

export default Booking;