import React, { Fragment, useContext, useEffect } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import UserContext from './context/User/UserContext';
import Consults from './pages/Consults';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Pets from './pages/Pets';
import Register from './pages/Register';
import Services from './pages/Services';

function App() {
  const userContext = useContext(UserContext)
  useEffect(() => {
    userContext.userLogged()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Fragment>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/services' component={Services}/>
          <Route path='/pets' component={Pets}/>
          <Route path='/consults' component={Consults}/>
          <Route component={NotFound}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
