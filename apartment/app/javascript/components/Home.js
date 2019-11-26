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
  constructor(props){
    super(props)
    this.state = {
      listings: [],
      error: null,
    }
    this.getListings()
  }

  getListings = () => {
    fetch("/listings")
    .then( response => {
      return response.json()
    })
    .then( listings => {
      this.setState({listings})
    })
  }

  createListings = (attrs) =>{
    return fetch("/listings",{
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({listing: attrs})
    })
    .then(response => {
      if(response.status === 201){
        this.getListings()
      }
    })
  }

  editListing = (id, attrs) => {
    console.log("editing", id, attrs)
  }

  deleteListing = (id) =>{
    return fetch(`/listings/${id}`, {
        method: 'DELETE'
      }
    ).then(response => {
      if(response.status === 200){
        this.getListings()
      }else{
        response.json()
        .then(payload => {
          this.setState({error: payload.error})
        })
      }
    })

  }

  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      current_user_id
    } = this.props

    const{ listings , error } = this.state

    return (
      <React.Fragment>
        {error &&
          <h2>{error}</h2>
        }
        <Router>
          <div className="Nav">
            <div>
              <Link to="/">Home</Link>
            </div>
            {logged_in &&
              <div>
                <Link to="/new-listings" >New Apartment</Link>
                <a href={sign_out_route}>Log Out</a>
              </div>
            }
            {!logged_in &&
              <div>
                <a href={sign_in_route}>Log In</a>
              </div>
            }
          </div>
          <Route
            exact
            path="/"
            render={ (props) => {
              return(
                <Listing
                  {...props}
                  listings={listings}
                  deleteAction = {this.deleteListing}
                  currentUserId = {current_user_id}
                />
              )
            }}
          />

          {logged_in &&
          <Switch>
            <Route
              path="/new-listing"
              render={ (props) => {
                return(
                  <Entry
                    {...props}
                    onSubmit={this.createListing}
                  />
                )
              }}
            />
            <Route
              path="/edit-listing/:id"
              render={ (props) => {
                return(
                  <EditListing
                    {...props}
                    onSubmit={this.editListing}
                  />
                )
              }}
            />
          </Switch>
        }
        </Router>
      </React.Fragment>
    );
  }
}

export default Home
