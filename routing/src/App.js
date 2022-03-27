import logo from './logo.svg';
import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Product1 from './Pages/Product1';
import Product2 from './Pages/Product2';

function App() {
  return (
    <>
    <h1>First Page</h1>
    <Route path="/Product1">
      <Product1/>
    </Route>
    <Route path="/Product2">
      <Product2/>
    </Route>

    </>   
  );
}

export default App;
