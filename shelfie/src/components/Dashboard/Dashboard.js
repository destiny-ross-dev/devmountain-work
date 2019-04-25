import React, { Component } from "react";
import Product from "../Product/Product";
import "./Dashboard.css";
import logo from "../../assets/shelfie_icon.png";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let products = this.props.productList.map((product, index) => {
      return (
        <Product
          key={index}
          name={product.name}
          url={product.img}
          price={product.price}
        />
      );
    });
    let { err } = this.props;

    return (
      <div className="Dashboard">
        {products}

        {err && (
          <div className="ErrorMessage">
            {" "}
            <h2>{err}</h2>
            <img src={logo} />
          </div>
        )}
      </div>
    );
  }
}

export default Dashboard;
