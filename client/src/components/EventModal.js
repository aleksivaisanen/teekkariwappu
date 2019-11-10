import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import { addEvent } from '../actions/eventActions';
import DateTimePicker from 'react-datetime-picker';
import PropTypes from 'prop-types';
import { clearErrors } from '../actions/errorActions';

class EventModal extends Component {
  state = {
    modal: false,
    name: '',
    date: new Date(),
    place: '',
    enrolLink: '',
    description: '',
    errorMsg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error != null) {
        this.setState({ errorMsg: error.msg.msg });
      } else {
        this.setState({ errorMsg: null });
      }
    }
  }

  toggle = () => {
    if (this.state.modal) {
      const conf = window.confirm('Haluatko poistua tallentamatta tapahtuman tietoja?');
      if (conf) {
        this.setState({
          modal: !this.state.modal
        });
      }
    } else {
      this.setState({
        modal: !this.state.modal
      });
    }
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
      date: this.state.date,
      place: this.state.place,
      enrolLink: this.state.enrolLink,
      description: this.state.description
    };

    // clear errors
    this.props.clearErrors();

    // Add event via addEvent action
    this.props.addEvent(newEvent);

    // Close modal
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    let alert;
    const { status } = this.props.event;
    if (status === 200) {
      alert = <Alert color="success">Tapahtuma lisättiin onnistuneesti!</Alert>
    } else if (this.state.errorMsg != null) {
      alert = <Alert color="danger">{this.state.errorMsg}</Alert>
    } else {
      alert = null;
    }

    return (
      <div>
        {alert}
        <Button
          color='dark'
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >
          Lisää tapahtuma
          </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} backdrop="static">
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
                <Label for='place'>Tapahtuman paikka</Label>
                <Input
                  type='text'
                  name='place'
                  id='place'
                  onChange={this.onChange}
                />
                <Label for='enrolLink'>Ilmoittautumislinkki (Kirjoita linkki kokonaisuudessaan, https:// mukaan luettuna!)</Label>
                <Input
                  type='text'
                  name='enrolLink'
                  id='enrolLink'
                  onChange={this.onChange}
                />
                <Label for='description'>Tapahtuman kuvaus</Label>
                <Input
                  type='textarea'
                  name='description'
                  id='description'
                  onChange={this.onChange}
                  rows={4}
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
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(
  mapStateToProps,
  { addEvent, clearErrors }
)(EventModal);
