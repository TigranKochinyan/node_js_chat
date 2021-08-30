import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './app.scss';
import Home from "./pages/home";
import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
