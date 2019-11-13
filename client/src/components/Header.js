import React, { Component } from 'react';
import {Jumbotron, Container} from 'reactstrap';
import CounterToWappu from './CounterToWappu';

class Header extends Component {
    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <Container>
                        <h1>TURUN TEEKKARIWAPPU</h1>
                        <CounterToWappu />
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Header;
