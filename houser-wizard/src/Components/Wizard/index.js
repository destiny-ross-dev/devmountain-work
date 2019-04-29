import React, { Component } from "react";
import "./Wizard.css";
import axios from "axios";
import Wizard1 from "./Wizard1";
import Wizard2 from "./Wizard2";
import Wizard3 from "./Wizard3";
import Wizard4 from "./Wizard4";

class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = { step: "" };
  }

  componentDidMount() {
    this.setState({ step: this.props.match.params.step_number });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  cancelPropertyCreation = e => {
    this.setState(
      { name: "", address: "", city: "", state: "", zipcode: "" },
      () => this.props.history.push("/")
    );
  };

  completeStep = e => {
    console.log(this.state.step);
    this.state.step < 4 &&
      this.setState({ step: (parseInt(this.state.step) + 1).toString() }, () =>
        this.props.history.push(`/wizard/${this.state.step}`)
      );
  };
  render() {
    let { step } = this.state;
    console.log(this.props, this.state.step);
    return (
      <div className="Wizard">
        <div className="ContentContainer ContentContainer--Wizard">
          <div className="Wizard__Heading">
            <h2>Add New Property</h2>
            <button onClick={this.cancelPropertyCreation}>Cancel</button>
          </div>
          <div className="Step__UI arrow-steps clearfix">
            <div className={step === "1" ? "step current" : "step"}>
              <span>Step 1 - Basic Info</span>
            </div>
            <div className={step === "2" ? "step current" : "step"}>
              <span>Step 2 - Rent and Mortage Info</span>
            </div>
            <div className={step === "3" ? "step current" : "step"}>
              <span>Step 3 - Property Image</span>
            </div>
            <div className={step === "4" ? "step current" : "step"}>
              <span>Step 4 - Preview</span>
            </div>
          </div>
          {this.state.step === "1" ? (
            <Wizard1 completeStep={this.completeStep} />
          ) : this.state.step === "2" ? (
            <Wizard2 completeStep={this.completeStep} />
          ) : this.state.step === "3" ? (
            <Wizard3 completeStep={this.completeStep} />
          ) : (
            <Wizard4 completeStep={this.completeStep} />
          )}
        </div>
      </div>
    );
  }
}

export default Wizard;
