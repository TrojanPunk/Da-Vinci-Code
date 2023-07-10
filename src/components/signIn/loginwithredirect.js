import React, { useEffect, useState } from 'react';
import { auth, provider } from './credentials';
import { signInWithPopup, signOut } from 'firebase/auth';

const SignIn = ({ onSignIn, onSignOut }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        localStorage.setItem('email', data.user.email);
        setIsSignedIn(true);
        onSignIn();
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem('email');
        setIsSignedIn(false);
        onSignOut();
      });
  };

  useEffect(() => {
    const email = localStorage.getItem('email');
    setIsSignedIn(!!email); // Set isSignedIn based on whether email exists in localStorage
  }, []);

  return (
    <div>
      {isSignedIn ? (
        <button onClick={handleSignOut} type="button" className="btn btn-outline-primary">
          Sign Out
        </button>
      ) : (
        <button onClick={handleSignIn} type="button" className="btn btn-outline-primary">
          Sign In
        </button>
      )}
    </div>
  );
};

export default SignIn;