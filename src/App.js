import React, { Component } from "react";

import "./App.css";
import BucketList from "./Components/BucketList";


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


  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h1>This is my App.</h1>
        </header>
        <BucketList bucket={this.state.bucket}/> 
      </div>
    );
  }
}

export default App;
