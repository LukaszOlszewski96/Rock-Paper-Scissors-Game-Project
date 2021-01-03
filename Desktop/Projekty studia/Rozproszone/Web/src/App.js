import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import LeftBar from './components/Application/LeftBar';
import Education from './components/Application/Screen/Education';
//Tutaj umieszczona jest główna klasa aplikacji
function App() {
  return (
      <Router>
          <Navbar/>
          <Switch>
          <Route path ="/" component={Education}/>
          </Switch>
      </Router>
  );
}
export default App;
//<Route path="/"  component={Home}/>
 
/*<Route path="/" exact component={Home} />
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
*/
 
/*
 <Route path ="/" component={Education}/>
 */
