import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import './index.css';  // Your global CSS (if any)
import App from './App';  // Main App component
import { BrowserRouter as Router } from 'react-router-dom'; // React Router

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <Router> 
    <App />  
  </Router>
);
