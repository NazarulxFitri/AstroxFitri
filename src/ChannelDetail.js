import React, { useEffect, useState } from 'react';
import './ChannelDetail.css';

const ChannelDetail = (props) => {

    const [activeChannel, setActiveChannel] = useState([]);
    const [activeSchedule, setActiveSchedules] = useState([]);
    const [scheduleDate, setScheduleDate] = useState([]);
    const [scheduleList, setScheduleList] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(async () => {
        const channel_id = props.location.state.channel_id;
        const api_call = await fetch(`https://contenthub-api.eco.astro.com.my/channel/${channel_id}.json`);
        const api_res = await api_call.json();
        const Date = Object.keys(api_res.response.schedule);
        const List = Object.values(api_res.response.schedule);
        //console.log(api_res.response.schedule);
        //this.setState({ activeChannel: api_res.response, activeSchedules: api_res.response.schedule });
        setActiveChannel(api_res.response);
        setActiveSchedules(api_res.response.schedule);
        setScheduleDate(Date);
        setScheduleList(List);
    }, []);

    console.log(scheduleList);

    const channel = activeChannel;
    const schedules = activeSchedule;

    //console.log(schedules);

    return (

        <div className="channel">
            <div className="channel__header">
                <img className="channel__img" src={channel['imageUrl']} alt={channel["title"]} />
                <div className="channel__rightSection">
                    <p className="channelCard__number">{channel["stbNumber"]}</p>
                    <p className="channelCard__title">{channel["title"]}</p>
                </div>
            </div>
            <p className="channel__description">{channel["description"]}</p>
            <div className="channel_detail">
                {
                    scheduleDate.map((keyName, index) => {
                        let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                        const timeStamp = Date.parse(keyName);
                        let dateObject = new Date(keyName);
                        const days = daysOfWeek[dateObject.getDay()];

                        return (
                            <div key={keyName + index}>
                                <div
                                    className="channel_date"
                                    style={{ color: activeTab == index ? "red" : "blue" }}
                                    onClick={() => setActiveTab(index)}
                                >{days}</div>
                            </div>
                        )

                    })
                }

            </div>
            <div>{scheduleList[activeTab]?.map((object, i) => {
                console.log("i k", object);
                return (
                    <div className="channel_scheduleList" key={object.title + i}> 
                        <div className="channel_time">{object.datetime}</div>
                        <div>{object.title}</div>
                        
                    </div>  
                )
            })}</div>
        </div>
    );

}

export default ChannelDetail;