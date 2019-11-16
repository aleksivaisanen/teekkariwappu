import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import AdminMainView from './components/AdminMainView'
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainView from './components/MainView';

class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/admin">
              <div className='App'>
                <AppNavbar />
                <Container>
                  <AdminMainView />
                </Container>
              </div>
            </Route>
            <Route path="/">
              <MainView/>
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;