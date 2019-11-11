import React, { Component } from 'react';
import {
    Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import { deleteEvent } from '../actions/eventActions';
import PropTypes from 'prop-types';

class DeleteEventButton extends Component {
    state = {
        modal: false,
        _id: null,
        name: '',
        date: new Date(),
        place: '',
        enrolLink: '',
        description: '',
        errorMsg: null,
    };

    static propTypes = {
        eventId: PropTypes.string
    };

    onSubmit = e => {
        e.preventDefault();
        const conf = window.confirm('Haluatko varmasti poistaa tapahtuman?');
        if (conf) {
            this.props.deleteEvent(this.props.eventId)
        }
    };

    render() {
        return (
            <div style={{ display: 'inline-block' }}>
                <Button
                    color='dark'
                    onClick={this.onSubmit}
                >
                    Poista tapahtuma
        </Button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    error: state.error,
});

export default connect(
    mapStateToProps,
    { deleteEvent }
)(DeleteEventButton);
