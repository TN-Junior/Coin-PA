import React, { useState } from "react";
import "./signup.css";

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Aqui, adicionar a lógica para criar uma nova conta
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="coin-title">COIN</div>
        <div className="signup-box">
          <form onSubmit={handleSignup}>
            <div>
              <input type="text" placeholder="Nome Completo" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
              <input type="password" placeholder="Confirme a Senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <button type="submit">Cadastrar</button>
          </form>
        </div>
        <div className="login-link">
          Já tem uma conta? <a href="/">Faça login</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
