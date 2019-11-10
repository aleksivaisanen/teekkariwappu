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
import { addEvent, editEvent } from '../actions/eventActions';
import DateTimePicker from 'react-datetime-picker';
import PropTypes from 'prop-types';
import { clearErrors } from '../actions/errorActions';

class EventModal extends Component {
  state = {
    modal: false,
    _id: null,
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
    clearErrors: PropTypes.func.isRequired,
    buttonText: PropTypes.string,
    heading: PropTypes.string,
    currentEvent: PropTypes.object,
    alertEnabled: PropTypes.bool
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
    const { currentEvent } = this.props;
    if (this.state.modal) {
      const conf = window.confirm('Haluatko poistua tallentamatta tapahtuman tietoja?');
      if (conf) {
        this.setState({
          modal: !this.state.modal
        });
      }
    } else if (currentEvent) {
      this.setState({
        modal: !this.state.modal,
        _id: currentEvent._id,
        name: currentEvent.name,
        date: new Date(currentEvent.date),
        place: currentEvent.place,
        enrolLink: currentEvent.enrolLink,
        description: currentEvent.description
      });
    }
    else {
      this.setState({ modal: !this.state.modal })
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
      description: this.state.description,
    };

    // clear errors
    this.props.clearErrors();

    // if id is given, update the current event
    if(this.state._id !== null) {
      newEvent._id = this.state._id
      this.props.editEvent(newEvent)
    } else {
      // else add a new event via addEvent action
      this.props.addEvent(newEvent);
    }
    
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
        {this.props.alertEnabled !== false && alert}
        <Button
          color='dark'
          onClick={this.toggle}
        >
          {this.props.buttonText}
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} backdrop="static">
          <ModalHeader toggle={this.toggle}>{this.props.heading}</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='name'>Tapahtuman nimi</Label>
                <Input
                  type='text'
                  name='name'
                  id='name'
                  onChange={this.onChange}
                  value={this.state.name}
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
                  value={this.state.place}
                />
                <Label for='enrolLink'>Ilmoittautumislinkki (Kirjoita linkki kokonaisuudessaan, https:// mukaan luettuna!)</Label>
                <Input
                  type='text'
                  name='enrolLink'
                  id='enrolLink'
                  onChange={this.onChange}
                  value={this.state.enrolLink}
                />
                <Label for='description'>Tapahtuman kuvaus</Label>
                <Input
                  type='textarea'
                  name='description'
                  id='description'
                  onChange={this.onChange}
                  value={this.state.description}
                  rows={4}
                />
                <Button color='dark' style={{ marginTop: '2rem' }} block>
                  Tallenna
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
  { addEvent, editEvent, clearErrors }
)(EventModal);
