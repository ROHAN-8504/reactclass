import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { z } from "zod"

const userschema = z
  .string()
  .min(6, "Username must be at least 6 characters")
  .max(16, "Username cannot exceed 16 characters")

const passwordchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .max(16, "Password cannot exceed 16 characters")

const emailschema = z.string().email("Enter a valid email address")
const roleschema = z.string().min(1, "Select a role")

function validate(schema, value) {
  if (!value) return ""
  const result = schema.safeParse(value)
  return result.success ? "" : result.error.issues[0].message
}

function Register() {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState("")

  const usernameError = validate(userschema, username)
  const passwordError = validate(passwordchema, password)
  const emailError = validate(emailschema, email)
  const roleError = validate(roleschema, role)
  const disabled =
    !username ||
    !password ||
    !email ||
    !role ||
    usernameError ||
    passwordError ||
    emailError ||
    roleError

  const senddetails = async (event) => {
    event.preventDefault()
    setMessage("")
    setMessageType("")

    if (disabled) {
      setMessage("Please fix the form errors before submitting.")
      setMessageType("error")
      return
    }

    try {
      const response = await fetch("https://backend-pvp-ecommerce.onrender.com/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, email, role }),
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.msg || "Registration failed.")
      }

      localStorage.setItem("token", data.token ?? "")
      setMessage("Registration successful! Redirecting...")
      setMessageType("success")
      setTimeout(() => navigate("/"), 1400)
    } catch (error) {
      setMessage(error.message || "Unable to register at this time.")
      setMessageType("error")
    }
  }

  return (
    <main className="register-page">
      <section className="register-card">
        <h1>Create account</h1>
        <p>Register for access to our product catalog and personalized shopping.</p>

        <form className="register-form" onSubmit={senddetails} noValidate>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Enter username"
            />
            <span className="field-error">{usernameError}</span>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter password"
            />
            <span className="field-error">{passwordError}</span>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
            <span className="field-error">{emailError}</span>
          </div>

          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              className="form-input"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Choose role</option>
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
            <span className="field-error">{roleError}</span>
          </div>

          <button className="submit-button" type="submit" disabled={disabled}>
            Create Account
          </button>

          {message && (
            <p className={`form-message ${messageType === "error" ? "error" : "success"}`}>
              {message}
            </p>
          )}
        </form>
      </section>
    </main>
  )
}

export default Register