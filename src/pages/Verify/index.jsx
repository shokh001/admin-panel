import React from 'react'
import email from '../../assets/icons/email.svg'
import './verify.css'

const Verify = () => {
  return (
    <div className='verify'>
        <div className='verifyWarpper'>
            <img src={email} alt="" />
            <p>Check your phone number</p>
            <span>We sent a verification link to+998994958186</span>

            <div className='wrapperInputNumbers'>
                <input type="number" />
                <input type="number" />
                <input type="number" />
                <input type="number" />
            </div>

            <button>verify</button>

            <a href="">Back to log in</a>
        </div>
    </div>
  )
}

export default Verify