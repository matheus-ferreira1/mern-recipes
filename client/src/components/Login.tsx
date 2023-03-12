import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [cookies, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });

      setCookies("access_token", response.data.access_token);
      window.localStorage.setItem("userId", response.data.userId);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div onSubmit={handleSubmit}>
      <form>
        <h2>Log In</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div>
          <label htmlFor="username">Password:</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
