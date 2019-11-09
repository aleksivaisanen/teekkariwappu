import React, { Component, Fragment } from 'react';
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  Container
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Logout from './auth/Logout';

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const isAuthenticated = this.props.auth.isAuthenticated && localStorage.getItem("token") != null;

    const authLinks = (
      <Fragment>
        <NavItem>
          <Logout />
        </NavItem>
      </Fragment>
    );

    return (
      <div>
        <Navbar color='dark' dark expand='sm' className='mb-5'>
          <Container>
            <NavbarBrand href='/'>teekkariwappu.fi</NavbarBrand>
            <Nav className='ml-auto' navbar>
              {isAuthenticated ? authLinks : null}
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(AppNavbar);
