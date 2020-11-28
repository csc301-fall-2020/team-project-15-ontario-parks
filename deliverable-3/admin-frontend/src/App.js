import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './hoc/Layout/Layout'
import WelcomePage from './pages/welcomePage'
import AttractionsPage from './pages/attractionPage'
import ParksPage from './pages/parkPage'
import CategoriesPage from './pages/categoryPage'

const App = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route path='/attractions' component={AttractionsPage} />
          <Route path='/categories' component={CategoriesPage} />
          <Route path='/parks' component={ParksPage} />
          <Route path='/' exact component={WelcomePage} />
        </Layout>
      </Switch>
    </Router >

  )
}

export default App;
