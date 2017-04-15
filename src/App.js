import React, { Component } from 'react';
import MailChimp from './MailChimp'
import './App.css';

class App extends Component {
  render() {
    return (
      <section className="App">
        <div className="App-Container">
          <div className="info">
            <h1>MinMaxFit</h1>
            <p>Launching soon, MinMaxFit brings a new edge to your love of the game. With smart technology and tailored athletic systems, the way you train will never be the same.</p>
            <p>Subscribe below with email and follow us on your favorite social media account to follow our progress and community updates.</p>
            <div className="emailContainer">
              <MailChimp />
            </div>
          </div>
          <nav className="sociallinks">
            <a href="https://twitter.com/minmaxfit">twitter</a>
            <a href="https://www.facebook.com/minmaxfit/">facebook</a>
            <a href="https://www.instagram.com/minmaxfit/">instagram</a>
          </nav>
        </div>
      </section>
    );
  }
}

export default App;
