import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderNavbar from './components/HeaderNavbar/HeaderNavbar';
import Home from './Pages/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <HeaderNavbar></HeaderNavbar>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
