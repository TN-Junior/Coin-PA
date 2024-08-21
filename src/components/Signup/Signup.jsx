import React, { useState } from "react";
import axios from '../axiosConfig';  // Importando a configuração do axios
import "./signup.css";

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('/signup', {
        name: name,
        email: email,
        password: password,
      });
      console.log('Signup Successful:', response.data);
      // Redirecionar para a página de login ou dashboard, conforme necessário
    } catch (err) {
      setError('Signup failed. Please try again.');
      console.error('Signup Error:', err);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="coin-title">COIN</div>
        <div className="signup-box">
          <form onSubmit={handleSignup}>
            <div>
              <input 
                type="text" 
                placeholder="Nome Completo" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
            </div>
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
                placeholder="Senha" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            <div>
              <input 
                type="password" 
                placeholder="Confirme a Senha" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit">Cadastrar</button>
          </form>
        </div>
        <div className="login-link">
          Já tem uma conta? <a href="/login">Faça login</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
