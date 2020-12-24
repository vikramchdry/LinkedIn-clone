
import React from 'react';
import "../styles/Feed.css";
import Post from './Post';
import InputOptions from './InputOptions';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsSharpIcon from '@material-ui/icons/SubscriptionsSharp';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';

function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    {/*input option phooto , video ,event, Write article*/}
                    <InputOptions Icon={ImageIcon} title='Photo' color="#70B5F9" />
                    <InputOptions Icon={SubscriptionsSharpIcon} title='Video' color="#E7A33E" />
                    <InputOptions Icon={EventNoteIcon} title='Event ' color="#C0CBCD" />
                    <InputOptions Icon={CalendarViewDayIcon} title='Write article' color="#7FC15E" />




                </div>
            </div>
            {/*Post over here*/}
            <Post />


        </div>
    )
}

export default Feed
