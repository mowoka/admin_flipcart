import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import PrivateRoute from './components/HOC/PrivateRoute';

import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
