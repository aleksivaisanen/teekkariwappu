import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../actions/eventActions';
import { Container } from 'reactstrap';
import EventListItem from './EventListItem';

class EventList extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: null,
        };
    }

    componentDidMount() {
        this.props.getEvents();
    }

    // helper function for travelling the DOM tree to find the correct parent
    getClosest(elem, selector) {
        for (; elem && elem !== document; elem = elem.parentNode) {
            if (elem.matches(selector)) return elem;
        }
        return null;
    };

    toggle(e) {
        let event;
        if (e.target.className === 'card-header') {
            event = e.target.dataset.event;
        } else {
            event = this.getClosest(e.target, '.card-header').dataset.event;
        }
        this.setState({ collapse: this.state.collapse === String(event) ? null : String(event) });
    }

    render() {
        const { collapse } = this.state;
        const { events } = this.props;
        events.sort((a, b) => new Date(a.date) - new Date(b.date))
        return (
            <Container>
                <h3 className="text-center">Tapahtumat</h3>
                {events.map((event) =>
                    <EventListItem
                        key={event._id.toString()}
                        event={event}
                        collapse={collapse}
                        toggle={this.toggle}
                    />
                )}
            </Container>
        );
    }
}


const mapStateToProps = state => ({
    events: state.event.events,
});

export default connect(
    mapStateToProps,
    { getEvents }
)(EventList);
