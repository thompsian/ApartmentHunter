import React from "react"
import PropTypes from "prop-types"
import {Link} from 'react-router-dom'
class Listing extends React.Component {

  render () {
    const {
      listings,
      currentUserId,
      deleteAction
    } = this.props
    return (
      <React.Fragment>
        <h1>Apartments</h1>
        <ul>
          {listings.map((listing) => {
            return(
              <li key={listing.id}>
                {listing.street} {listing.city} {listing.zip}
                {listing.user_id === currentUserId &&
                  <div>
                    <button onClick={()=> deleteAction(listing.id)}>delete</button>
                    <Link to={`/edit-listing/${listing.id}`}>Edit</Link>
                  </div>
                }
              </li>
            )
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default Listing
