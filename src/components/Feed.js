
import React, { useEffect, useState } from 'react';
import "../styles/Feed.css";
import Post from './Post';
import InputOptions from './InputOptions';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsSharpIcon from '@material-ui/icons/SubscriptionsSharp';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import { db } from './firebase';
import firebase from 'firebase';

function Feed() {

    const [input, setInput] = useState("");

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }

            )))
        ));

    }, []);

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add(
            {

                name: 'Vikram Singh',
                description: "this is portfolio",
                message: input,
                photoUrl: '',
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),

            });
        setInput("");



    };



    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                        <button onClick={sendPost} type="submit">Send</button>
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
            {posts.map(({ id, data: { name, description, message, photoUrl } }) =>
            (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            )
            )}
            {/*Post over here*/}
            

        </div>
    );
}

export default Feed;
