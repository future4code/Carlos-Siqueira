import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './Home';

function App() {
  return (
    <Router>
<Switch>

  <Route path='/' component={Home} ></Route>
</Switch>

    </Router>
  );
}

export default App;
