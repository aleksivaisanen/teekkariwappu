import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/EventModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/admin">
              <div className='App'>
                <AppNavbar />
                <Container>
                  <ItemModal />
                  <ShoppingList />
                </Container>
              </div>
            </Route>
            <Route path="/">
              <div>
                under construction
              </div>
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
