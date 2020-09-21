import React, { useState }from 'react'
import './css/TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Efosa Igbinehi",
            username: "whizkidefos",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://avatars3.githubusercontent.com/u/10976590?s=400&u=25f6336a7181182411f9da7c07ede02c2b19a765&v=4",
        });

        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form action="">
                <div className="tweetBox--input">
                    <Avatar></Avatar>
                    <input 
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage} 
                        type="text" 
                        placeholder="What's happening?" 
                    />
                </div>
                <input
                    onChange={(e) => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox--imageInput" 
                    type="text" 
                    placeholder="Optional: Enter an image/gif URL" 
                />
                <Button onClick={sendTweet} type="submit" className="tweetBox--tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
