import React from 'react'
import "./signup.scss";
import Logo_Horizontal from "../../assets/Logo_horizontal.png";
import topImg from "../../assets/image.png";

const Signup = () => {
  return (

    <div className="container">
      <div className="left">
        <p >WELCOME TO</p>
        <img src={Logo_Horizontal} alt="logo_horizontal" className='horizontal_logo' />
        <span>We help you track your organisations metrics as per the ESG Guidelines</span>
        <p >Sounds Interesting? <span>Get in touch!</span> </p>
      </div>
      <div className="right">
        <div className="top">
          <img src={topImg} alt="top logo" />
        </div>
        <div className="bottom">
          <h1>Sign Up</h1>

          <div className="input">
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Your Email Id' />
          </div>

          <div className="input">
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Password' />
          </div>

          <div className="input">
            <label htmlFor="">Confirm Password</label>
            <input type="password" placeholder='Password' />
          </div>


          <div className="input">
            <button >Continue</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Signup;