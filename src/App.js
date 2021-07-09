import React, { Component } from 'react';
import Form from './components/Form';
import Forms from './components/Forms';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
         <Form />
         <Forms />
      </div>
    );
  }
  
}

export default App;
