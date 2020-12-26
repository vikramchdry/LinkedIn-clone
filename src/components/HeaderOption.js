import React from 'react'
import '../styles/HeaderOption.css';
import Avatar from '@material-ui/core/Avatar';

function HeaderOption({ avatar, Icon, title, onClick }) {

    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className=" headerOption__icon" />}
            {avatar &&
                <Avatar className="headerOption__icon" src={avatar} alt="" />}
            <h3 className="headerOption__title">{title}</h3>

        </div>
    )
}

export default HeaderOption;
