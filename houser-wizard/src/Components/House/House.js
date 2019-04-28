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
    let { name, address, city, state, zipcode, id } = this.props;
    return (
      <div className="House">
        <button onClick={this.handleRemove}>Remove Property</button>
        <h3>{name}</h3>
        <p>
          {address} {city}, {state} {zipcode}
        </p>
      </div>
    );
  }
}

export default House;
