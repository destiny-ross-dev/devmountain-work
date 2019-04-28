import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Wizard1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    return (
      <div className="Wizard1">
        <div className="Wizard__Content">
          <div className="inputBox inputBox--name">
            <p>Property Name</p>
            <input
              name="name"
              onChange={this.handleChange}
              type="text"
              value={this.state.name}
              placeholder="My Great Apartment Complex"
            />
          </div>
          <div className="inputBox inputBox--address">
            <p>Address</p>
            <input
              name="address"
              onChange={this.handleChange}
              type="text"
              value={this.state.address}
              placeholder="123 Real St"
            />
          </div>
          <div className="inputBox inputBox--city">
            <p>City</p>
            <input
              name="city"
              onChange={this.handleChange}
              type="text"
              value={this.state.city}
              placeholder="Akron"
            />
          </div>
          <div className="inputBox inputBox--state">
            <p>State</p>
            <input
              name="state"
              onChange={this.handleChange}
              type="text"
              value={this.state.state}
              placeholder="OH"
            />
          </div>
          <div className="inputBox inputBox--zipcode">
            <p>Zipcode</p>
            <input
              name="zipcode"
              onChange={this.handleChange}
              type="number"
              value={this.state.zipcode}
              placeholder="44312"
            />
          </div>
          <div />
        </div>
        <div className="SaveButtonDiv">
          <button className="SaveButton" onClick={this.props.completeStep}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Wizard1);
