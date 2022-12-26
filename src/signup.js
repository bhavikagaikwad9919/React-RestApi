import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [role_id, setRole_id] = useState("");

  const navigate = useNavigate();


  const login = () => {

    var data = {
      "email": email,
      "password": password,
      "role_id": role_id,
      "profile": {
        "first_name": first_name,
        "last_name": last_name,
        "phone_number": phone_number
      }
    }

    console.log(data, "in signup");
    let result = fetch("http://3.7.36.252:8000/api/authorize/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    }).then((result) => {
      if (result.status === 200) {
        setTimeout(() => {
          navigate("/varifyotp", { state: { email: email } })
        }, 800);
      } else {
        alert("Signup failure")
      }
    });
  }

  return (
    <div style={{ background: "#1cd4b8", width: "750px", height: "570px" }} className="container">
      <h1 style={{ fontFamily: "auto", color: "#036153", marginBottom: "10px" }}>Create an account</h1>
      <h2 style={{ color: "#daf2ed", fontWeight: "400", fontFamily: "cursive", }}>Signup</h2><br />
      <form>
        <input className='loginInput' onChange={(e) => {
          setFirstName(e.target.value)
        }}
          name="fName" placeholder="First Name" value={first_name} />

        <input className='loginInput' onChange={(e) => {
          setLastName(e.target.value)
        }}
          name="lName" placeholder="Last Name" value={last_name} />

        <input className='loginInput' onChange={(e) => {
          setEmail(e.target.value)
        }}
          name="email" placeholder="Email" value={email} />

        <input className='loginInput' onChange={(e) => {
          setPassword(e.target.value)
        }} name="email" placeholder="Password" type="password" value={password} />

        <input className='loginInput' onChange={(e) => {
          setRole_id(e.target.value)
        }} name="email" placeholder="Role_id" value={role_id} />

        <input className='loginInput' onChange={(e) => {
          setPhone_number(e.target.value)
        }} name="email" placeholder="Phone_number" value={phone_number} />

      </form>

      <button style={{ width: "360px" }} onClick={login}>Submit</button>
    </div>
  );
}

export default Signup;



