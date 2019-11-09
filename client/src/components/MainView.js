import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from './auth/Login'
import AdminEventView from './AdminEventView';

class MainView extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired
    };

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
    null
)(MainView);
