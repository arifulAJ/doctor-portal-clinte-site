import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Doctors from '../Doctor/Doctors';

const Doctor = () => {
    const [doctor,setDoctor]=useState([])
    useEffect(()=>{
        fetch(' https://arcane-coast-52786.herokuapp.com/doctors')
        .then(res=>res.json())
        .then(data=>setDoctor(data))
    },[])
    return (
        <div>
            <h1>doctor{doctor.length}</h1>
            <Container>
            <Grid container spacing={2} >
            {
                doctor.map(doc=><Doctors doc={doc}></Doctors>)
            } 
            </Grid>
            </Container>
        </div>
    );
};

export default Doctor;