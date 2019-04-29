import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  updateName,
  updateAddress,
  updateCity,
  updateState,
  updateZip
} from "../../ducks/reducer";

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
              onChange={e => this.props.updateName(e.target.value)}
              type="text"
              value={this.state.name}
              placeholder="My Great Apartment Complex"
            />
          </div>
          <div className="inputBox inputBox--address">
            <p>Address</p>
            <input
              name="address"
              onChange={e => this.props.updateAddress(e.target.value)}
              type="text"
              value={this.state.address}
              placeholder="123 Real St"
            />
          </div>
          <div className="inputBox inputBox--city">
            <p>City</p>
            <input
              name="city"
              onChange={e => this.props.updateCity(e.target.value)}
              type="text"
              value={this.state.city}
              placeholder="Akron"
            />
          </div>
          <div className="inputBox inputBox--state">
            <p>State</p>
            <input
              name="state"
              onChange={e => this.props.updateState(e.target.value)}
              type="text"
              value={this.state.state}
              placeholder="OH"
            />
          </div>
          <div className="inputBox inputBox--zipcode">
            <p>Zipcode</p>
            <input
              name="zipcode"
              onChange={e => this.props.updateZip(e.target.value)}
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

function mapStateToProps(state) {
  return {
    name: state.name,
    address: state.address,
    city: state.city,
    stateName: state.stateName,
    zip: state.zip
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { updateName, updateAddress, updateCity, updateState, updateZip }
  )(Wizard1)
);
