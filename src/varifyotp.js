import React, { useState,useEffect, useRef } from "react";
  import {useLocation, useNavigate } from "react-router-dom";
 import "./varifyopt.css";

const Varifyotp = () => {
    const [otp, setOtp] = useState(new Array(4).fill(""));
    const navigation = useNavigate();
    const [message, setMessage] = useState(false);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const location =useLocation();
  
    useEffect(() => {
      ref1.current.focus();
    }, []);

    // useEffect(()=>{
    //   // console.log(window.history.state.usr.email)
    //   console.log(location.state.email);
    // },[])
  
    const verifyOtp = async () => {
      
      const otpval = otp.join("");
      console.log("otps", otpval);
  
      if (otpval.length < 4) {
        //   setotpErr("Please Enter Valid OTP");
        setMessage("Please enter Verification Code");
      }
  
      if (otpval.length === 4) {  


        console.log(otp);
        let item ={
          "otp": otpval,
          "email": location.state.email
        }
      let result =  fetch("http://3.7.36.252:8000/api/authorize/verifyotp/",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Accept": "application/json"
        },
        body:JSON.stringify(item)
      }).then((result) => {
        if (result.status) {
          setTimeout(() => {
            navigation("/login")
          }, 800);
        } else {
          alert("Incorrect OTP")
        }
      });
        }
      }

    const handleChange = (ele, idx) => {
      if (isNaN(ele.value)) return false;
      setOtp([...otp.map((d, i) => (i === idx ? ele.value : d))]);
      // focus on next field
      if (ele.nextSibling && ele.value) {
        ele.nextSibling.focus();
      }
    };
    return (
        <div style={{marginTop: "108px",marginLeft: "200px"}}>
            <div className="mt-5">

              <h6  style={{textAlign: "center"}} className="mb-3">
                <b style={{fontSize: "26px",fontFamily: "initial",color: "black"}}>Email Verification</b>
              </h6>
              <p style={{textAlign:"center",fontSize: "26px", fontFamily: "initial",color: "black"}}>
                A one time verification code has been send to your email address,
                please enter it below and click on 'Verify'
              </p>
              <div  style={{marginBottom:"20px",marginBottom: "12px",textAlign: "center",marginTop: "20px",
    fontSize: "30px",color: "#109783"}} className="text-center">Verification Code</div>
              <form>
                <div style={{display:"flex",justifyContent:"center"}} className="form-group row mr-0 ml-0">
                  {otp.map((data, idx) => {
                    return (
                      <input
                      style={{width:"45px",color:"black"}}
                        ref={idx === 0 ? ref1 : ref2}
                        inputMode="numeric"
                        type="text"
                        className="form-control otpInput"
                        key={idx}
                        name="otp"
                        maxLength="1"
                        autoFocus
                        value={data}
                        onChange={(e) => handleChange(e.target, idx)}
                      />
                    );
                  })}
                </div>
                  <span style={{color:"red",justifyContent: "center", display: "flex",marginTop: "5px"}}>{message}</span>
             
              </form>
              <div className="text-center mt-4 mb-4 varify">
                  <button style={{marginRight:"30px",background:"#50A3A2",color:"white"}} className="btn btn-primary" onClick={()=>{verifyOtp()}}>
                    Verify
                  </button>
                    <button style={{background:"#50A3A2",color:"white"}} onClick={()=>{
                      navigation("/")
                    }} className="btn btn-outline-primary">
                      Cancel
                    </button>
                </div>
              </div>
        </div>
      );
    };
export default Varifyotp;