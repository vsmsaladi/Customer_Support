import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { getAllInquiries } from '../api/inquiryService';
import Navbar from './Navbar'; // Adjust the path as necessary

const InquiryList = () => {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const response = await getAllInquiries();
        setInquiries(response.data);
      } catch (error) {
        console.error('Error fetching inquiries:', error);
      }
    };

    fetchInquiries();
  }, []);

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Inquiries List
      </Typography>
      <List>
        {inquiries.length > 0 ? (
          inquiries.map((inquiry) => (
            <ListItem 
              button 
              component={Link} 
              to={`/inquiries/${inquiry.id}`} 
              key={inquiry.id}
              style={{ marginBottom: '10px' }}
            >
              {/* Displaying ID and Subject */}
              <ListItemText primary={`ID: ${inquiry.id} - ${inquiry.subject}`} />
            </ListItem>
          ))
        ) : (
          <Typography variant="body1" align="center">No inquiries found</Typography>
        )}
      </List>
    </Container>
  );
};

export default InquiryList;
