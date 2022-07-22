import "./App.css";
import React, {useEffect} from 'react';
import { Routes, Route } from "react-router-dom";

import PrivateRoute from "./components/HOC/PrivateRoute";

import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import {isUserLoggedIn} from './store/actions';
import { useDispatch, useSelector } from 'react-redux';


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
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
