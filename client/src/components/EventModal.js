import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addEvent } from '../actions/eventActions';
import DateTimePicker from 'react-datetime-picker';
import PropTypes from 'prop-types';

class EventModal extends Component {
  state = {
    modal: false,
    name: '',
    date: new Date(),
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onDateChange = date => {
    this.setState({ date });
  }

  onSubmit = e => {
    e.preventDefault();

    const newEvent = {
      name: this.state.name,
      date: this.state.date
    };

    // Add event via addEvent action
    this.props.addEvent(newEvent);

    // Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color='dark'
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >
          Lisää tapahtuma
          </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Lisää tapahtuma</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='name'>Tapahtuman nimi</Label>
                <Input
                  type='text'
                  name='name'
                  id='name'
                  onChange={this.onChange}
                />
                <Label for='date'>Milloin tapahtuma on?</Label>
                <DateTimePicker
                  id='date'
                  name='date'
                  onChange={this.onDateChange}
                  value={this.state.date}
                />
                <Button color='dark' style={{ marginTop: '2rem' }} block>
                  Lisää tapahtuma
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  event: state.event,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { addEvent }
)(EventModal);
