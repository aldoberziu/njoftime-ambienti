import { useState } from 'react';
import sendMagicLink from '../utils/magicLink/sendMagicLink';
import axios from "axios";
import { getApiDomain } from "../config";

const Login = () => {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleLogin = () => {
    // Here you can implement your login logic
    // console.log('Username:', username);
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter your username"
          />
        </div>
        <button type="button" onClick={sendMagicLink}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
