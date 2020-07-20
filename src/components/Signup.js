import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function Signup() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const handleSignup = async () => {
    const houseData = {
      name: name,
      email: email,
      password: password,
    };

    const newUser = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(houseData),
    });
    alert("register successful");
    console.log("newuser", newUser);
  };
  return (
    <div className="signup">
      <div>
        <h3>Sign up</h3>
      </div>
      <form onSubmit={handleSignup}>
        <div>
          <input
            placeholder="username"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit">Create account</Button>
      </form>
    </div>
  );
}
