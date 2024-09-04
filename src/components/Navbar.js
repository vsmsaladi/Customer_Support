import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Customer Support Portal
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/create-inquiry">
          Create New Inquiry
        </Button>
        <Button color="inherit" component={Link} to="/inquiries">
          Inquiries
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
