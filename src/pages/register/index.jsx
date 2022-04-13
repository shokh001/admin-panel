import React, { useEffect } from 'react'
import axios from 'axios'
import './resgister.css'
import card from '../../assets/images/Card.png'
import chart from '../../assets/images/chart.png'

const Resgister = () => {

  // https://api.systematicdev.uz/test-api

  const clicHandler = () => {
    try {
      axios
        .post("https://api.systematicdev.uz/test-api/register",)
        .then((res) => {
          console.log(res.data);
          // if (res.data.error) {
          //   (res.data.error ? res.data.error : res.data.msg);
          // } else {
          //   console.log(res, 'signs');
          //   // navigate("/login");
          //   // toast.success("Successfully registered 😇 ");
          //   // dispatch(clearreg());
          // }
        })
        .catch((err) =>console.log(err));
    } catch (e) {
      // toast.error(e.message);
    }
  };


  return (
    <div className="login">
      <div className="left">
        <div className="imgWrapper">
          <div>
            <img src={card} alt="" />
            <img className="chart" src={chart} alt="" />
          </div>

          <p>Welcome to your new dashboard</p>
          <span>Sign in to explore changes we’ve made.</span>
        </div>
      </div>

      <div className="right">
        <div className="wrapperLoginRight">
          <p>Welcome to ERP! 👋🏻</p>
          <h6>Please sign-in to your account and start the adventure</h6>
          <label htmlFor="num">Phone number</label>
          <input type="number" name="num" placeholder="Phone number" />
          <label htmlFor="text">Full name</label>
          <input type="text" name="text" placeholder="Full Name" />

          <button onClick={clicHandler}>Register</button>

          <h5>
            New on our platform? <a href="#">Login</a>
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Resgister
