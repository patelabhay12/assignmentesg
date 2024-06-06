import React from 'react'
import "./login.scss";
import { getDatabase, ref, set } from 'firebase/database';
import { app } from '../../firebase';
import Logo_Horizontal from "../../assets/Logo_horizontal.png";
import topImg from "../../assets/image.png";
import google_Logo from "../../assets/google_logo.png";
import tw_Logo from "../../assets/twlogo.png";


const db = getDatabase(app);
const Login = () => {


    const putData = () => {
        set(ref(db, 'users/abhay'), {
            id: 1,
            name: "Abhay",
            email: "abhaypatel6794@gmail.com"
        })
    }
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
                    <h1>Login</h1>

                    <div className="input">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='Your Email Id' />
                    </div>

                    <div className="input">
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='Password' />
                    </div>

                    <div className="input">
                        <div class="google-btn">
                            <div class="google-icon-wrapper">
                                <img className="google-icon" src={google_Logo} />
                            </div>
                            <p class="btn-text"><b>Sign in with google</b></p>
                        </div>
                    </div>

                    <div className="input">
                        <div class="google-btn">
                            <div class="google-icon-wrapper">
                                <img className="google-icon" src={tw_Logo} />
                            </div>
                            <p class="btn-text"><b>Sign in with Twitter</b></p>
                        </div>
                    </div>


                    <div className="input" onClick={putData}>
                        <button >Continue</button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Login;   