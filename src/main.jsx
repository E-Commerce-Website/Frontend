import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { StoreProvider } from "./context/StoreContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <StoreProvider>
      <App />
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);
