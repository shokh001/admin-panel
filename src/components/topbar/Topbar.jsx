import React from "react";
import avatar from '../../assets/images/avatar.png'
import lock from '../../assets/icons/lock.svg'
import login from '../../assets/icons/login.svg'
import "./topbar.css";
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Students list</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <img src={avatar} alt='' />
            Avaz Tulovov
            <ExpandMoreOutlinedIcon  className="iconDownAvatar"/>
          </div>
          <img className="lockIcon" src={lock} alt="" />
          <img src={login} alt="" />
        </div>
      </div>
    </div>
  );
}
