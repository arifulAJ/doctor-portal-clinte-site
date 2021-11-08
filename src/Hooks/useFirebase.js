import initializeFirebase from './../pages/Login/Firebase/Firebase.init';

import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,GoogleAuthProvider ,signInWithEmailAndPassword,signInWithPopup,updateProfile,getIdToken    } from "firebase/auth";
import { useEffect, useState } from 'react';

initializeFirebase();
const googoleProvider = new GoogleAuthProvider();
const useFirebase=()=>{
    const [user,setUser]=useState([]);
    const [islanding,setIslanding]=useState(true)
    const [authError,setAuthError]=useState('')
    const [admin,setAdmin]=useState(false)
    const [token,setToken]=useState('')
    const auth = getAuth();
    const resisterUser=(email,password,name)=>{
      setIslanding(true)
        createUserWithEmailAndPassword(auth, email, password)
       
        .then((userCredential) => {
          setAuthError('')
           const newUser={email,displayName:name}
        setUser(newUser)
          //save to database
          saveUser(email,name,'POST')
          //update 
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
          // updateProfile(auth.currentUser, {
          //   displayName: name

          // }).then(() => {
          //   const newUser={email,displayName:name}
          //   setUser(newUser)
          // }).catch((error) => {
          //   // setAuthError(error.message)
          // });
          //   // Signed in 
          })
          .catch((error) => {
        
            setAuthError(error.message);
          })
       .finally(()=>setIslanding(false));
    }
  
   
    const signInWithGoogle=(history,location )=>{
    return  signInWithPopup(auth, googoleProvider)
  .then((result) => {
    const uti=location?.state?.from ||'/'
    history.push(uti)
    setUser(result.user)
    saveUser(user.email,user.displayName,'PUT')
    
  }).catch((error) => {
    
    const errorMessage = error.message;
    
  });
    }
const logOut=()=>{
  setIslanding(true);
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
      .finally(()=>setIslanding(false));
}
const login=(email,password,history,location)=>{
  setIslanding(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const destination=location?.state?.from ||'/'
      history.push(destination)
      // Signed in 
     setUser(result.user)
     setAuthError('')
      // ...
    })
    .catch((error) => {
     
      setAuthError(error.message);
    })
    .finally(()=>setIslanding(false));

}
// observer method 
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          
        setUser(user)
        getIdToken(user)
        .then(idToken=>{
          setToken(idToken)
        })
         
        } else {
         setUser({})
        }
        setIslanding(false)
      });
      return ()=> unsubscribe;
      
},[])
const saveUser=(email,displayName,method)=>{
const user={email,displayName};
fetch('https://arcane-coast-52786.herokuapp.com/users',{
  method:method,
  headers:{
  'content-type':'application/json'
  },
  body:JSON.stringify(user)
})
.then(res=>res.json())

}
useEffect(()=>{
  fetch(`https://arcane-coast-52786.herokuapp.com/users/${user.email}`)
  .then(res=>res.json())
  .then(data=>setAdmin(data.admin))
},[user.email])

return{
    user,
    admin,
    token,
    logOut,
    resisterUser,
    login,
    islanding,
    authError,
    signInWithGoogle
}
}
export default useFirebase;