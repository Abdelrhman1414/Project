import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., make an API call to validate credentials)
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={handleRememberMeChange}
            style={styles.checkbox}
          />
          <label htmlFor="rememberMe" style={styles.checkboxLabel}>
            Remember me
          </label>
        </div>
        <div style={styles.formGroup}>
          <button type="submit" style={styles.button}>
            Login
          </button>
        </div>
      </form>
      <div style={styles.bottomLinks}>
        <p>
          <a href="#forgot-password" style={styles.link}>
            Forgot password?
          </a>
        </p>
        <p>
          Don't have an account?{' '}
          <a href="#sign-up" style={styles.link}>
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    marginTop: '50px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
  },
  checkbox: {
    marginRight: '5px',
  },
  checkboxLabel: {
    fontSize: '14px',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  bottomLinks: {
    marginTop: '20px',
    textAlign: 'center',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
  },
};

export default Login;
