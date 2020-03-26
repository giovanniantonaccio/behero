import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import heroes from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

import './styles.css';

export default function Login() {
  const [id, setId] = useState('');

  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (err) {
      alert('Falha no Login, varifique o ID e tente novamente');
    }
  };

  return (
    <div className="login-container">
      <section className="form">
        <img src={logo} alt="Be the hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu Login</h1>

          <input
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroes} alt="Heroes" />
    </div>
  );
}
