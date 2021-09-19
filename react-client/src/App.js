
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/profile/:username" >
          <Profile />
        </Route>
        <Route path="/login" >
          <Login />
        </Route>
        <Route path="/register" >
          <Register />
        </Route>
        <Route path="*" >
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
