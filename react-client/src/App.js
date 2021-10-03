
import { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { AuthContext } from "./context/AuthContext";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';

const App = () => {
  const{user} = useContext(AuthContext)
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {user ? <Home />:<Login/>}
        </Route>
        <Route path="/profile/:userId" >
        {user ? <Profile/>:<Login />}
        </Route>
        <Route path="/login" >
        {user ? <Home />:<Login/>}
        </Route>
        <Route path="/register" >
        {user ? <Home />:<Register/>}
        </Route>
        <Route path="*" >
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
