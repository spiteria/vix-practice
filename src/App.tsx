import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {SearchComponent} from './components/SearchComponent/SearchComponent'


const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='ticker-search' component={SearchComponent}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
