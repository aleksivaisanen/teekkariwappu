import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import digit from '../images/digit_boston.png';
import nucleus from '../images/nucleus2.png';
import fb from '../images/fb_logo.png';
import ig from '../images/ig_logo.png';
import www from '../images/www_logo.png';

class Footer extends Component {
    render() {
        return (
            <Container fluid className="footer-container py-5">
                <Container>
                    <Row>
                        <Col md={6} className="d-flex flex-row justify-content-center align-items-end">
                            <img className="guild-logo" src={digit} alt="Digit ry"/>
                            <div className="d-flex flex-column justify-content-left">
                                <div className="d-flex flex-row justify-content-left align-items-center">
                                    <a href="https://fi-fi.facebook.com/digitry/" className="social-media-link">
                                        <img className="social-media" src={fb} alt="Digit ry Facebook" /> @digitry    
                                    </a>
                                </div>
                                <div className="d-flex flex-row justify-content-left align-items-center">
                                    <a href="https://www.instagram.com/digitteekkari" className="social-media-link">
                                        <img className="social-media" src={ig} alt="Digit ry Instagram" /> @digitteekkari
                                    </a>
                                </div>
                                <div className="d-flex flex-row justify-content-left align-items-center">
                                    <a href="https://digit.fi" className="social-media-link">
                                        <img className="social-media" src={www} alt="digit.fi" /> digit.fi
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className="d-flex flex-row justify-content-center align-items-end">
                            <img className="guild-logo" src={nucleus} alt="Nucleus ry"/>
                            <div className="d-flex flex-column justify-content-left">
                                <div className="d-flex flex-row justify-content-left align-items-center">
                                    <a href="https://fi-fi.facebook.com/Nucleusry/" className="social-media-link">
                                        <img className="social-media" src={fb} alt="Nucleus ry Facebook" /> @Nucleusry
                                    </a>
                                </div>
                                <div className="d-flex flex-row justify-content-left align-items-center">
                                    <a href="https://www.instagram.com/nucleus_ry/?hl=fi" className="social-media-link">
                                        <img className="social-media" src={ig} alt="Nucleus ry Instagram" /> @nucleus_ry
                                    </a>
                                </div>
                                <div className="d-flex flex-row justify-content-left align-items-center">
                                    <a href="https://www.nucleus.fi" className="social-media-link"> 
                                        <img className="social-media" src={www} alt="nucleus.fi" /> nucleus.fi
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default Footer;
