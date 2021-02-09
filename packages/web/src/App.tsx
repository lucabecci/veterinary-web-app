import React, { Fragment } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route component={NotFound}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
