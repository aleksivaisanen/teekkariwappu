import React, { Component } from 'react';
import { Container } from 'reactstrap';
import SkewedContainer from 'sc-react';

class VideoComponent extends Component {
    render() {
        return (
            <SkewedContainer className="video-component-container py-5" top="right" bgColor="#d4af37" >
                <div className="wappuvideo-container">
                    <iframe src="https://www.youtube.com/embed/RJ9E6zQFzCM"  
                        title="Wappuvideo"
                        className="wappuvideo"
                        frameBorder="0"
                        allowFullScreen>    
                    </iframe>
                </div>
            </SkewedContainer>
        );
    }
}

export default VideoComponent;
