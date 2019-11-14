import React, { Component } from 'react';
import EventList from './EventList';
import Header from './Header';
import VideoComponent from './VideoComponent';

class MainView extends Component {
    render() {
        return (
            <div>
                <Header/>
                <VideoComponent />
                <EventList />
            </div>
        );
    }
}

export default MainView;
