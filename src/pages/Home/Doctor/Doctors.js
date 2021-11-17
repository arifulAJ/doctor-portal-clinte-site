
import { Grid } from '@mui/material';
import React from 'react';


const Doctors = ({doc}) => {
    const {name,image}=doc
    return (
        
 
<Grid item xs={12} sm={6} md={4}>
    <img style={{width:'200px',height:'200px'}} src={`data:image/jpeg;base64,${image}`} alt="" />
    <h1>{name}</h1>
</Grid>

  
 

    );
};

export default Doctors;