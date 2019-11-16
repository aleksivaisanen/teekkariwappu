import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from './auth/Login'
import AdminEventView from './AdminEventView';
import { loadUser } from '../actions/authActions'

class AdminMainView extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.loadUser();
    }

    render() {
        const isAuthenticated = this.props.auth.isAuthenticated && localStorage.getItem('token') != null;
        let mainView;
        if (isAuthenticated) {
            mainView = <AdminEventView />
        } else {
            mainView = <Login />
        }

        return (
            <div>
                {mainView}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { loadUser }
)(AdminMainView);
