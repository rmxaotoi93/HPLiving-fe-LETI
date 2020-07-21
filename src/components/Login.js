import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { loginWithEmail } from "../redux/action/userAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("rmxaotoi999");
  const [password, setPassword] = useState("123123");
  const [token, setToken] = useState("");
  const history = useHistory();
  const loginWithEmail = async (email, password) => {
    console.log("run ham");
    const res = await fetch(`http://localhost:3001/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const body = await res.json();
    console.log(body);
    localStorage.setItem("token", body.data.token);
    history.replace("/");
    window.location.reload();
  };

  return (
    <div className="login-bg">
      <div className="login">
        <form>
          <div>
            <h3>Sign In</h3>
          </div>
          <div>
            <input
              placeholder="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button onClick={() => loginWithEmail(email, password)}>Login</Button>
        </form>
      </div>
    </div>
  );
}
