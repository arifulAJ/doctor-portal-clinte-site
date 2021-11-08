import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';

import { Button, Typography } from '@mui/material';
const appointmentBg={
    background:`url(${bg})`,
    backgroundColor:'#4F5567',
    backgroundBlendMode: 'darken, luminosity',
    marginTop:150
}
const AppointmentBaner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
         <img 
         style={{width:400, marginTop:"-120px"}}
         src={doctor} alt="" />
        </Grid>
        <Grid item xs={12} md={6} sx={{display:'flex',
          justifyContent:'flex-start' ,
          textAlign:'left' 
            }}>
        <Box>
        <Typography variant="h6" sx={{mb:4}} style={{color:'#00CED1'}}>
            Appointment
        </Typography>
        <Typography variant="h4" style={{color:'white'}}>
         Make an Appointment today
        </Typography>
        <Typography variant="h6" sx={{my:2}} style={{fontWeight:'300px' ,color:'white',fontSize:14}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, animi laboriosam mollitia quia, distinctio eveniet quis earum, unde reprehenderit non sequi laborum facilis cupiditate repellat autem perferendis fugit beatae quibusdam.
        </Typography>
        <Button variant="contained" style={{backgroundColor:'#00CED1'}}>Learn more</Button>
        </Box>

        </Grid>
      </Grid>
    </Box>
    );
};

export default AppointmentBaner;