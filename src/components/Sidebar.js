import { Avatar } from '@material-ui/core';
import React from 'react'
import '../styles/Sidebar.css';
import { useSelector } from "react-redux";
import { selectUser } from './userSlice';

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => {
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>

    };

    return (
        <div className="sidebar">
            <div className="sidebar__top">

                <img src="https://images.unsplash.com/photo-1547986164-81d93de7929c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1569&q=80" alt="" />

                <Avatar src={user.photoUrl} className="avatar__sidebar" />
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
                <div className="sidebar__stats">

                    <div className="sidebar__stat">
                        <p>View my profile</p>
                        <p className="sidebar__statNumber">4,567</p>
                    </div>

                    <div className="sidebar__stat">
                        <p>your Post </p>
                        <p className="sidebar__statNumber">5,234</p>
                    </div>
                </div>

            </div>
            <div className="sidebar__bottom">
                <p>Recent
                    {recentItem('Reactjs')}
                </p>
            </div>
        </div>
    )
}


export default Sidebar;
