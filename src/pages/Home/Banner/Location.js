import React from 'react';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import Grid from '@mui/material/Grid';
import ScheduleIcon from '@mui/icons-material/Schedule';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Box, margin } from '@mui/system';
const  setStile={
  display:'flex',
  backgroundColor:'#1CC7C1',
  color:'white'

}

const Location = () => {
    return (
      <Box style={{display:'flex',margin:'-10px'}}  sx={{ color: 'text.primary' }}>
       
      <Container>
      <Grid style={setStile} item xs={8}>
      <AddLocationAltIcon />
       <Box>
       <Typography>Filled</Typography>
        <Typography style={{fontWeight:'300px' ,color:'white',fontSize:12}} variant='h6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, nemo!</Typography>
       </Box>
      </Grid>
      </Container>
      <Container>
      <Grid style={setStile} item xs={8}>
      <AddIcCallIcon />
       <Box>
       <Typography>Outlined</Typography>
        <Typography style={{fontWeight:'300px' ,color:'white',fontSize:12}} variant='h6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, nemo!</Typography>
       </Box>
      </Grid>
      </Container>
     
      <Container>
      <Grid style={setStile} item xs={8}>
      <ScheduleIcon />
        <Box>
        <Typography>Rounded</Typography>
        <Typography style={{fontWeight:'300px' ,color:'white',fontSize:12}} variant='h6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, nemo!</Typography>
        </Box>
      </Grid>
      </Container>
     
     
    </Box>
    );
};

export default Location;