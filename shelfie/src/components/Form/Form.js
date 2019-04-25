import React, { Component } from "react";
import "./Form.css";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { productImage: "", price: "", product: "" };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onCancelClick = e => {
    this.setState({ productImage: "", price: "", product: "" });
  };

  render() {
    console.log(this.state);
    return (
      <div className="Form">
        <img
          src={this.state.productImage}
          onError={e => {
            e.target.src =
              "https://discoverthegift.com/wp-content/uploads/2016/03/placeholder.jpg";
          }}
        />
        <p>Image URL:</p>
        <input
          onChange={this.handleChange}
          name="productImage"
          type="text"
          value={this.state.productImage}
          placeholder="Link to img"
        />
        <p>Product Name:</p>
        <input
          onChange={this.handleChange}
          name="product"
          type="text"
          value={this.state.product}
          placeholder="Super cool sticker"
        />
        <p>Price:</p>
        <input
          onChange={this.handleChange}
          name="price"
          type="number"
          value={this.state.price}
          placeholder="25.43"
        />
        <div className="ButtonsContainer">
          <button onClick={() => this.onCancelClick()}>Cancel</button>
          <button>Add to Inventory</button>
        </div>
      </div>
    );
  }
}

export default Form;
