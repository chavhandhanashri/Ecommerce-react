import Product from  './components/product/product'
import Navbar from './shared/navbar/navbar';
// import FilterPanel from './shared/filter/filter';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/font-awesome/css/font-awesome.css'
import './App.css';
import store from './redux/store/store'
import { Provider } from 'react-redux';
import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Switch>
          <Route path= "/" exact component = {Product} ></Route>
        </Switch>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
