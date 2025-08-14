import React from "react";
import LoginForm from "./LoginForm";

export default function App() {
  const handleLogin = (payload) => {
    // simulación: por ahora solo mostramos en consola
    console.log("Login()", payload);
    alert(Login de: ${payload.usuario} (cliente: ${payload.codigoCliente}));
  };

  return (
    <div style={{ maxWidth: 420, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>FinTrust · Iniciar sesión</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}