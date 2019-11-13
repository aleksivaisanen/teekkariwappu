import React, { Component } from 'react';
import EventList from './EventList';
import Header from './Header';

class MainView extends Component {
    render() {
        return (
            <div>
                <Header/>
                <EventList />
            </div>
        );
    }
}

export default MainView;
