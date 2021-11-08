import React from 'react';


import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Container, Typography } from '@mui/material';
import { Box, fontSize, height } from '@mui/system';
// import bg from '../../../images/bg.png'
const bannerBg = {
    background:`url(${bg})`,
 height:500
  
}
const varticalCerter={
    display:'flex',
    alignItems:'center',
    height:500,
    
}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid style={{...varticalCerter, textAlign:'left'}} item xs={12} md={6}>
      <Box>
      <Typography variant='h3' >
           your new smile <br />
           start here

       </Typography>
       <Typography variant='h6' sx={{fontSize:14,color:'gray',fontWeight:300}}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum atque rem doloribus non quam sapiente possimus itaque iste nobis necessitatibus.
       </Typography>
       <Button style={{backgroundColor:'#5CE7Ed'}}>Get Appointment</Button>
      </Box>
        </Grid>
        <Grid item sx={12} md={6} style={varticalCerter}>
         <img style={{width:300}} src={chair} alt="" />
        </Grid>
      
      </Grid>
    </Container>
    );
};

export default Banner;