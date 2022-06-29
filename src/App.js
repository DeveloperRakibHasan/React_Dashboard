import './App.css';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import {AuthProvider} from './context/AuthContext'
import Home from './components/page/Home';
import DashbordMenu from './components/dashmenu/DashbordMenu';
import PublicRoute from './components/createroute/PublicRouter';
import PrivetRoute from './components/createroute/PrivetRouter';
import PageNotFound from './components/page/PageNotFound';

function App() {
  return (
    <>
    <AuthProvider>
    <Navbar/>
    <DashbordMenu />
      <Switch>
        <PrivetRoute exact path='/' component={Home} />
        <PublicRoute exact path='/login' component={Login} />
        <PublicRoute exact path='/signup' component={Signup} />
        <Route exact component={PageNotFound} />
      </Switch>
    </AuthProvider>
    </>
  );
}

export default App;
