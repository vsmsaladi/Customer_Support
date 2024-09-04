import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Paper, Snackbar, Alert } from '@mui/material';
import Navbar from './Navbar'; // Correct import

const CreateInquiry = () => {
    const [customerName, setCustomerName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const inquiry = {
            customerName,
            email,
            subject,
            description,
            status: 'OPEN',
        };

        try {
            await axios.post('http://localhost:8080/inquiries', inquiry, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setOpenSnackbar(true);
        } catch (error) {
            console.error('Error submitting inquiry:', error);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
        window.location.reload(); // Refresh the page
    };

    return (
        <Container component={Paper} maxWidth="sm" style={{ padding: '2rem', marginTop: '2rem' }}>
            <Typography variant="h4" gutterBottom>
                Create New Inquiry
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Customer Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    fullWidth
                    margin="normal"
                    multiline
                    maxRows={4}
                />
                <TextField
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    fullWidth
                    margin="normal"
                    multiline
                    maxRows={6}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Submit Inquiry
                </Button>
            </form>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
            >
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    Inquiry created successfully!
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default CreateInquiry;
