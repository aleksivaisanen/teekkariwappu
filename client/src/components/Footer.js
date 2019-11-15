import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SkewedContainer from 'sc-react';
import digit from '../images/digit_boston.png';
import nucleus from '../images/nucleus2.png';
import fb from '../images/fb_logo.png';
import ig from '../images/ig_logo.png';
import www from '../images/www_logo.png';

class Footer extends Component {
    render() {
        return (
            <SkewedContainer className="footer-skewed-container" top="left" bgColor="#f4943f">
                <Container fluid className="mt-5">
                    <Row>
                        <Col md={6} className="d-flex flex-row justify-content-center align-items-end">
                            <img className="guild-logo" src={digit} alt="Digit ry"/>
                            <a href="https://fi-fi.facebook.com/digitry/"><img className="social-media" src={fb} alt="Digit ry Facebook" /></a>
                            <a href="https://www.instagram.com/digitteekkari"><img className="social-media" src={ig} alt="Digit ry Instagram" /></a>
                            <a href="https://digit.fi"><img className="social-media" src={www} alt="digit.fi" /></a>
                        </Col>
                        <Col md={6} className="d-flex flex-row justify-content-center align-items-end">
                            <img className="guild-logo" src={nucleus} alt="Nucleus ry"/>
                            <a href="https://fi-fi.facebook.com/Nucleusry/"><img className="social-media" src={fb} alt="Nucleus ry Facebook" /></a>
                            <a href="https://www.instagram.com/nucleus_ry/?hl=fi"><img className="social-media" src={ig} alt="Nucleus ry Instagram" /></a>
                            <a href="https://www.nucleus.fi"> <img className="social-media" src={www} alt="nucleus.fi" /></a>
                        </Col>
                    </Row>
                </Container>
            </SkewedContainer>
        );
    }
}

export default Footer;
