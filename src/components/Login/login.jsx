import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import axios from 'axios';
import "./login.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Animação de queda
  const springProps = useSpring({
    from: { transform: "translateY(-100%)" },
    to: { transform: "translateY(0%)" },
    config: { tension: 170, friction: 20 }, // Configurações de animação para suavidade
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        email,
        password
      });

      // Se o login for bem-sucedido, você pode armazenar o token de autenticação ou redirecionar o usuário
      console.log('Login bem-sucedido:', response.data);
    } catch (error) {
      // Tratar erros de login
      console.error('Erro ao fazer login:', error);
      setError('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div className="login-container">
      <animated.div style={springProps} className="login-content">
        <div className="coin-title">COIN</div>
        <div className="login-box">
          <form onSubmit={handleLogin}>
            <div>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
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
      </animated.div>
    </div>
  );
}

export default Login;