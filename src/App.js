import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home, Login, AdminLogin, StudentLogin, ContactUs } from './Home';
export default function App() {
  return (
    <div style={{ padding: '2px', margin: '1px' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/StudentLogin" element={<StudentLogin />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
