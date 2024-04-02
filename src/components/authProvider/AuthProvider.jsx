import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext } from "react";
import auth from "../../fire_base/firebase";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

 const signUpUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
 }

 const signInUser=(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
 }


 const authInfo={
    signUpUser,
    signInUser
 }



  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
