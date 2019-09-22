import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './auth/PrivateRoute'

// Setup the routes
import Login from './views/Login'
import Signup from './views/Signup'
import Home from './views/Home'
import Dashboard from './views/Dashboard'
import EmailVerification from './views/EmailVerification'
import NotFound from './views/NotFound'

const App = () => (
  <Router>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={Signup} />
        <Route exact path="/verify-email" component={EmailVerification} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  </Router>
)

export default App
