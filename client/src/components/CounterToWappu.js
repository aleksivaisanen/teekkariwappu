import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../actions/eventActions';
import Countdown from 'react-countdown-now';
import { Row, Col } from 'reactstrap';


// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return null
    } else {
        // Render a countdown

        const formattedDays = () => {
            if (days > 9) {
                return days
            } else {
                return ("0" + days).slice(-2)
            }
        }

        return (
            <div >
                <h3 className="text-center coming-soon">
                    Tulossa pian
			</h3>

                <Row className="justify-content-center align-items-center">
                    <Col sm={3} className="mb-2 wappu-counter-item">
                        <span className="counter-number text-left">{formattedDays()}</span>
                        <span className="counter-text">Päivää</span>
                    </Col>

                    <Col sm={3} className="mb-2 wappu-counter-item">
                        <span className="counter-number text-left">{("0" + hours).slice(-2)}</span>
                        <span className="counter-text">Tuntia</span>
                    </Col>

                    <Col sm={3} className="mb-2 wappu-counter-item">
                        <span className="counter-number text-left">{("0" + minutes).slice(-2)}</span>
                        <span className="counter-text">Minuuttia</span>
                    </Col>

                    <Col sm={3} className="mb-2 wappu-counter-item">
                        <span className="counter-number text-left">{("0" + seconds).slice(-2)}</span>
                        <span className="counter-text">Sekuntia</span>
                    </Col>
                </Row>
            </div>
        )
    }
};

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
        if (prevProps.events.length === 0 && this.props.events.length > 0) {
            this.setState({ firstEventDate: new Date(this.props.events[0].date) })
        }
    }

    render() {
        return (
            <div className="countdown-container mb-3 mt-3">
                <Countdown
                    date={this.state.firstEventDate}
                    renderer={renderer}
                />
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
