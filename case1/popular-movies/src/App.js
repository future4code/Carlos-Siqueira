import styled from 'styled-components';
import axios from 'axios'
import { useEffect, useState } from 'react';
import next from './next.png'
import back from './back.png'
import Appp from './Appp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





function App() {

  return (<Router>
    <Switch>
      <Route path='/home'>
        <Appp />
      </Route>

    </Switch>

  </Router>
  );
}

export default App;
