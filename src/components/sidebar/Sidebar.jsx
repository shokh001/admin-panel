import './sidebar.css'
import menu from '../../assets/icons/menu.svg'
import DataUsageIcon from '@material-ui/icons/DataUsage'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import CropFreeIcon from '@material-ui/icons/CropFree'
import SchoolIcon from '@material-ui/icons/School'
import PeopleIcon from '@material-ui/icons/People'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined'
import LineWeightOutlinedIcon from '@material-ui/icons/LineWeightOutlined'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sideBarTop">
        <div className="sideBarLogo"></div>
        <img src={menu} alt="" />
      </div>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <div>
                  <DataUsageIcon className="sidebarIcon" />
                  Analytics
                </div>
              </li>
            </Link>
            <li className="sidebarListItem">
              <div>
                <CreditCardIcon className="sidebarIcon" />
                Orders
              </div>
              <ExpandMoreOutlinedIcon />
            </li>
            <li className="sidebarListItem">
              <div>
                <CropFreeIcon className="sidebarIcon" />
                QR Code
              </div>
            </li>
            <li className="sidebarListItem">
              <div>
                <CreditCardIcon className="sidebarIcon" />
                Shifts
              </div>
            </li>
            <li className="sidebarListItem">
              <div>
                <SchoolIcon className="sidebarIcon" />
                Students
              </div>

              <ExpandMoreOutlinedIcon />
            </li>
            <li className="sidebarListItem">
              <div>
                <PeopleIcon className="sidebarIcon" />
                Group
              </div>

              <ExpandMoreOutlinedIcon />
            </li>
            <li className="sidebarListItem">
              <div>
                <AccountBalanceIcon className="sidebarIcon" />
                Courses
              </div>

              <ExpandMoreOutlinedIcon />
            </li>
            <li className="sidebarListItem">
              <div>
                <BusinessCenterOutlinedIcon className="sidebarIcon" />
                HR
              </div>
            </li>
            <li className="sidebarListItem">
              <div>
                <LineWeightOutlinedIcon className="sidebarIcon" />
                News
              </div>

              <ExpandMoreOutlinedIcon />
            </li>
            <li className="sidebarListItem">
              <div>
                <SettingsOutlinedIcon className="sidebarIcon" />
                Settings
              </div>
              <ExpandMoreOutlinedIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
