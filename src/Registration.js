//import { Router } from "express";
import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
 import  "./registration.css"

function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emergencyctcno, setEmergencyctcno] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dateofBirth, setDateofBirth] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  // const [ethnicity_id, setEthnicity_id] = useState("");
  // const [other_ethnicity, setOther_Ethnicity] = useState("");

  const navigate= useNavigate();

   const Registor= ()=>{

    var registrationData ={
      "email":email,
      "profile": {
             "first_name": firstName,
             "last_name": lastName,
             "phone_number": number,
             "doctor_id":12
      },
      "profile_info":{
       "emergency_contact":emergencyctcno,
       "date_of_birth": dateofBirth,
       "height": height,
       "weight": weight,
       "gender": "gender",
       "address": address,
       "ethnicity_id": "",
       "other_ethincity": ""
     }
     }
    console.log(registrationData,"in signup");
    let result =  fetch("http://3.7.36.252:8000/api/profiles/doctor/addpatient/",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Accept": "application/json"
      },
      body:JSON.stringify(registrationData)
    }).then((result) => {
      if (result.status===201) {
        setTimeout(() => {
          navigate("/Endpage")
        }, 800);
      } else {
        alert("Signup failure")
      }
    });;
  }
  
  return (
    <div style={{background:"#1be0b2",width:"60rem",height: "1000px"}}className="container">
    <h1 style={{fontFamily: "auto",color: "#036153",marginBottom:"10px"}}>Welcome </h1>
      <h2 style={{color:"#DAF2ED",fontWeight: "400",fontFamily: "cursive",}}>Registration</h2><br/>
      <form>
        <input className='registrationInput' onChange={(e)=>{
          setFirstName(e.target.value)}}
          name="fName" placeholder="First Name" />
        <input className='registrationInput' onChange={(e)=>{
          setLastName(e.target.value)}}
          name="lName" placeholder="Last Name"/>

{/* <select style={{background:"#1be0b2",width:"355px",height: "44px",marginBottom: "10px", fontSize:"20px",color:"black",opacity:"0.5"}} 
name="Gender" id="selectList">
   <option value="option 1">Male</option>
   <option value="option 2">Female</option>
   <option value="option 2">Others</option>

</select> */}
        <input className='registrationInput' onChange={(e)=>{
          setEmail(e.target.value)}}
          name="email" placeholder="Email" />

<input className='registrationInput' onChange={(e)=>{
          setNumber(e.target.value)}}
          name="Number" placeholder="Mobile Number" />

         <input className='registrationInput' onChange={(e)=>{
          setEmergencyctcno(e.target.value)}} name="Emergency Contact Number" placeholder="Emergency Contact Number" />

         <input className='registrationInput' onChange={(e)=>{
         setAge(e.target.value)}} name="age" placeholder="Age"  />

<input className='registrationInput' onChange={(e)=>{
         setDateofBirth(e.target.value)}} name="age" placeholder="Date Of Birth"  />

<input className='registrationInput' onChange={(e)=>{
          setHeight(e.target.value)}}
          name="Address" placeholder="Height" />

<input className='registrationInput' onChange={(e)=>{
          setWeight(e.target.value)}}
          name="Address" placeholder="weight" />

{/* <input className='registrationInput' onChange={(e)=>{
          setEthnicity_id(e.target.value)}}
          name="Address" placeholder="Ethnicity_id" />

<input className='registrationInput' onChange={(e)=>{
          setOther_Ethnicity(e.target.value)}}
          name="Address" placeholder="Other_Ethnicity" /> */}

<input className='registrationInput' onChange={(e)=>{
          setAddress(e.target.value)}}
          name="Address" placeholder="Address" />

      </form>
      <button style={{width:"360px"}} onClick={Registor}>Registration</button>
    </div>
  );
}
export default Registration;