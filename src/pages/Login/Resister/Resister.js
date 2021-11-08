import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import resister from '../../../images/login.png'

import { Alert, Button, CircularProgress, Typography } from '@mui/material';
import { NavLink,useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Resister = () => {
    const {user,resisterUser,islanding,authError}=useAuth()
    const [loginData,setLoginData]=useState({})
    const history=useHistory()
const handelOnBlur=e=>{
  const field=e.target.name;
  
  const value=e.target.value;
 
  const newLoginData={...loginData};
  console.log(newLoginData)
   newLoginData[field]=value;
   setLoginData(newLoginData)
}
  const handelClickLogin=e=>{
    e.preventDefault();
    alert('submit your data');
    resisterUser(loginData.email,loginData.password,loginData.name)
    history.push('/')
  }
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid sx={{mt:18}} item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
         Resister
         </Typography>
        {! islanding && <form onSubmit={handelClickLogin}>
         <TextField 
         sx={{width:'75%',m:1}}
         id="standard-basic"
          label="your name"
          name='name'
          onBlur={handelOnBlur}
           variant="standard" />
           <br />
         <TextField 
         sx={{width:'75%',m:1}}
         id="standard-basic"
          label="your email"
          required
          name='email'
          type='email'
          onBlur={handelOnBlur}
           variant="standard" />
           <br />
         <TextField
          name='password'
          type='password'
          onBlur={handelOnBlur}
           sx={{width:'75%',m:1}}
         id="standard-basic"
          label="your password"
           variant="standard" />
           <br />
         <TextField
          name='password'
          onBlur={handelOnBlur}
           sx={{width:'75%',m:1}}
         id="standard-basic"
          label="conform password"
           variant="standard" />
           <br />

        <Button 
          sx={{width:'75%',m:1}}
          type="submit"
        variant="contained">Resister</Button><br />
         <NavLink to='/login'
         style={{textDecoration:'none',fontWeight:'bolder'}}
         >
         Already have an account, please Login
         </NavLink>
         {/* <Typography>
           name:{user.displayName}
         </Typography> */}
        
         {
             islanding &&   <CircularProgress />
         }
         {user?.email && <Alert severity="success">you are successfully enrolled</Alert>
            }
         {
       authError && <Alert severity="error">This is an error alert — check it out!</Alert>
   
         }
          </form>}
          </Grid>
          <Grid item xs={12} md={6}>
           <img style={{width:'100%'}} src={resister} alt=" login images" />
          </Grid>
          
        </Grid>
      </Box>
    );
};

export default Resister;