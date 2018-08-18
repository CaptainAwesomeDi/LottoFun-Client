import React, { Component } from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import MainView from './pages/main.js'
import Navbar from './components/navbar'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' render={(props)=>( <MainView/>)}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
