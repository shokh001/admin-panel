import card from '../../assets/images/Card.png'
import chart from '../../assets/images/chart.png'
import './login.css'

const Login = () => {

  

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
            <input type="number" name='num' placeholder='Phone number' />

            <button>Login</button>

            <h5>New on our platform? <a href='#'>Create an account</a></h5>
          </div>
      </div>
    </div>
  )
}

export default Login
