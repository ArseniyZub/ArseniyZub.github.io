import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={process.env.PUBLIC_URL || ''}>
    <App />
  </BrowserRouter>
);