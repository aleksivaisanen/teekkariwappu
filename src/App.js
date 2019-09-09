import React from 'react';
import './App.css';
import Countdown from 'react-countdown-now'

function App() {
  return (
    <div className="App">
      <div className="background" />
      <div className="counterContainer">
        <h1>Turun Teekkariwappu!</h1>
        <p className="subheading">Coming soon...</p>
        <Countdown
          date={new Date('April 16, 2020 12:00:00')}
        />
      </div>
    </div>
  );
}

export default App;
