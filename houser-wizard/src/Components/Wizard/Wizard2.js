import React, { Component } from "react";
import { connect } from "react-redux";
import { updateMortgage, updateRent } from "../../ducks/reducer";

class Wizard2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="Wizard__Content">
          <div className="inputBox inputBox--name">
            <h2>{`Recommended Rent: $${this.props.mortgage * 1.25}`}</h2>
            <p>Monthly Mortage Amount</p>
            <input
              name="mortage"
              onChange={e => this.props.updateMortgage(e.target.value)}
              type="number"
              value={this.state.mortage}
              placeholder="My Great Apartment Complex"
            />
          </div>
          <div className="inputBox inputBox--address">
            <p>Desired Monthly Rent</p>
            <input
              name="rent"
              onChange={e => this.props.updateRent(e.target.value)}
              type="number"
              value={this.state.rent}
              placeholder="123 Real St"
            />
          </div>
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
    zip: state.zip,
    img: state.img,
    mortgage: state.mortgage,
    rent: state.rent,
    listings: state.listings
  };
}

export default connect(
  mapStateToProps,
  { updateMortgage, updateRent }
)(Wizard2);
