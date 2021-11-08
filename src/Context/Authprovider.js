import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';
export const AuthContext=createContext(null)
const Authprovider = ({children}) => {
    const allContest=useFirebase()
    return (
        <AuthContext.Provider value={allContest}>
             {children}
            
        </AuthContext.Provider>
    );
};

export default Authprovider;