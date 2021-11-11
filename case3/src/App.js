import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


import React from "react";
import Home from './Home';
import Bike from './Bike';

function App() {
  return (<Router>

    <Switch>
<Route path={'/home'}>
  <Home></Home>
</Route>

<Route path={'/bike/:id'}>
  <Bike></Bike>
</Route>
<Route path={'/'} > 
<Redirect to={'/home'}></Redirect>
</Route>
    </Switch>
  </Router>
  );
}

export default App;
