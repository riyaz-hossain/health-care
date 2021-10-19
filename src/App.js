import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/HomePage/Home';
import About from './Components/AboutPage/About';
import Services from './Components/ServicesPage/Services';
import PatientLogin from './Components/PatientLoginPage/PatientLogin';
import Contact from './Components/ContactPage/Contact';
import Layout from './Components/Layout/Layout';
import { useState } from 'react';
import { createContext } from 'react';
import PrivateRoute from './Components/PatientLoginPage/PrivateRoute';
import Appointment from './Components/AppointmentPage/Appointment';
export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Layout>
                <Home />
              </Layout>
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <PrivateRoute path="/appointment">
              <Layout>
                <Appointment />
              </Layout>
            </PrivateRoute>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/patient-login">
              <PatientLogin />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route exact path="/">
              <Layout>
                <Home />
              </Layout>
            </Route>
            <Route path="*">
              <h3>Page is Not Found </h3>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
