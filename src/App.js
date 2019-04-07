import React, { Component } from "react";

import "./App.css";
import BucketList from "./Components/BucketList";
import BucketForm from "./Components/BucketForm";


class App extends Component {
  constructor() {
    super();
    this.state = {
      bucket: [
        {
          dream: "Move to the PNW",
          id: 111,
          completed: false
        },
        {
          dream: "Mountain bike in Montana",
          id: 222,
          completed: false
        },
        {
          dream: "Hike the John Muir Trail",
          id: 333,
          completed: false
        },
        {
          dream: "Visit the Redwoods",
          id: 444,
          completed: false
        }
      ]
    };
  }

  addInput = (event, item) => {
    event.preventDefault();
    const newInput = {
      dream: item,
      id: Date.now(),
      completed: false 
    };
    this.setState({ 
      bucket: [newInput, ...this.state.bucket]
     });
  }


  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
      
        </header>
        <BucketForm addInput={this.addInput}/>
        <BucketList bucket={this.state.bucket}/> 
      </div>
    );
  }
}

export default App;
