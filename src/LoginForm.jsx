import React, { useState } from 'react';
import './LoginForm.css';
import logo from './url.png';

export default function LoginForm({ onLogin }) {
  const [codigoCliente, setCodigoCliente] = useState('');
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = codigoCliente && usuario && password;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) onLogin({ codigoCliente, usuario, password });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src={logo} alt="FinTrust" className="login-logo" />
        <h1 className="login-title">Iniciar sesión</h1>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="field">
            <label htmlFor="codigo" className="label">Código de cliente</label>
            <input
              id="codigo"
              type="text"
              className="input"
              placeholder="Ej. 0222"
              value={codigoCliente}
              onChange={(e) => setCodigoCliente(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="usuario" className="label">Usuario</label>
            <input
              id="usuario"
              type="text"
              className="input"
              placeholder="Tu usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="password" className="label">Contraseña</label>
            <input
              id="password"
              type="password"
              className="input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn" disabled={!isFormValid}>
            Iniciar sesión
          </button>
        </form>

        <p className="note">Uso interno • FinTrust</p>
      </div>
    </div>
  );
}
