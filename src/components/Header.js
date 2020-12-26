import React from 'react'
import '../styles/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SmsIcon from '@material-ui/icons/Sms';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { logout } from './userSlice';
import { auth } from './firebase';
import { useDispatch } from "react-redux";



function Header() {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    };

    return (
        <div className="header">

            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
                <div div className="header__search" >
                    <SearchIcon /><input placeholder="Search" type="text" />

                    {/* SearchIcon*/}
                </div >
                {/*left header*/}
            </div >
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='MyNetwork' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={SmsIcon} title='Message' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />

                <HeaderOption avatar="https://gyeditz.blogspot.com/2020/02/professional-dp-photo-editing-concept.html" title='Me' onClick={logoutOfApp} />

            </div>

        </div >
    )
}

export default Header;