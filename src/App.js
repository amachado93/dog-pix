import './App.css';

import React, { Component } from 'react';
import axios from 'axios';

import BreedList from './components/BreedList';

class App extends Component {
  constructor(){
    super();

    this.state = {
      dogs: []
    }
  }

  fetchDog = async () => {
    const response = await axios.get('https://dog.ceo/api/breeds/list/all');
    const dogs = Object.keys(response.data.message);
    /* if the key and the value are the same word...
     this...
     this.setState({ dogs: dogs }) 
     is the same ast this: */
    this.setState({ dogs })
  }

  fetchRandomDogPic = async (breed) => {
    const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
    this.setState({
      randomDogPic: response.data.message
    })
  }

  render(){
    
    return (
      <div className="App">

        <h1>Dog Pictures!</h1>
        { this.state.randomDogPic && <img src={this.state.randomDogPic} alt="cute dog" /> }
        <BreedList 
        dogs={this.state.dogs} 
        fetchDog={this.fetchDog} 
        fetchRandomDogPic={this.fetchRandomDogPic}
        />
      
      </div>
    );
  }
}

export default App;
