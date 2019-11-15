import React, { Component } from 'react';
import EventList from './EventList';
import Header from './Header';
import VideoComponent from './VideoComponent';
import Footer from './Footer';

class MainView extends Component {
    render() {
        return (
            <div>
                <Header/>
                <VideoComponent />
                <EventList />
                <Footer />
            </div>
        );
    }
}

export default MainView;
