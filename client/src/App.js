import React, { Fragment } from 'react';
import './App.css';
import Input from './Components/input';
import List from './Components/lists';

function App() {
  return (
    <Fragment>
      <div className="container">
        <Input />
        <List />
      </div>
    </Fragment>
  );
}

export default App;
