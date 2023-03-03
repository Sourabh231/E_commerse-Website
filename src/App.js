import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar.js';
import ProductContextProvider from './Global/ProductContext';
import CarContextProvider from './Global/CartContext';
import Products from './Components/Products';
import Cart from './Components/Cart';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div>
      <ProductContextProvider>
        <CarContextProvider>
        <Router>
        <Navbar/>
        <Switch>
               <Route path='/' exact component={Products}/>
               <Route path='/cart' exact component={Cart}/>
               <Route path='*'exact component={NotFound}/>
        </Switch>      
        </Router> 
        </CarContextProvider> 
      </ProductContextProvider>
    </div>
  );
}

export default App;
