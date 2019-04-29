import React, { Component } from "react";

import { connect } from "react-redux";
import { updateImg } from "../../ducks/reducer";
import { Link } from "react-router-dom";

class Wizard3 extends Component {
  constructor(props) {
    super(props);
    this.state = { img: "" };
  }
  uploadFile = async e => {
    console.log("uploading file...");
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "houser");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dcw2q3l9k/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();
    console.log(file);
    this.setState(
      {
        image: file.secure_url
      },
      () => this.props.updateImg(file.secure_url)
    );
  };
  render() {
    return (
      <div className="Wizard3">
        <div className="Wizard__Content">
          <div className="inputBox inputBox--img">
            <p>Image</p>
            <input
              type="file"
              id="file"
              name="file"
              placeholder="Upload an image"
              required
              onChange={this.uploadFile}
            />
            {this.state.image && (
              <img
                src={this.state.image}
                alt="Upload Preview"
                onError={e => {
                  e.target.src =
                    "https://discoverthegift.com/wp-content/uploads/2016/03/placeholder.jpg";
                }}
              />
            )}
          </div>
        </div>
        <div className="SaveButtonDiv">
          <button className="SaveButton" onClick={this.props.completeStep}>
            View Preview
          </button>
        </div>
        ;
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    img: state.img
  };
};
export default connect(
  mapStateToProps,
  { updateImg }
)(Wizard3);
