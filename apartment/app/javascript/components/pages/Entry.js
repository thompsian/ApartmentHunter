import React from "react"
import PropTypes from "prop-types"
import {Redirect} from 'react-router-dom'
class Entry extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        form: {
          street: "",
          city: "",
          zip: ""
        }
      }
    }

    onChange= (e) =>{
      const{ form } = this.state
      const{ name, value } = e.target
      form[name] = value
      this.setState({form})
    }

    localSubmit = () =>{
      const{ onSubmit } = this.props
      const{ form } = this.state
      onSubmit(form)
      .then(()=>{
        this.setState({createSuccess: true})
      })
    }
    render () {
      const{
        street,
        city,
        zip,
        createSuccess
      } = this.state
      return (
        <React.Fragment>
          { createSuccess && <Redirect to="/"/> }
          <h1>New Apartment</h1>
          <div>
            <label>Street</label>
            <input
              name="street"
              value={street}
              onChange = { this.onChange }
              type='text'
            />
          </div>
          <div>
            <label>City</label>
            <input
              name="city"
              value={city}
              onChange = { this.onChange }
              type='text'
            />
          </div>
          <div>
            <label>Zip Code</label>
            <input
              name="zip"
              value={zip}
              onChange = { this.onChange }
              type='text'
            />
          </div>

          <button onClick={this.localSubmit} >Submit</button>
        </React.Fragment>
      );
    }
  }

export default Entry
