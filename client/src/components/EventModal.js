import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";
import { connect } from "react-redux";
import { addEvent, editEvent } from "../actions/eventActions";
import PropTypes from "prop-types";
import { clearErrors } from "../actions/errorActions";

class EventModal extends Component {
  state = {
    modal: false,
    _id: null,
    name: "",
    date: new Date(),
    place: "",
    enrolLink: "",
    description: "",
    errorMsg: null,
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired,
    currentEvent: PropTypes.object,
    alertEnabled: PropTypes.bool,
    type: PropTypes.string,
    containerClass: PropTypes.string,
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
      const conf = window.confirm(
        "Haluatko poistua tallentamatta tapahtuman tietoja?"
      );
      if (conf) {
        this.setState({
          modal: !this.state.modal,
        });
      }
    } else if (currentEvent && this.props.type !== "add") {
      this.setState({
        modal: !this.state.modal,
        _id: currentEvent._id,
        name: currentEvent.name,
        date: new Date(currentEvent.date),
        place: currentEvent.place,
        enrolLink: currentEvent.enrolLink,
        description: currentEvent.description,
      });
    } else {
      this.setState({ modal: !this.state.modal });
    }
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onDateChange = (date) => {
    this.setState({ date: new Date(date).toISOString() });
  };

  onSubmit = (e) => {
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
    if (this.state._id !== null) {
      newEvent._id = this.state._id;
      this.props.editEvent(newEvent);
    } else {
      // else add a new event via addEvent action
      this.props.addEvent(newEvent);
    }

    // Close modal
    this.setState({
      modal: !this.state.modal,
    });
  };

  constructDate = (date) => {
    return (
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      date.getDate().toString().padStart(2, "0") +
      "T" +
      date.getHours().toString().padStart(2, "0") +
      ":" +
      date.getMinutes().toString().padStart(2, "0")
    );
  };

  render() {
    let buttonText;
    let headingText;
    if (this.props.type === "edit") {
      buttonText = "Muokkaa tapahtumaa";
      headingText = "Muokkaa tapahtumaa";
    } else if (this.props.type === "add") {
      buttonText = "Lisää tapahtuma";
      headingText = "Lisää tapahtuma";
    }

    let alert;
    const { status, msg } = this.props.event;
    if (status === 200) {
      alert = <Alert color="success">{msg}</Alert>;
    } else if (this.state.errorMsg != null) {
      alert = <Alert color="danger">{this.state.errorMsg}</Alert>;
    } else {
      alert = null;
    }

    return (
      <div className={this.props.containerClass}>
        {this.props.alertEnabled !== false && alert}
        <Button color="dark" onClick={this.toggle}>
          {buttonText}
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} backdrop="static">
          <ModalHeader toggle={this.toggle}>{headingText}</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="name">Tapahtuman nimi</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onChange}
                  value={this.state.name}
                />
                <Label for="date">Milloin tapahtuma on?</Label>
                <Input
                  type="datetime-local"
                  id="date"
                  name="date"
                  value={this.constructDate(new Date(this.state.date))}
                  onChange={(e) => this.onDateChange(e.target.value)}
                />
                <Label for="place">Tapahtuman paikka</Label>
                <Input
                  type="text"
                  name="place"
                  id="place"
                  onChange={this.onChange}
                  value={this.state.place}
                />
                <Label for="enrolLink">
                  Ilmoittautumislinkki (Kirjoita linkki kokonaisuudessaan,
                  https:// mukaan luettuna!)
                </Label>
                <Input
                  type="text"
                  name="enrolLink"
                  id="enrolLink"
                  onChange={this.onChange}
                  value={this.state.enrolLink}
                />
                <Label for="description">Tapahtuman kuvaus</Label>
                <Input
                  type="textarea"
                  name="description"
                  id="description"
                  onChange={this.onChange}
                  value={this.state.description}
                  rows={4}
                />
                <Button color="dark" style={{ marginTop: "2rem" }} block>
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

const mapStateToProps = (state) => ({
  event: state.event,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { addEvent, editEvent, clearErrors })(
  EventModal
);
