import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import React from "react";
import Home from './Home';

function App() {
  return (<Router>

    <Switch>
<Route path={'/'}>
  <Home></Home>
</Route>

    </Switch>
  </Router>
  );
}

export default App;
