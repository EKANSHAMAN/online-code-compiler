import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    logout();            // Clear token & update context
    navigate('/');       // Redirect to home after logout
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">
          Online Compiler
        </Typography>
        <div>
          <Button color="inherit" component={Link} to="/">Home</Button>

          {isLoggedIn && (
            <Button color="inherit" component={Link} to="/compiler">
              Compiler
            </Button>
          )}

          {!isLoggedIn && (
            <>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/register">
                Register
              </Button>
            </>
          )}

          {isLoggedIn && (
            <Button color="inherit" onClick={handleLogoutClick}>
              Logout
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
