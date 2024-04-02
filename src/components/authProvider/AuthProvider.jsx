import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

const AuthContext=createContext(null);

const AuthProvider = ({children}) => {

    const [user ,setUser]=useState('value to ni')


  return (
    <div>
        <AuthContext.Provider value={user}>
        {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider;

AuthProvider.propTypes = {
    children:PropTypes.node

}