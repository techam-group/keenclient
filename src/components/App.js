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
import PostView from "./post-item/PostView.component";
import PublicVlogView from "./post-item/PublicVlogView.component";

const App = () => (
  <Router>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/:blog_id" component={PostView} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/video" component={Video} />
        <Route exact path="/video/:vlog_id" component={PublicVlogView} />
        <Route exact path="/sign-up" component={Signup} />
        <Route exact path="/tutorials" component={Tutorials} />
        <Route exact path="/tutorials/:tutorial_id" component={PostView} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route exact path="/verify-email" component={EmailVerification} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  </Router>
);

export default App
