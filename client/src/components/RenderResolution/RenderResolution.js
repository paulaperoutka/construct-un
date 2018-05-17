import React, { Component } from "react";
import axios from "axios";
import { Row, Col } from "reactstrap";
// import "./RenderResolution.css";
import ResolutionCarousel from "../ResolutionCarousel";


class RenderResolution extends Component {
  state = {
    displayResolutions: []
  };

  componentDidMount() {
    axios.get("/api/resolutions")
    .then(res => {
      this.setState({ displayResolutions: res.data });
      console.log(this.state.displayResolutions, "retrieving resolutions");
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <ResolutionCarousel resolutions={this.state.displayResolutions} />
    );
  }
}

export default RenderResolution;


