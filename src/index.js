import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserAuthContextProvider } from './context/UserAuthContext';
import SearchCriteriaContextProvider from './context/SearchCriteriaContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <SearchCriteriaContextProvider>
        <App />
      </SearchCriteriaContextProvider>
    </UserAuthContextProvider>
  </React.StrictMode>
);