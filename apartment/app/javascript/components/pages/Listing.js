import React from "react"
import PropTypes from "prop-types"
import {Link} from 'react-router-dom'
class Listing extends React.Component {

    render () {
      const {
        listings,
      } = this.props
      return (
        <React.Fragment>
          <h1>Apartments</h1>
          <ul>
            {listings.map((listing) => {
              return(
                <li key={listing.id}>
                  {listing.street} {listing.city} {listing.zip}
                </li>
              )
            })}
          </ul>
        </React.Fragment>
      );
    }
  }
export default Listing
