import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import logind from '../../images/login.png'
import GoogleIcon from '@mui/icons-material/Google'; 
import { Alert, Button, CircularProgress, Typography } from '@mui/material';
import { NavLink,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Login = () => {
  const [loginData,setLoginData]=useState({})
  const {user,login,islanding,signInWithGoogle,authError,setUser}=useAuth()
const history=useHistory()
const location=useLocation()
const handelOnBlur=e=>{
  const field=e.target.name;
  const value=e.target.value;
  
  const newLoginData={...loginData};
   newLoginData[field]=value;
   setLoginData(newLoginData)
}
const handelredirect=()=>{
  signInWithGoogle(history,location)
  // .then((result) => {
  //   const uti=location?.state?.from ||'/'
  //   history.push(uti)
  //   setUser(result.user)
    
  // }).catch((error) => {
    
  //   const errorMessage = error.message;
    
  // });
}
  const handelClickLogin=e=>{
    e.preventDefault();
    alert('submit your data');
    login(loginData.email,loginData.password,history,location)
  }
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid sx={{mt:18}} item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
         Login
         </Typography>
         <form onSubmit={handelClickLogin}>
         <TextField 
         sx={{width:'75%',m:1}}
         id="standard-basic"
          label="your email"
          name='email'
          onBlur={handelOnBlur}
           variant="standard" />
           <br />
         <TextField
          name='password'
          onBlur={handelOnBlur}
           sx={{width:'75%',m:1}}
         id="standard-basic"
          label="your password"
           variant="standard" />
           <br />

        <Button 
          sx={{width:'75%',m:1,my:5}}
          type="submit"
        variant="contained">Login</Button><br />
        {/* <Button  onClick={handelredirect}
          sx={{width:'75%',m:1,my:5}}
         
        variant="contained">googleSignIn</Button><br /> */}
         <NavLink to='/resister'
         style={{textDecoration:'none',fontWeight:'bolder'}}
         >
         NEW USER ? PLEASE REGISTER
         </NavLink>
         {
             islanding &&   <CircularProgress />
         }
         {user?.email && <Alert severity="success">you are successfully enrolled</Alert>
            }
         {
       authError && <Alert severity="error">This is an error alert — check it out!</Alert>
   
         }
         </form>
         <Button  onClick={handelredirect}
          sx={{width:'75%',m:1,my:5}}
         
        variant="contained"> <GoogleIcon/> Google SignIn</Button><br />
          </Grid>
          <Grid item xs={12} md={6}>
           <img style={{width:'100%'}} src={logind} alt=" login images" />
          </Grid>
          
        </Grid>
      </Box>
    );
};

export default Login;