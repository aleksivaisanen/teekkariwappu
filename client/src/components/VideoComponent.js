import React, { Component } from "react";
import { Container } from "reactstrap";

class VideoComponent extends Component {
  render() {
    return (
      <div className="video-component-container py-5">
        <Container>
          <div className="wappuvideo-container">
            <iframe
              src="https://www.youtube.com/embed/UNLPQWieA2k"
              title="Wappuvideo"
              className="wappuvideo"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </Container>
      </div>
    );
  }
}

export default VideoComponent;
