import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [image,setImage]=useState(null)
    console.log(name,email,image)
    const handelSubmit=e=>{
        e.preventDefault();
        if(!image){
            return ;
        }
        const formData=new FormData();
        formData.append('name',name)
        formData.append('email',email)
        formData.append('image',image)
        fetch(' https://arcane-coast-52786.herokuapp.com/doctors', {
  method: 'POST',
  body: formData
})
.then(res => res.json())
.then(data => {
 if(data.insertedId){
console.log('doctor insert successfully')
 }
})
.catch(error => {
  console.error('Error:', error);
});
    }
    return (
        <div>
            <h1>add doctor</h1>
            <form onSubmit={handelSubmit}>
            <TextField
           required
           sx={{width:'50%'}}
             label="name"
             onChange={e=>setName(e.target.value)}
              variant="standard" />
              <br/>
            <TextField
           required
           sx={{width:'50%'}}
             label="email"
             type="email"
             onChange={e=>setEmail(e.target.value)}
              variant="standard" />
              <br/>
              <Input
               accept="image/*" 
            onChange={e=>setImage(e.target.files[0])}
                 type="file" />
              <br/>
                <Button variant="contained" type="submit">
                  Add doctor
                </Button>
            </form>
        </div>
    );
};

export default AddDoctor;