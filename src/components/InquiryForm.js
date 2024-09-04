import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createInquiry } from '../api/inquiryService';
import Navbar from './Navbar'; // Adjust the path as necessary

const InquiryForm = () => {
  const [inquiry, setInquiry] = useState({ subject: '', description: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInquiry({ ...inquiry, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createInquiry({ ...inquiry, status: 'OPEN' });
      navigate('/inquiries');
    } catch (error) {
      console.error('Error submitting inquiry:', error);
    }
  };

  return (
    <div>
      <h2>Submit a New Inquiry</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="subject" value={inquiry.subject} onChange={handleChange} />
        </label>
        <label>
          Description:
          <textarea name="description" value={inquiry.description} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InquiryForm;
