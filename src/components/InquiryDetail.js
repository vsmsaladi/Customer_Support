import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Paper } from '@mui/material';
import { getInquiryById } from '../api/inquiryService';
import Navbar from './Navbar'; // Adjust the path as necessary

const InquiryDetails = () => {
  const { id } = useParams();
  const [inquiry, setInquiry] = useState(null);

  useEffect(() => {
    const fetchInquiry = async () => {
      try {
        const response = await getInquiryById(id);
        setInquiry(response.data);
      } catch (error) {
        console.error('Error fetching inquiry details:', error);
      }
    };

    fetchInquiry();
  }, [id]);

  if (!inquiry) {
    return (
      <Container>
        <Typography variant="h6" align="center">
          No details available
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Paper style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Inquiry Details
        </Typography>
        <Typography variant="h6" style={{ fontWeight: 'bold' }}>
          Subject:
        </Typography>
        <Typography variant="body1" gutterBottom>
          {inquiry.subject}
        </Typography>
        <Typography variant="h6" style={{ fontWeight: 'bold' }}>
          Description:
        </Typography>
        <Typography variant="body1" gutterBottom>
          {inquiry.description}
        </Typography>
        <Typography variant="h6" style={{ fontWeight: 'bold' }}>
          Status:
        </Typography>
        <Typography variant="body1">
          {inquiry.status}
        </Typography>
      </Paper>
    </Container>
  );
};

export default InquiryDetails;
