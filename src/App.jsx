import React from 'react';
import axios from 'axios';
import video from './assets/Storm Live Wallpaper.mp4';

class App extends React.Component {
  state = {
    advice: ''
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice: advice });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { advice } = this.state;

    return (
      <div className="app">
        <video autoPlay loop muted>
          <source src={video} type='video/mp4' />
        </video>
        <div className="content">
          <h1 className="title">Your Daily Dose of Advice</h1>
          <div className="card">
            <h2>{advice}</h2>
            <button onClick={this.fetchAdvice}>Get New Advice</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
