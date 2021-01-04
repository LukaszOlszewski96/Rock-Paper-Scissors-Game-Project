import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import LeftBar from './components/Application/LeftBar';
import Education from './components/Application/Screen/Education';
import { AuthProvider } from './components/Login/Auth';
import PrivateRoute from './components/Login/PrivateRoute';

//Tutaj umieszczona jest główna klasa aplikacji
function App() {
 
  return (
    <AuthProvider>
      <Router>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <PrivateRoute path ="/edukacja" component={Education}/>
          </Switch>
      </Router>
    </AuthProvider>
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
