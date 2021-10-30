import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderNavbar from './components/HeaderNavbar/HeaderNavbar';
import Home from './Pages/Home/Home';
import Footer from './components/Footer/Footer';
import AddService from './Pages/AddService/AddService';
import Order from './components/Order/Order';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
      <Router>
        <HeaderNavbar></HeaderNavbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/addPackage">
            <AddService></AddService>
          </Route>
          <Route path="/order/:id">
            <Order></Order>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
