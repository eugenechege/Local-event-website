// Home.js
import React, { useEffect, useState } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div>
      {user ? (
        <>
          <h2>Welcome, {user.displayName}</h2>
          <img src={user.photoURL} alt="Profile" width={50} />
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <h2>Not logged in</h2>
      )}
    </div>
  );
}

export default Home;
