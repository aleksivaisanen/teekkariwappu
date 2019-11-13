import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../actions/eventActions';
import Countdown from 'react-countdown-now'

class CounterToWappu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstEventDate: new Date(),
        };
    }

    componentDidMount() {
        this.props.getEvents();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.events.length === 0 && this.props.events.length > 0) {
            this.setState({firstEventDate: new Date(this.props.events[0].date)})
        }
    }

    render() {
        console.log(this.props.events)
        console.log(this.state.firstEventDate)
        return (
            <div className="countdown-container">
                {this.state.firstEventDate - new Date() > 0 && 
                    <Countdown
                        date={this.state.firstEventDate}
                    />
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    events: state.event.events,
});

export default connect(
    mapStateToProps,
    { getEvents }
)(CounterToWappu);
