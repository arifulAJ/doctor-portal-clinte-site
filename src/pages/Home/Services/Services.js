import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));
  import fluoride from '../../../images/fluoride.png'
  import cavity from '../../../images/cavity.png'
  import whitening from '../../../images/whitening.png'
import Service from './Service';

  const services=[
    {
      name:'Fluoride treatment',
      description:"Find Dental Hospital Nyc. Unlimited Access. 100% Secure. Always Facts. Privacy Friendly. The Best Resources. Results & Answers. Types: Best Results, Explore Now, New Sources.",
      img:fluoride
    },
    {
      name:'Cavity treatment',
      description:"Find Dental Hospital Nyc. Unlimited Access. 100% Secure. Always Facts. Privacy Friendly. The Best Resources. Results & Answers. Types: Best Results, Explore Now, New Sources.",
      img:cavity
    },
    {
      name:'Fluoride treatment',
      description:"Find Dental Hospital Nyc. Unlimited Access. 100% Secure. Always Facts. Privacy Friendly. The Best Resources. Results & Answers. Types: Best Results, Explore Now, New Sources.",
      img:whitening
    },
  ]
const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <Container fixed>
      <Typography sx={{ color: 'success.main',p:3,fontWeight: 500 }} variant="h5" component="div">
        OUR SERVICES
        </Typography>
      <Typography sx={{ fontWeight: 700,p:5 }} variant="h5" component="div">
        SERVICE WE PROVIDE
        </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {
        services.map(service=><Service
        key={service.name}
        service={service}
        ></Service>)
      }
      
      </Grid>
      </Container>
    </Box>
    );
};

export default Services;