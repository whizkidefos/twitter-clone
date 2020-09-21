import React from 'react'
import { Search } from '@material-ui/icons';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import './css/Widgets.css';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets--input">
                <Search className="widgets--searchIcon" />
                <input type="text" placeholder="Search Twitter" />
            </div>

            <div className="widgets--widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1185152144158187520"} />

                <TwitterTimelineEmbed
                    sourceType = "profile"
                    screenName = "whizkidefos"
                    options = {{ height: 400 }}
                />
            </div>
        </div>
    )
}

export default Widgets;
