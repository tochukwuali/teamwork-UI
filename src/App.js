import React, {useState} from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Landing from './components/Landing'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import About from './components/About'
import Posts from './components/private/Posts'
import AddPost from './components/private/AddPost'

const App = () => {

  return (
    <Router>
      <div className="">
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/about" component={About} />
        <Route
          path="/"
          exact
          render={props => (
            <>
              <Posts />
              <AddPost />
            </>
          )}
        />
      </div>
    </Router>
  );
};

export default App
