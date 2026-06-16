import { useState } from "react";
import { z } from "zod";
import "./login.css";

let userschema = z
  .string()
  .min(6, "username must need min 6characters")
  .max(16, "max limit 16 characters");
let passwordchema = z
  .string()
  .min(8, "username must need min 8characters")
  .max(16, "max limit 16 characters");

function validate(schema, value) {
  if (!value) return "";
  let result = schema.safeParse(value);
  if (result.success) return "";
  return result.error.issues[0].message;
}

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  let senddetails = async (e) => {
    e.preventDefault();
    let jwttoken = localStorage.getItem("token");

    let response = await fetch(
      "https://backend-pvp-ecommerce.onrender.com/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${jwttoken}`,
        },
        body: JSON.stringify({ username, password }),
      },
    );

    let data = await response.json();
    alert(data.msg);
  };
  return (
    <>
      <section className="login-section">
        <h1 className="login-title">Login to your account</h1>
        <form onSubmit={senddetails}>
          <div className="login-block">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              onChange={(e) => {
                setusername(e.target.value);
              }}
              type="text"
              placeholder="username"
            />
            <p className="field-error">{validate(userschema, username)}</p>
          </div>
          <div className="login-block">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              type="password"
              placeholder="password"
            />
            <p className="field-error">{validate(passwordchema, password)}</p>
          </div>
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      </section>
    </>
  );
}

export default Login;
