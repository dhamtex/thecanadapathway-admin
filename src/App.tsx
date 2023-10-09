import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import withLoginContext from "./hoc/withLoginContext";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await axios
      .post("http://localhost:8085/admin/auth/login", {
        email,
        password,
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
    localStorage.setItem("accessToken", response?.data?.accessToken);
    localStorage.setItem("user", JSON.stringify(response?.data?.user));
    localStorage.setItem("date", new Date().getTime().toString());
    navigate("/dashboard");
  };

  return (
    <div className="App">
      <form onSubmit={(event) => handleSubmit(event)}>
        <p>Enter Email and Password</p>

        <div>
          <input
            type="email"
            placeholder="Enter Email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Enter Password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

export default withLoginContext(App);
