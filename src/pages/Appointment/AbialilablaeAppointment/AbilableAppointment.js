import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';


const bookings=[
    {
        id:1,
        name:'Teeth orthotics',
        time:'8:00 AM - 9:00 AM',
        spaces:'10 Space Available'
    },
    {
        id:2,
        name:'cosmetic Dentistry',
        time:'10:00 AM - 11:00 AM',
        spaces:'10 Space Available'
    },
    {
        id:3,
        name:'Teeth Cleaning',
        time:'5:00 PM - 6:00 PM',
        spaces:'10 Space Available'
    },
    {
        id:4,
        name:'Cavity protection',
        time:'7:00 PM - 8:00 PM',
        spaces:'10 Space Available'
    },
    {
        id:5,
        name:'Teeth Rutland',
        time:'9:00 PM - 10:00 PM',
        spaces:'10 Space Available'
    },
    {
        id:6,
        name:' orthotics',
        time:'11:00 AM - 12:00 AM',
        spaces:'10 Space Available'
    },
]
const AbilableAppointment = ({date}) => {
    const [bookingSucces,setBookingSucces]=useState(false)
  
    return (
        <Container>
            <Typography variant='h4' sx={{py:5 ,mb:3}}  >Your appointment date: {date.toDateString()}</Typography>
            {bookingSucces && <Alert severity="success">booking  successfully </Alert>
            }
            <Grid container spacing={2}>
           {
               bookings.map(book=><Booking 
               
               key={book.id}
               book={book}
               date={date}
               setBookingSucces={setBookingSucces}
               ></Booking>)
           }
        </Grid>
        </Container>
    
    );
};

export default AbilableAppointment;