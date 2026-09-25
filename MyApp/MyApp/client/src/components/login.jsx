import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  function handleSubmit(e) {
    if (username === 'admin' && password === 'admin') {
      navigate('/admin');
    } else if (username === 'user' && password === 'user') {
      navigate('/user');
    } else {
      alert('Invalid username or password');
    }

  }

  function handleReset() {
    setUsername('');
    setPassword('');
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Login</button>
        <br />
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
};

export default Login;
