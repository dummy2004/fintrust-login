import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginForm from './LoginForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginForm onLogin={(data) => console.log('Datos de login:', data)} />
  </React.StrictMode>
);
