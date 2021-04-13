import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import CounterToWappu from './CounterToWappu';

class Header extends Component {
  render() {
    return (
      <div className="header-class">
        <Jumbotron fluid>
          <Container>
            <div>
              <h1 className="heading text-center">TURUN TEEKKARIWAPPU</h1>
              <CounterToWappu />
              <p className="text-center smaller-font">
                <i>#turunwappu</i>
              </p>
              <p className="text-center medium-font">
                Wappufiilistä luomassa<br />
                <b>
                  <a href="https://digit.fi">Digit</a>
                </b>,
                                  <b>
                  <a href="https://www.nucleus.fi"> Nucleus</a>
                </b>,
                                    <b>
                  <a href="https://www.facebook.com/MateriaalitekniikankiltaAdamasry"> Adamas </a>
                </b>&
                                    <b>
                  <a href="https://www.facebook.com/KonetekniikkaMachinary/"> Machina</a>
                </b>
                <br />
                <span className="menossa-mukana">
                  <p>
                    Menossa mukana myös <br />
                    <b><a href="http://teekkarikomissio.utu.fi/fi/index.html">Teekkarikomissio</a></b> & <b><a href="https://www.asteriski.fi">Asteriski</a></b>
                  </p>
                </span>
              </p>
            </div>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Header;
