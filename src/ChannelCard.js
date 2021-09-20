/*
Using React JS framework. Here , author prepare component , get every instance and preprare it for the 'view'.
This component will be called in App.js
*/

import React from 'react';
import { Link } from 'react-router-dom';

export default function ChannelCard({ channel }) {
    return <div className="channelCard">
        <div className="channelCard_top">
            <img className="channelCard_img" src={channel["imageUrl"]} alt={channel["title"]}/>
            <div className="channelCard_rightSection">
                <p className="channelCard_number">{channel["stbNumber"]}</p>
                <p className="channelCard_title">{channel["title"]}</p>
            </div>
        </div>
        <div className="channelCard_bottom">
            <Link className="channelCard_button" to={{ 
                pathname: `/channel/${channel["id"]}`,
                state: { channel_id: channel.id }
                }}>View Detail</Link>
        </div>
    </div>;
}