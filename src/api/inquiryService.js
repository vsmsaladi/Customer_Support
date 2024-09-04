import axios from 'axios';

const API_URL = 'http://localhost:8080/inquiries';

// Function to get all inquiries
export const getAllInquiries = () => {
  return axios.get(API_URL);
};

// Function to create a new inquiry
export const createInquiry = (inquiry) => {
  return axios.post(API_URL, inquiry);
};

// Function to get a specific inquiry by ID
export const getInquiryById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};
