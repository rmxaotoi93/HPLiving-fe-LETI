import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { loginWithEmail } from "../redux/action/userAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
export default function Login() {
  const [email, setEmail] = useState("rmxaotoi999");
  const [password, setPassword] = useState("123123");
  const [token, setToken] = useState("");
  const history = useHistory();

  const responseFacebook = async (data) => {
    if (data && data.accessToken) {
      try {
        const res = await axios.get(
          `http:localhost:3001/auth/facebook/login?token=${data.accessToken}`
        );
        const { user, token } = res.data.data;
        console.log(token);
        localStorage.setItem("token", token);
        history.replace("/");
        window.location.reload();
        return user;
      } catch (error) {
        return new Error(error);
      }
    }
  };
  const handleFacebook = async (resp) => {
    if (resp && resp.accessToken) {
      const user = await responseFacebook(resp);
      // console.log(user)

      if (user instanceof Error) {
        console.log("Oops! Something happened");
        return;
      }
      //dispatch({ type: "USERLOADED", payload: { isUserLoaded: true } });
      // dispatch({ type: "LOGIN", payload: { showLogin: false } });
    }
  };
  const loginWithEmail = async (email, password) => {
    console.log("run ham");
    const res = await fetch(`${process.env.REACT_APP_SERVER}/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const body = await res.json();
    console.log(body);
    localStorage.setItem("token", body.data.token);
    localStorage.setItem("userId", body.data.user._id);

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
          <FacebookLogin
            // cssClass="fb-gg-btn"

            autoLoad={false}
            appId="283567762895077"
            fields="name,email,picture"
            callback={(resp) => handleFacebook(resp)}
            // icon={<i className="fab fa-facebook-f"></i>}
            textButton="&nbsp;&nbsp;Facebook"
          />
        </form>
      </div>
    </div>
  );
}
