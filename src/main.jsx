import { Leva } from 'leva';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// import { raf } from '@react-spring/rafz';

// raf.frameLoop = 'always';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <App />
      <Leva hidden />
    </BrowserRouter>
  </>,
);
