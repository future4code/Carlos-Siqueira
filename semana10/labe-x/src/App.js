import{ BrowserRouter, Route, Switch} from 'react-router-dom'
import  HomePage  from "./pages/HomePage";
import  ApplicationFormPage  from "./pages/ApplicationFormPage";
import  CreateTripPage  from "./pages/CreateTripPage";
import  AdminHome  from "./pages/AdminHomePage";
import  ListTripsPage  from "./pages/ListTripsPage";
import  LoginPage  from "./pages/LoginPage";
import  TripDetails  from "./pages/TripDetailsPage";


function App() {
  return (
    <BrowserRouter>
      <Switch>
    <Route path='/' exact component={HomePage}/>
    <Route path='/app' exact component={ApplicationFormPage}/>
    <Route path='/new' exact component={CreateTripPage}/>
    <Route path='/admin' exact component={AdminHome}/>
    <Route path='/trips' component={ListTripsPage}/>
     <Route path='/login' exact component={LoginPage}/>
    <Route path='trips/:id' component={TripDetails}/>

    </Switch>
    </BrowserRouter>
  );
}

export default App;
