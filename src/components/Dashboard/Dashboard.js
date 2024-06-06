import React from 'react';
import "./dashboard.scss";
import LogoImg from "../../assets/Logo_horizontal.png"
const Dashboard = () => {
  return (
    <div className='Container'>
      <div className="container_left">
        <div className="left_top">
          <img src={LogoImg} alt="Image hai" />
        </div>
        <div className="left_bottom">
          {/* <div className="bottom_details"> */}
          <div className="btn_icon">
            <li>
              DashBoard
            </li>
          </div>

          <div className="btn_icon">
            <li>
              Entity Manager
            </li>
          </div>
          <div className="btn_icon">
            <li>
              Data Manager
            </li>
          </div>
          <div className="btn_icon">
            <li>
              Reporting
            </li>
          </div>
          <div className="btn_icon">
            <li>
              Materiality
            </li>
          </div>
          <div className="btn_icon">
            <li>
              Suppliers
            </li>
          </div>
          <div className="btn_icon">
            <li>
              Analytics
            </li>
          </div>
          <div className="btn_icon">
            <li>
              Targets
            </li>
          </div>

          <div className="btn_icon">
            <button>Logout</button>
          </div>
          {/* </div> */}
        </div>
      </div>
      <div className="container_right">
        <div className="right_top">
          <h1>right top</h1>
        </div>
        <div className="right_bottom">
          <div className="content">
            <h1>Content</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;