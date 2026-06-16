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
let emailschema = z.email().min(3, "min charcters 3");
let roleschema = z.string().min(1, "username must need min 1characters");

//helper function(
function validate(schema, value) {
  if (!value) return "";
  let result = schema.safeParse(value);
  if (result.success) return "";
  return result.error.issues[0].message;
}
function Register() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [role, setrole] = useState("");

  let senddetails = async (event) => {
    event.preventDefault();
    let response = await fetch(
      "https://backend-pvp-ecommerce.onrender.com/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, email, role }),
      },
    );

    let data = await response.json();
    let token = data.token;
    localStorage.setItem("token", token);
    alert(data.msg);
  };

  return (
    <>
      <section className="login-section">
        <h1 className="login-title">Create an account</h1>
        <form onSubmit={senddetails}>
          <div className="login-block">
            <label htmlFor="reg-username">Username</label>
            <input
              id="reg-username"
              onChange={(e) => {
                setusername(e.target.value);
              }}
              type="text"
              placeholder="username"
            />
            <p className="field-error">{validate(userschema, username)}</p>
          </div>

          <div className="login-block">
            <label htmlFor="reg-password">Password</label>
            <input
              id="reg-password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              type="password"
              placeholder="password"
            />
            <p className="field-error">{validate(passwordchema, password)}</p>
          </div>

          <div className="login-block">
            <label htmlFor="reg-email">Email</label>
            <input
              id="reg-email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
              type="email"
              placeholder="email"
            />
            <p className="field-error">{validate(emailschema, email)}</p>
          </div>

          <div className="login-block">
            <label htmlFor="reg-role">Role</label>
            <input
              id="reg-role"
              onChange={(e) => {
                setrole(e.target.value);
              }}
              type="text"
              placeholder="role"
            />
            <p className="field-error">{validate(roleschema, role)}</p>
          </div>

          <button className="login-btn" type="submit">
            Register
          </button>
        </form>
      </section>
    </>
  );
}

export default Register;
