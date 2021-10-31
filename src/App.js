import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderNavbar from './components/HeaderNavbar/HeaderNavbar';
import Home from './Pages/Home/Home';
import Footer from './components/Footer/Footer';
import AddService from './Pages/AddService/AddService';
import Order from './components/Order/Order';
import Login from './Pages/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import MyOrders from './Pages/MyOrders/MyOrders';
import ManageOrders from './Pages/ManageOrders/ManageOrders';

function App() {
  return (
    <AuthProvider>
      <Router>
        <HeaderNavbar></HeaderNavbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/addPackage">
            <AddService></AddService>
          </Route>
          <PrivateRoute path="/order/:id">
            <Order></Order>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/myOrder">
            <MyOrders></MyOrders>
          </Route>
          <Route path="/manageOrders">
            <ManageOrders></ManageOrders>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
