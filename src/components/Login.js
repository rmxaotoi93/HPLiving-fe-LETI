import React from "react";
import { Button } from "react-bootstrap";
import { loginWithEmail } from "../redux/action/userAction";
import { useDispatch } from "react-redux";
export default function Login() {
  const dispatch = useDispatch();

  return (
    <div className="login-bg">
      <div className="login">
        <form>
          <div>
            <h3>Sign In</h3>
          </div>
          <div>
            <input placeholder="username" />
          </div>
          <div>
            <input placeholder="password" />
          </div>
          {/* {token ? (
          <Button type="submit">log out</Button>
        ) : (
          <Button type="submit">log in</Button>
        )} */}
          <Button
            onClick={() =>
              dispatch(loginWithEmail("rmxaotoi@gmail.com", "123456"))
            }
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
