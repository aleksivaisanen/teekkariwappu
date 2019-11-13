import React, { Component } from 'react';
import {Jumbotron, Container} from 'reactstrap';
import CounterToWappu from './CounterToWappu';

class Header extends Component {
    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <Container>
                        <h1 className="text-center">TURUN TEEKKARIWAPPU</h1>
                        <CounterToWappu />
                        <p className="text-center">
                            #turunwappu
                        </p>
                        <p className="text-center">
                            <b><a href="https://digit.fi">Digit</a></b> & <b><a href="https://www.nucleus.fi">Nucleus</a></b>
                        </p>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Header;
