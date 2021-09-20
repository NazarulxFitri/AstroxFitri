import React from 'react';
import './ChannelCard.css';
import { Link } from 'react-router-dom';

export default function ChannelCard({ channel }) {
    return <div className="channelCard">
        <div className="channelCard__top">
            <img className="channelCard__img" src={channel["imageUrl"]} alt={channel["title"]}/>
            <div className="channelCard__rightSection">
                <p className="channelCard__number">{channel["stbNumber"]}</p>
                <p className="channelCard__title">{channel["title"]}</p>
            </div>
        </div>
        <div className="channelCard__bottom">
            <Link className="channelCard__button" to={{ 
                pathname: `/channel/${channel["id"]}`,
                state: { channel_id: channel.id }
                }}>View Detail</Link>
        </div>
    </div>;
}