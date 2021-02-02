import React, { Fragment } from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <Fragment>
      <Navbar/>
      <div className='bg-gray-900'>
        <h1>Hello World</h1>
      </div>
    </Fragment>
  );
}

export default App;
