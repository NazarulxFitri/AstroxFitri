/*
Using React JS framework. Here , author fetch api data , prepare search function and
define it as a landing page. useEffect , useState from react are imported and used in this file
*/
import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import ChannelCard from './ChannelCard';

function App() {
  //Use useState , 'searchTitle' & 'setSearchTitle' responsible to handle the input query from user to do search function
  //Use useState , 'channels' & 'setChannelsTitle' responsible to handle data that we get from fetch API
  const [searchTitle, setSearchTitle] = useState('');
  const [channels, setChannels] = useState([]);

  var url = 'https://contenthub-api.eco.astro.com.my/channel/all.json';

  //Use Axios, to fetch API data from variable 'url'
  async function getChannels() {
    var result = await Axios.get(url);
    setChannels(result.data.response);
  }

  useEffect(() => {
    getChannels();
  });

  return (
    <div className="app">
      <div className="app_header">
        <h1 className="app_title">Channel List</h1>
        <div className="app_form">
          <input type="text" className="app_inputTitle" placeholder="Search Title" onChange={(e) => setSearchTitle(e.target.value)} />
        </div>
      </div>

      <div className="app_channels">
        {/*Prepare logics to manipulate data that will be displayed - this is build to cater with search function*/}
        {channels.filter((channel) => {
          if (searchTitle === "") {
            return channel
          } else if (channel["title"].toLowerCase().includes(searchTitle.toLowerCase())) {
            return channel
          }
          return false;
        }).map(channel => {
          return <ChannelCard key={channel["title"] + 'card'} channel={channel} />;
        })}
      </div>
    </div>
  );
}

export default App;
