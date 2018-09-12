import React, { Component } from 'react';
import { Header } from './shared/Header';
import { RentalList } from './components/rental/RentalListings';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <div className='container'>
        <section id='rentalListing'>
          <h1 className='page-title'>Home Rentals</h1>
          <div className='row'>
          <RentalList />
          <RentalList />
          <RentalList />
          <RentalList />
          </div>
        </section>
      </div>

      </div>
    );
  }
}

export default App;
