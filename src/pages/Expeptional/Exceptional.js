import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import dental from '../../images/treatment.png'
import { CardMedia, Typography, Container, Button } from '@mui/material';

const Exceptional = () => {
    return (
      <Container sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{py:3}}>
        <Grid item xs={12} md={6} >
        <CardMedia
        component="img"
        height="294"
        image={dental}
        alt="Paella dish"
      />
        </Grid>
        <Grid  item xs={12} md={6} sx={{ textAlign:'left'}} >
         <Typography variant='h4' sx={{paddingTop:'10px'}} >
           Exceptional dental care on your terms
         </Typography>
         <Typography variant='h6' sx={{fontSize:13,fontWeight:300,py:5}} >
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero reiciendis in cupiditate soluta error animi consequatur eaque, consequuntur quaerat minima perferendis unde hic reprehenderit suscipit ipsa eveniet modi? Aspernatur, quaerat?
         </Typography>
         <Button variant="contained">Contained</Button>

        </Grid>
        
      </Grid>
    </Container>
    );
};

export default Exceptional;