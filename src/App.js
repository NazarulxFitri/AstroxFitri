import './App.css';
import Axios from 'axios';
import { useState } from 'react';
import ChannelCard from './ChannelCard';

function App() {
  const [searchTitle, setSearchTitle] = useState('');
  const [channels, setChannels] = useState([]);

  var url = 'https://contenthub-api.eco.astro.com.my/channel/all.json';

  async function getChannels() {
    var result = await Axios.get(url);
    setChannels(result.data.response);
  }

  getChannels();

  return (
    <div className="app">
      <div className="app__header">
        <h1 className="app__title">Channel List</h1>
        <div className="app__form">
          <input type="text" className="app__inputTitle" placeholder="Search Title" onChange={(e) => setSearchTitle(e.target.value)} />
        </div>
      </div>

      <div className="app__channels">
        {channels.filter((channel) => {
          if (searchTitle == "") {
            return channel
          } else if (channel["title"].toLowerCase().includes(searchTitle.toLowerCase())) {
            return channel
          }
        }).map(channel => {
          return <ChannelCard channel={channel} />;
        })}
      </div>
    </div>
  );
}

export default App;
