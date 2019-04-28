import React, { Component } from "react";
import House from "../House/House";
import "./Dashboard.css";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { listings: [] };
  }

  navigateToWizard = () => {
    this.props.history.push("/wizard/1");
  };

  getListings = () => {
    try {
      axios.get("/api/houses").then(response => {
        console.log(response);
        this.setState({ listings: response.data });
      });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.getListings();
  }

  render() {
    let { listings } = this.state;
    let propertyListings = listings.map((e, i) => {
      return <House getListings={this.getListings} key={i} {...e} />;
    });

    console.log(this.state);
    return (
      <div className="Dashboard">
        <div className="ContentContainer ContentContainer--Dashboard">
          <div className="Dashboard__Heading">
            <h2>Dashboard</h2>
            <button onClick={this.navigateToWizard}>Add New Property</button>
          </div>
          {propertyListings}
        </div>
      </div>
    );
  }
}

export default Dashboard;
