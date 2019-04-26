import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventoryList: [],
      fakeList: [
        {
          imageurl:
            "https://vetstreet-brightspot.s3.amazonaws.com/fa/1cf9c0c75711e0a5640050568d6ceb/file/Border-Collie-5-645mk062411.jpg",
          productName: "Border Collie",
          price: "800.00"
        },
        {
          imageurl:
            "https://img.grouponcdn.com/deal/4ytvTJRiQ778hd5TXrnC/yP-2048x1229/v1/c700x420.jpg",
          productName: "Golden Retriever",
          price: "1200.00"
        },
        {
          imageurl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCVTMv5s-Fd3_kbf1GVU_O99gu11YMmBJJbXBz27YI5WViY21ZJA",
          productName: "Sheltie puppy",
          price: "300.50"
        }
      ],
      editItem: {}
    };
  }

  componentDidMount() {
    this.getInventory();
  }

  getInventory = () => {
    axios
      .get("/api/inventory")
      .then(response => this.setState({ inventoryList: response.data }));
  };
  handleEdit = editItem => {
    this.setState({ editItem });
  };
  render() {
    let { inventoryList, productList } = this.state;

    return (
      <div className="App">
        <Header />
        <Dashboard
          handleEdit={this.handleEdit}
          err={
            inventoryList.length < 1
              ? "Problem loading content. Refresh the page."
              : null
          }
          productList={
            inventoryList.length > 1
              ? this.state.inventoryList
              : this.state.fakeList
          }
        />

        <Form getInventory={this.getInventory} editItem={this.state.editItem} />
      </div>
    );
  }
}

export default App;
