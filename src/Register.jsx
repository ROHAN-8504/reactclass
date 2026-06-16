import { useState } from "react"
import {z} from "zod"

let userschema=z.string().min(6,"username must need min 6characters").max(16,'max limit 16 characters')
let passwordchema=z.string().min(8,"username must need min 8characters").max(16,'max limit 16 characters')
let emailschema=z.email().min(3,"min charcters 3")
let roleschema=z.string().min(1,"username must need min 1characters")

//helper function(
function validate(schema,value){
  if(!value) return ""
 let result= schema.safeParse(value)
 if(result.success) return ""
 return result.error.issues[0].message
}
function Register() {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [email, setemail] = useState('')
  const [role, setrole] = useState('')

   let senddetails=async (event)=>{
    event.preventDefault()
    let response=  await fetch('https://backend-pvp-ecommerce.onrender.com/auth/register',{
        method:'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({username,password,email,role})
      })

    let data=await  response.json()
    let token=data.token
    localStorage.setItem("token",token)
    alert(data.msg)
   }

  return (
    <>
      <section className="register-page">
        <form className="register-card" onSubmit={senddetails}>
          <div className="register-heading">
            <p>Create account</p>
            <h1>Register</h1>
          </div>

          <label className="register-field">
            <span>Username</span>
            <input
              onChange={(e)=>{setusername(e.target.value)}}
              type="text"
              placeholder="Enter username"
            />
            <p>{validate(userschema,username)}</p>
          </label>

          <label className="register-field">
            <span>Password</span>
            <input
              onChange={(e)=>{setpassword(e.target.value)}}
              type="password"
              placeholder="Enter password"
            />
            <p>{validate(passwordchema,password)}</p>
          </label>

          <label className="register-field">
            <span>Email</span>
            <input
              onChange={(e)=>{setemail(e.target.value)}}
              type="email"
              placeholder="Enter email"
            />
            <p>{validate(emailschema,email)}</p>
          </label>

          <label className="register-field">
            <span>Role</span>
            <input
              onChange={(e)=>{setrole(e.target.value)}}
              type="text"
              placeholder="Enter role"
            />
            <p>{validate(roleschema,role)}</p>
          </label>

          <button className="register-button" type="submit">Register</button>
        </form>
      </section>
    </>
  )
}

export default Register
