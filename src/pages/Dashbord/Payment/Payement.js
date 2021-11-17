import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import ChackOutform from './ChackOutform';

const stripePromise=loadStripe('pk_test_51JwGrdHqqc8fJ7jxdlB0j9Nsc4pWPhb6OytRJYxB3u0UfV4boyBqdLxWuMKNTFgMgJjy4afcKcI4ZbCmpRSr55jj00RI4dzZCj')
const Payement = () => {
    const {appointmentId}=useParams()
    const [patient,setPatient]=useState([])
   const  url=` https://arcane-coast-52786.herokuapp.com/appointments/${appointmentId}`
//    console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(data=>setPatient(data))

    return (
        <div>
            <h1>Pleace payment: {patient.patientName} for {patient.serviceName}</h1>
            <h3>payment:${patient.price}</h3>





            {patient?.price && <Elements stripe={stripePromise}>
            <ChackOutform
            patient={patient}
            />
            </Elements>}
        </div>
    );
};

export default Payement;