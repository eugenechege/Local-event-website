// Login.js
import React from 'react';
import { auth } from './firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const provider = new GoogleAuthProvider();

function Login() {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User Info:", result.user);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
}

export default Login;
