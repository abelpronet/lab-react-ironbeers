import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="App">
    	<article className="menu-item">
          <img src="https://fotostrasse.com/wp-content/uploads/2019/02/Lager-Lager_Our-Favorite-Craft-Beer-Bar-in-Kreuzkolln_02.jpg" alt='beers'></img>
          <h2>All Beers</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
       </article>


      <article className="menu-item">
          <img src="https://assets3.thrillist.com/v1/image/1680956/size/tmg-article_default_mobile.jpg" alt='beers'></img>
          <h2>Random Beer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </article>


      <article className="menu-item">
            <img src="https://www.beyondbeer.de/media/image/30/b3/a0/paket_geschenkpaket_einsteiger_600x600.jpg" alt='beers'></img>
            <h2>New Beer</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            
      </article>
      </main>
    );
  }
}

export default App;
