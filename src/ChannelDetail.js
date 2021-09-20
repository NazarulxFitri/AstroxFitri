import React from 'react';
import Axios from 'axios';
import './ChannelDetail.css';

class ChannelDetail extends React.Component {
    state = {
        activeChannel: [],
        activeSchedules: []
    }

    componentDidMount = async () => {
        const channel_id = this.props.location.state.channel_id;
        const api_call = await fetch(`https://contenthub-api.eco.astro.com.my/channel/${channel_id}.json`);
        const api_res = await api_call.json();
        this.setState({ activeChannel: api_res.response, activeSchedules: api_res.response.schedule });
    }


    render() {
        const channel = this.state.activeChannel;
        const schedules = this.state.activeSchedules;

        console.log(schedules);

        return (
            <div className="channel">
                <div className="channel__header">
                    <img className="channel__img" src={channel['imageUrl']} />
                    <div className="channel__rightSection">
                        <p className="channelCard__number">{channel["stbNumber"]}</p>
                        <p className="channelCard__title">{channel["title"]}</p>
                    </div>
                </div>
                <p className="channel__description">{channel["description"]}</p>
                <div className="channel__schedule">
                    <table>
                        <tr>
                            {
                                Object.keys(schedules).map((keyName) => (
                                    <td>{keyName}</td>
                                ))
                            }
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default ChannelDetail;