import "./App.css";
import React, {useEffect} from 'react';
import { Routes, Route } from "react-router-dom";

import PrivateRoute from "./components/HOC/PrivateRoute";

import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import {isUserLoggedIn} from './store/actions';
import { useDispatch, useSelector } from 'react-redux';
import Products from "./containers/products";
import Orders from "./containers/orders";
import Category from "./containers/Category";


function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);


  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());
    }
  }, []);
 
  

  return (
    <>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <Products/>
            </PrivateRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          }
        />
        <Route
          path="/categories"
          element={
            <PrivateRoute>
              <Category />
            </PrivateRoute>
          }
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
