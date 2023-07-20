import React, { useState, useEffect, useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import LogoSmall from '../assets/Logo1.svg';
import SignIn from './signIn/loginwithredirect';

const NavBar = ({ scrollToProblemHeader }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
  };

  useEffect(() => {
    const email = localStorage.getItem('email');
    setIsSignedIn(!!email); // Set isSignedIn based on whether email exists in localStorage
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#11161A', borderBottom: '2px solid #464646', boxShadow: 'none' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <img className='logo1' src={LogoSmall} edge='start' />
          <h6
            className='problemsTab'
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: 'Montserrat',
              fontSize: '16px',
              fontWeight: 700,
              cursor: 'pointer'
            }}
            onClick={scrollToProblemHeader}
          >
            PROBLEMS
          </h6>
          {isSignedIn ? (
            <SignIn onSignOut={handleSignOut} />
          ) : (
            <SignIn onSignIn={handleSignIn} />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
