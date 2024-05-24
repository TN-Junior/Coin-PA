import React, { useState } from "react";
import "./login.css"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Aqui, adicionar a lógica para fazer login
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="coin-title">COIN</div>
        <div className="login-box">
          <form onSubmit={handleLogin}>
            <div>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="forgot-password">
              <a href="/forgot-password" className="forgot-password-link">Esqueci a senha</a>
            </div>
            <button type="submit">Entrar</button>
          </form>
        </div>
        <div className="signup-link">
          Ainda não é colaborador? <a href="/cadastro">Cadastre-se agora</a>
        </div>
      </div>
    </div>
  );
}

export default Login;