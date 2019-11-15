import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SkewedContainer from 'sc-react';

class Footer extends Component {
    render() {
        return (
            <SkewedContainer className="footer-skewed-container" top="left" bgColor="#3480c4">
                <Container className="mt-5">
                    <Row>
                        <Col sm={6}>
                            Digit somet
                        </Col>
                        <Col sm={6}>
                            Nucleus somet
                        </Col>
                    </Row>
                </Container>
            </SkewedContainer>
        );
    }
}

export default Footer;
