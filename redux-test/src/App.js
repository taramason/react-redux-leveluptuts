import React, { Component } from 'react';
import { createStore } from 'redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

const defaultState = {
  welcome: 'Hi',
  otherState: 'some stuff',
  someOtherState: 'some other stuff'

}

const greeting = (state = defaultState, action) => {
  switch(action.type) {
    case 'GREET_NAME':
      return { ...state, welcome: `Hello ${action.name}` } ;
    case 'GREET_WORLD':
      return { ...state, welcome:'Hello World' };
    default:
      return state;
  }
};

const store = createStore(greeting); //must have a store defined

console.log (store.getState()); //using default state name as stated in greeting

const name = 'Taraaarra';

store.dispatch ({ //telling the store what to spit out (will use something else later)
  type: 'GREET_NAME',
  name //using name assigned above
})

console.log (store.getState());


store.dispatch ({
  type: 'GREET_NAME',
  name: 'Cortni' //assigning the name //often called data or payload
})

console.log (store.getState());

