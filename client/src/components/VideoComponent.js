import React, { Component } from 'react';
import SkewedContainer from 'sc-react';
import { Container } from 'reactstrap';

class VideoComponent extends Component {
    render() {
        return (
            <SkewedContainer className="video-component-container py-5" top="right" bottom="left" bgColor="#FED22A" >
                <Container>
                    <div className="wappuvideo-container">
                        <iframe src="https://www.youtube.com/embed/UNLPQWieA2k"
                            title="Wappuvideo"
                            className="wappuvideo"
                            frameBorder="0"
                            allowFullScreen
                            >
                        </iframe>
                    </div>
                </Container>
            </SkewedContainer>
        );
    }
}

export default VideoComponent;
