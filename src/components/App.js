import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Setup the routes
import Blog from "../views/Blog";
import Home from '../views/Home';
import Login from '../views/Login';
import Video from "../views/Video";
import Signup from '../views/Signup';
import NotFound from '../views/NotFound';
import Tutorials from "../views/Tutorials";
import Dashboard from '../views/Dashboard';
import PrivateRoute from './auth/PrivateRoute';
import EmailVerification from '../views/EmailVerification';

const App = () => (
  <Router>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/video" component={Video} />
        <Route exact path="/sign-up" component={Signup} />
        <Route exact path="/tutorials" component={Tutorials} />
        <Route exact path="/verify-email" component={EmailVerification} />
        {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
        <Route path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  </Router>
);

export default App
