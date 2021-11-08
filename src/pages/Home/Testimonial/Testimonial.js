import { Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const Testimonial = () => {
    const {user}=useAuth()
    return (
        <>
        <Typography>
          Email : {user.email}
         
        </Typography>
        <Typography>
         
          name : {user.displayName}
        </Typography>
        </>
    );
};

export default Testimonial;