import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.confing";

const initializeFirebase=()=>{
    initializeApp(firebaseConfig);
}
export default initializeFirebase;