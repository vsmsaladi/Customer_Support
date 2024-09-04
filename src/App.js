import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CreateInquiry from './components/CreateInquiry';
import InquiryList from './components/InquiryList';
import InquiryDetail from './components/InquiryDetail';
import Navbar from './components/Navbar'; // Ensure the path is correct

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-inquiry" element={<CreateInquiry />} />
        <Route path="/inquiries" element={<InquiryList />} />
        <Route path="/inquiries/:id" element={<InquiryDetail />} />
      </Routes>
    </div>
  );
}

export default App;
