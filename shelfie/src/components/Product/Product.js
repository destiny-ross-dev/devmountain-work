import React, { Component } from "react";
import "./Product.css";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { name, price, url } = this.props;
    return (
      <div className="Product">
        <img src={url} />
        <div className="Description">
          <h3>{name}</h3>
          <p>{price}</p>
        </div>
      </div>
    );
  }
}

export default Product;
