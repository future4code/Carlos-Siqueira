
import Appp from './Appp';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Movie from './Movie';





function App() {

  return (<Router>
    <Switch>
      <Route path='/home'>
        <Appp />
      </Route>
      <Route path='/movie/:id' component={Movie}/>
        

    </Switch>

  </Router>
  );
}

export default App;
