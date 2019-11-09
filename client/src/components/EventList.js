import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../actions/eventActions';
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';

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

    toggle(e) {
        let event = e.target.dataset.event;
        this.setState({ collapse: this.state.collapse === Number(event) ? null : Number(event) });
    }

    render() {
        const { collapse } = this.state;
        const { events } = this.props;
        return (
            <div className="container">
                {events.map((event, index) => {
                    return (
                        <Card key={index}>
                            <CardHeader onClick={this.toggle} data-event={index}>{event.name}</CardHeader>
                            <Collapse isOpen={collapse === index}>
                                <CardBody>{event.description}</CardBody>
                            </Collapse>
                        </Card>
                    )
                })}

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
)(EventList);
