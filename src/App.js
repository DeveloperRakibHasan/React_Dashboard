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
import Users from './components/page/Users';
import Calender from './components/page/Calender';
import Analytics from './components/page/Analytics';
import Chart from './components/page/Chart';

function App() {
  return (
    <>
    <AuthProvider>
    <Navbar/>
    <DashbordMenu />
      <Switch>
        <PrivetRoute exact path='/' component={Home} />
        <PrivetRoute exact path='/calender' component={Calender} />
        <PrivetRoute exact path='/analytic' component={Analytics} />
        <PrivetRoute exact path='/chart' component={Chart} />
        <PrivetRoute exact path='/user' component={Users} />
        <PublicRoute exact path='/login' component={Login} />
        <PublicRoute exact path='/signup' component={Signup} />
        <Route exact component={PageNotFound} />
      </Switch>
    </AuthProvider>
    </>
  );
}

export default App;
