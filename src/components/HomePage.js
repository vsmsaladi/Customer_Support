import React from 'react';
import { Container, Typography, Grid, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Adjust the path as necessary

const HomePage = () => {
  return (
    <Container style={{ marginTop: '20px' }}>
      {/* Header Section */}
      <Typography variant="h3" align="center" gutterBottom style={{ fontWeight: 'bold' }}>
        Welcome to Our Customer Support Portal
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        We are here to assist you with all your needs. Explore our services and get the help you deserve.
      </Typography>
      
      {/* Image and Text Section */}
      <Grid container spacing={4} style={{ marginTop: '20px' }}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/path/to/your/image1.jpg" // Update with the correct path
            alt="Customer Support"
            style={{ width: '100%', borderRadius: '10px' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
            Why Choose Us?
          </Typography>
          <Typography variant="body1" gutterBottom>
            We offer 24/7 customer support with a dedicated team ready to assist you. Our services are reliable, fast, and customer-focused.
          </Typography>
          <Typography variant="body1">
            Get your inquiries resolved quickly and efficiently by submitting a request through our portal.
          </Typography>
          <Box display="flex" justifyContent="center" mt={2}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ marginRight: '10px' }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
            >
              Contact Us
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Second Image and Text Section */}
      <Grid container spacing={4} style={{ marginTop: '40px' }}>
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
            Our Mission
          </Typography>
          <Typography variant="body1" gutterBottom>
            We strive to provide the best customer service in the industry. Our goal is to resolve your issues promptly and efficiently.
          </Typography>
          <Typography variant="body1">
            Your satisfaction is our top priority, and we are constantly improving to meet your expectations.
          </Typography>
          <Box display="flex" justifyContent="center" mt={2}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              style={{ marginRight: '10px' }}
              component={Link}
              to="/create-inquiry"
            >
              Learn More
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              component={Link}
              to="/create-inquiry"
            >
              Create New Inquiry
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <Box
            component="img"
            src="/path/to/your/image2.jpg" // Update with the correct path
            alt="Our Mission"
            style={{ width: '100%', borderRadius: '10px' }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
