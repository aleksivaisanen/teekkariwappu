import React, { Component } from 'react';
import EventModal from './EventModal'
import EventList from './EventList'

class AdminEventView extends Component {

    render() {
        return (
            <div>
                <EventModal
                    buttonText="Lisää tapahtuma"
                    heading="Lisää tapahtuma"
                 />
                <EventList />
            </div>
        );
    }
}


export default AdminEventView;
