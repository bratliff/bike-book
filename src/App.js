import React, { Component } from 'react';
import BookBike from './BookBike';
import './App.css';

class App extends Component {
  render() {
    return (
     <div className="container">
      <div className="App">
      	<h1>Bike Rental</h1>
        <BookBike />
      </div>
      </div>
    );
  }
}

export default App;
