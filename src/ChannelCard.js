import React from 'react';
import './ChannelCard.css';
import { Link } from 'react-router-dom';

export default function ChannelCard({ channel }) {
    return <div className="channelCard">
        <div className="channelCard__top">
            <img className="channelCard__img" src={channel["imageUrl"]} />
            <div className="channelCard__rightSection">
                <p className="channelCard__number">{channel["stbNumber"]}</p>
                <p className="channelCard__title">{channel["title"]}</p>
            </div>
        </div>
        <div className="channelCard__bottom">
            <p>On Now</p>
            <p>N/A No Information Available</p>
            <Link to={{ 
                pathname: `/channel/${channel["id"]}`,
                state: { channel: channel.id}
                }}>View Detail</Link>
        </div>
    </div>;
}