import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventList from './EventList';

class MainView extends Component {
    render() {
        return (
            <div>
                <EventList />
            </div>
        );
    }
}

export default MainView;
