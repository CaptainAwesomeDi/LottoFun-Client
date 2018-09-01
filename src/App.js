import React, { Component } from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Main from './pages/Main'
import Lotto649 from './pages/lotto649'
import LottoMax from './pages/lottomax'
import Navbar from './components/navbar'
import Submit from './pages/Submit'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/lottomax' component={LottoMax}/>
            <Route path='/lotto649' component={Lotto649}/>
            <Route path='/submit' component={Submit}/>
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

const NoMatch = () => {
  return (<div>
      <h1>
        这个页面不存在，要么是有Bug了，要么就是按错了
      </h1>
    </div>)
}