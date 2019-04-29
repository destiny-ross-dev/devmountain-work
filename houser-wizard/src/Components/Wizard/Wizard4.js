import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import House from "../House/House";
import { withRouter } from "react-router-dom";
class Wizard4 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  submit = () => {
    let {
      name,
      address,
      city,
      stateName,
      zip,
      img,
      mortgage,
      rent
    } = this.props;
    let body = {
      name: name,
      address: address,
      city: city,
      state: stateName,
      zip: zip,
      img: img,
      mortgage: mortgage,
      rent: rent
    };

    axios
      .post(`/api/house`, {
        name,
        address,
        city,
        stateName,
        zip,
        mortgage,
        rent,
        img
      })
      .then(response => {
        console.log(response);
        this.props.history.push("/");
      });
  };

  render() {
    console.log(this.props);
    let {
      name,
      address,
      city,
      stateName,
      zip,
      img,
      mortage,
      rent
    } = this.props;
    return (
      <div className="Wizard4">
        <div className="Wizard__Content">
          <House {...this.props} preview />
        </div>
        <div className="SaveButtonDiv">
          <button className="SaveButton" onClick={this.submit}>
            Save
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

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(Wizard4)
);
