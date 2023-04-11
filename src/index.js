import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Toaster } from 'react-hot-toast';
import App from './components/App';
import { StateContext } from './context/StateContext';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <StateContext>
      <App />
    </StateContext>
  </React.StrictMode>
);
