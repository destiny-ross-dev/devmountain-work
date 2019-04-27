import React, { Component } from "react";
import "./Product.css";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { name, price, url, productid } = this.props;
    let editItem = { name, price, url, productid };
    console.log("looking for id", editItem);
    return (
      <div className="Product">
        <img src={url} />
        <div className="Description">
          <h3>{name}</h3>
          <p>${price}</p>
          <div className="EditDeleteButtons">
            <button onClick={() => this.props.handleEdit(editItem)}>
              Edit
            </button>
            <button onClick={() => this.props.handleDelete(productid)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
