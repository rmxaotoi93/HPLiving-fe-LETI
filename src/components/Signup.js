import React, { useState } from "react";
import { Button } from "react-bootstrap";

import axios from "axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [images, setImages] = useState("");

  const handleSignup = async () => {
    const userData = {
      name: name,
      email: email,
      password: password,
      images: images,
    };
    // var formData = new FormData();
    // formData.append("name", name);
    // formData.append("password", password);
    // formData.append("email", email);

    // for (const key of Object.keys(images)) {
    //   formData.append("images", images[key]);
    // }
    console.log("12312312312321");
    const newUser = await axios.post(
      process.env.REACT_APP_SERVER + "/users",
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(userData),
      }
    );
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
            name="username"
            placeholder="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            name="email"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            name="password"
            value={password}
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            name="images"
            placeholder="Image"
            onChange={(e) => setImages(e.target.value)}
          />
        </div>
        <Button type="submit">Create account</Button>
      </form>
    </div>
  );
}
