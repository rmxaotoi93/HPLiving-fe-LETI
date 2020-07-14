import React from "react";
import { Button } from "react-bootstrap";
export default function Login() {
  return (
    <div className="login">
      <div>
        <h3>Sign In</h3>
      </div>
      <div>
        <input placeholder="username" />
      </div>
      <div>
        <input placeholder="password" />
      </div>
      <Button>login</Button>
    </div>
  );
}
