import React, { Component } from "react";
import "./House.css";
import axios from "axios";

class House extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleRemove = () => {
    axios
      .delete(`/api/house/${this.props.id}`)
      .then(response => this.props.getListings());
  };
  render() {
    console.log(this.props);
    let {
      name,
      address,
      city,
      state,
      zipcode,
      img,
      rent,
      mortage,
      id,
      preview
    } = this.props;
    return (
      <div className="House">
        {preview == undefined && (
          <button onClick={this.handleRemove}>Remove</button>
        )}
        <img src={img} />
        <div className="House__BasicInfoDiv">
          <h3>{name}</h3>
          <p>
            {address} {city}, {state} {zipcode}
          </p>
          <p>Mortage: {mortage}</p>
          <p>Rent: {rent}</p>
        </div>
      </div>
    );
  }
}

export default House;
