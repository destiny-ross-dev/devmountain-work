import React, { Component } from "react";
import "./Form.css";
import axios from "axios";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productImage: "",
      price: "",
      product: "",
      productid: 0,
      editingExistingItem: false
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleUpdateSave = () => {
    let { productid, product, price, productImage } = this.state;
    axios
      .put(`/api/product/${productid}`, { product, price, productImage })
      .then(response => this.props.getInventory());
  };
  onCancelClick = e => {
    this.setState({
      productImage: "",
      price: "",
      product: "",
      productid: "",
      editingExistingItem: false
    });
  };
  onAddToInventoryClick = e => {
    let { product, productImage, price } = this.state;
    if (product && productImage && price) {
      axios
        .post(`/api/product`, { product, price, productImage })
        .then(response => this.props.getInventory());
    } else {
      alert("Must include all fields!");
    }
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    prevProps.editItem.name !== this.props.editItem.name &&
      this.setState({
        productImage: this.props.editItem.url,
        product: this.props.editItem.name,
        price: parseInt(this.props.editItem.price),
        productid: this.props.editItem.productid,
        editingExistingItem: true
      });
  }
  render() {
    let { productImage, price, product } = this.state;

    return (
      <div className="FormContainer">
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
            value={productImage}
            placeholder="Link to img"
          />
          <p>Product Name:</p>
          <input
            onChange={this.handleChange}
            name="product"
            type="text"
            value={product}
            placeholder="Super cool sticker"
          />
          <p>Price:</p>
          <input
            onChange={this.handleChange}
            name="price"
            type="number"
            value={price}
            placeholder="25.43"
          />
          <div className="ButtonsContainer">
            <button onClick={() => this.onCancelClick()}>Cancel</button>
            {this.state.editingExistingItem ? (
              <button onClick={() => this.handleUpdateSave()}>
                Save Changes
              </button>
            ) : (
              <button onClick={() => this.onAddToInventoryClick()}>
                Add to Inventory
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
