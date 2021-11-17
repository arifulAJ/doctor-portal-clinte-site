import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { CircularProgress } from '@mui/material';

const ChackOutform = (props) => {
    const {price,patientName,_id}=props.patient
    //  console.log(props.patient)
    const stripe=useStripe()
    const element=useElements()
    const {user}=useAuth()
    const [success,setSuccess]=useState('')
    const [error,setError]=useState('')
    const [prossign,setProssign]=useState(false)
    const [clintSecret,setClintSecret]=useState('')
    useEffect(()=>{
      fetch(' https://arcane-coast-52786.herokuapp.com/create-payment-intent',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({price})
      })
      .then(res=>res.json())
      .then(data=>{
        setClintSecret(data.clientSecret)
      })
    },[price])
    const handleSubmit=async (e)=>{
        e.preventDefault()
        if(!stripe||!element){
            return;
        }
        const card=element.getElement(CardElement);
        if(card === null){
            return;
        }
        setProssign(true)
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
          if(error){
              setError(error.message)
              setSuccess('')
          }
          else{
            setError('')
       
              console.log(paymentMethod)
          }
         
          const {paymentIntent, error :intentError} = await stripe.confirmCardPayment(
            clintSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patientName,
                  email:user.email
                },
              },
            },
          );
          if(intentError){
            setError(intentError.message);
            setSuccess('');
          }
          else{
            setError('')
            setSuccess('you payment pareses success')
            console.log(paymentIntent)
            setProssign(false)
            //save to database

           const payment={
             amount:paymentIntent.amount,
             created:paymentIntent.created,
             last4:paymentMethod.card.last4,
             transaction:paymentIntent.client_secret.slice('_secret')[0]

           }
          const url=` https://arcane-coast-52786.herokuapp.com/appointments/${_id}`
          fetch(url,{
            method:'PUT',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(payment)
          })
          .then(res=>res.json())
          .then(data=>console.log(data))
          }
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
   { prossign ? <CircularProgress></CircularProgress> :
   <button type="submit" disabled={!stripe||success}>
        Pay $ {price}
      </button>}
    </form>
    {
      error && <p style={{color:'red'}}>you have a mistake : {error}</p>
    }
    {
      success && <p style={{color:'green'}}> {success}</p>
    }
        </div>
    );
 };

export default ChackOutform;