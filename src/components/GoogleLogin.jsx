import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
  const { loading } = useAuth();
  const [authError, setAuthError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setAuthError(null);
      const result = await signInWithPopup(auth, googleProvider);
      
      // Optional: You can access the user info here
      const user = result.user;
      console.log('Logged in user:', user);
      
      // Redirect after successful login
      navigate('/dashboard'); // Change to your desired route
      
    } catch (error) {
      console.error('Google login error:', error);
      setAuthError(getFriendlyError(error));
    }
  };

  const getFriendlyError = (error) => {
    switch (error.code) {
      case 'auth/popup-closed-by-user':
        return 'You closed the login window';
      case 'auth/cancelled-popup-request':
        return 'Login cancelled';
      case 'auth/account-exists-with-different-credential':
        return 'Account exists with different login method';
      default:
        return 'Login failed. Please try again.';
    }
  };

  if (loading) return <div className="text-center">Loading...</div>;

  return (
    <div className="w-full">
      <button
        onClick={handleLogin}
        className="w-full flex items-center justify-center gap-3 px-6 py-3 border border-gray-300 rounded-lg shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        disabled={loading}
      >
        <FcGoogle className="text-xl" />
        {loading ? 'Signing in...' : 'Continue with Google'}
      </button>
      
      {authError && (
        <p className="mt-2 text-sm text-red-600 text-center">
          {authError}
        </p>
      )}
    </div>
  );
};

export default GoogleLogin;