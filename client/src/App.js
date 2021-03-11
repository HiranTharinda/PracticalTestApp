
import React, { Component } from 'react'
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/pages/homePage'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <HomePage />
        </div>
      </Provider>
    );
  }
}

export default App;
