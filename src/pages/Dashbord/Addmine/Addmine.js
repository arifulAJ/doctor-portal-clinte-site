import React, { useState } from 'react';
import { Alert, Button, TextField } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';


const Addmine = () => {
    const [email,setEmail]=useState('');
 const [success,setSuccess]=useState(false);
 const {token}=useAuth();
const handelOnBlur=e=>{
   
    setEmail(e.target.value)
}
    const handelAdmin=e=>{
        const user={email}
        fetch('https://arcane-coast-52786.herokuapp.com/users/admin',{
            method:'PUT',
            headers:{
                'authorization':`Bearer ${token}`,
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount){
                setEmail('')
                setSuccess(true)
            }
        })

        e.preventDefault()
    }
    return (
        <div>
            <h1>Make Admin</h1>
            <form onSubmit={handelAdmin}>
            <TextField id="standard-basic"
             label="Email"
             sx={{width:'50%'}}
             type='email' 
             onBlur={handelOnBlur}
             variant="standard" />
            <Button type='submit' variant='contained'>Make Admin</Button>

             {
                 success && <Alert severity="success">Admin add successfully </Alert>

             }
            </form>
        </div>
    );
};

export default Addmine;