import React, { useState } from 'react';
import './login.css'

const Login = ({changeLog,user}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(user);

  const handleLogin = () => {
    // In a real application, you would typically make an API call to authenticate the user
    // For simplicity, we'll use a hardcoded username and password
    const validUsername = 'user';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
      setIsLoggedIn(true);
      changeLog();
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    changeLog();
    setPassword('');
    setUsername('');
    // Additional logout logic can be added here, such as clearing session storage or making an API call
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className='logwin'>
          <label htmlFor="username">Username:</label>
          <input className='cred'
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input className='cred'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

         <div>
         <button onClick={handleLogin}>Log in</button>
         <button >Sign in</button>
         </div>
        </div>
      )}
    </div>
  );
};

export default Login;
