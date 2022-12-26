import React,{useState} from 'react'
import {useNavigate } from "react-router-dom";
// import Signup from './signup';
import "./login.css"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  
    const navigate= useNavigate();
  
     const login= ()=>{
      console.log(email,password,"in signup");
      let item = {email,password}
      let result =  fetch("http://3.7.36.252:8000/api/authorize/login/",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Accept": "application/json"
        },
        body:JSON.stringify(item)
      }).then((result)=>{
        if(result.status===200){
          setTimeout(() => {
            navigate("/registration")
          }, 2000);
        }else{
          alert("Loig in fail")
        }
      });
    }
    return (
        <div style={{background:"#1be0b2",width:"750px",height: "500px"}} className="container">
        <h1 style={{fontFamily: "auto",color: "#036153",marginBottom:"10px"}}>Welcome Back!</h1>
        <h2 style={{color:"#daf2ed",fontWeight: "400",fontFamily: "cursive"}}>Login</h2><br/>
        <form>
          <input className='loginInput' onChange={(e)=>{
            setEmail(e.target.value)}} 
            placeholder="Email"/>

          <input className='loginInput' onChange={(e)=>{
            setPassword(e.target.value)}} 
             placeholder="password" type="password" />

        </form>
  
        <button style={{width:"360px",marginBottom:"10px"}}onClick={login}>Submit</button>
        <p style={{fontSize:"20px"}}>Don't have an account? <a href='/Signup' style={{color:"blue",fontFamily: "auto",fontSize: "23px"}}>signup</a></p>
      </div>
    );
}

export default Login