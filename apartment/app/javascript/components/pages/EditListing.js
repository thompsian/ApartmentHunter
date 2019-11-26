import React from "react"
import PropTypes from "prop-types"
class EditListing extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      listingId: null,
      listingAttrs: {}
    }
  }
  componentDidUpdate(prevProps){
    if(prevProps.match.params.id != this.props.match.params.id){
      this.getListing()
    }
  }

  getListing(){
    //fetch apartment from show method
  }

  render () {
    return (
      <React.Fragment>
      </React.Fragment>
    );
  }
}

export default EditListing
