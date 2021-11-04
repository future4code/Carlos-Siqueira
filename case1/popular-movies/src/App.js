
import Appp from './Appp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Movie from './Movie';





function App() {

  return (<Router>
    <Switch>
      <Route path='/home'>
        <Appp />
      </Route>
      <Route path='/movie/:id' component={Movie}/>
        <Route path='/' render={()=>{
          return(
            <Redirect to='/home'/>
          )
        }} ></Route>

    </Switch>

  </Router>
  );
}

export default App;
