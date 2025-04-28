const socialSignIn = async (provider) => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Authentication error:', error);
      throw error; 
    }
  };