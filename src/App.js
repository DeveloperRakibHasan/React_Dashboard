import './App.css';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import {AuthProvider} from './context/AuthContext'
import Home from './components/page/Home';
import DashbordMenu from './components/dashmenu/DashbordMenu';

function App() {
  return (
    <>
    <AuthProvider>
    <Navbar/>
    <DashbordMenu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
      </Switch>
    </AuthProvider>
    </>
  );
}

export default App;
