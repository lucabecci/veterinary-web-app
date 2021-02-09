import React, { Fragment } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Services from './pages/Services';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/services' component={Services}/>
          <Route component={NotFound}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
