import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import ChannelDetail from './ChannelDetail';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/channel/:i"component={ChannelDetail} />
        </Switch>
    </BrowserRouter>
);

export default Router;