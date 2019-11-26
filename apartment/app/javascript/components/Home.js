import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import Entry from './pages/Entry'
import Listing from './pages/Listing'

class Home extends React.Component {
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <React.Fragment>
        <Router>
          <h1>Apartment Finder</h1>
          <div className="Nav">
            <div>
              <Link to="/">Home</Link>
            </div>
            {logged_in &&
              <div>
                <Link to="./Entry" >New Apartment</Link>
                <a href={sign_out_route}>Log Out</a>
              </div>
            }
            {!logged_in &&
              <div>
                <a href={sign_in_route}>Log In</a>
              </div>
            }
          </div>

          <div>
            < Listing />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default Home
