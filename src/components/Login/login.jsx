import React, { useState } from "react";
import axios from '../axiosConfig';  // Importando a configuração do axios
import "./login.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', {
        email: email,
        password: password,
      });
      console.log('Login Successful:', response.data);
      // Você pode redirecionar o usuário para o dashboard ou salvar o token de autenticação aqui
    } catch (err) {
      setError('Login failed. Please check your credentials.');
      console.error('Login Error:', err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="coin-title">COIN</div>
        <div className="login-box">
          <form onSubmit={handleLogin}>
            <div>
              <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            <div>
              <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <div className="forgot-password">
              <a href="/forgot-password" className="forgot-password-link">Esqueci a senha</a>
            </div>
            <button type="submit">Entrar</button>
          </form>
        </div>
        <div className="signup-link">
          Ainda não é colaborador? <a href="/signup">Cadastre-se agora</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
