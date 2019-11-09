import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

class Login extends Component {
  state = {
    modal: false,
    email: '',
    password: '',
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === 'LOGIN_FAIL') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    // If authenticated, close modal
    if (this.state.modal) {
      if (isAuthenticated) {
        this.toggle();
      }
    }
  }

  toggle = () => {
    // Clear errors
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    // clear errors
    this.props.clearErrors();

    const { username, password } = this.state;

    const user = {
      username,
      password
    };

    // Attempt to login
    this.props.login(user);
  };

  render() {
    let alert;
    if (this.state.msg != null) {
      alert = <Alert color="danger">{this.state.msg}</Alert>
    } else {
      alert = null;
    }

    return (
      <Container>
        <Row>
          <Col md={{ size: 4, offset: 4 }}>
            {alert}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='username'>Käyttäjänimi</Label>
                <Input
                  type='text'
                  name='username'
                  id='username'
                  placeholder='Käyttäjänimi'
                  className='input-sm'
                  onChange={this.onChange}
                />

                <Label for='password'>Salasana</Label>
                <Input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Salasana'
                  className='input-sm'
                  onChange={this.onChange}
                />
                <Button color='dark' style={{ marginTop: '2rem' }} block>
                  Kirjaudu sisään
                </Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(
  mapStateToProps,
  { login, clearErrors }
)(Login);
