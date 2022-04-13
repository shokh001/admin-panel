import React from 'react'
import './studentTopBar.css'
import plus from '../../assets/icons/plus.svg'
import importImg from '../../assets/icons/import.svg'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'

const StudentTopBar = () => {
  return (
    <div className="studentTopBar">
      <div className="leftStudentTopBar">
        <div className="addPlus">
          <img src={plus} alt="" />
          Add student
        </div>
        <div className="import">
          <img src={importImg} alt="" />
          Import
        </div>
      </div>

      <div className="rightStudenttopBar">
        <div>
          <select name="" id="">
            <option value="">Business</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>

          <ExpandMoreOutlinedIcon  className='iconDown'/>          
        </div>
        <div>
          <select name="" id="">
            <option value="">Subject</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>

          <ExpandMoreOutlinedIcon  className='iconDown'/>
        </div>
        <div>
          <select name="" id="">
            <option value="">Status</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>

          <ExpandMoreOutlinedIcon  className='iconDown'/>
        </div>
        <div>
          <select name="" id="">
            <option value="">Moderator</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>

          <ExpandMoreOutlinedIcon className='iconDown' />
        </div>
      </div>
    </div>
  )
}

export default StudentTopBar
