import React, { Component } from "react";
import axios from "axios";
import { Button, CardBody, Card, Row,Col,TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
// import "./RenderResolution.css";
import Carousel from "../Carousel";

class RenderResolution extends Component {
  state = {
    displayResolutions = [];
  };

  componentDidMount() {
    axios.get("/api/resolutions")
    .then(res => {
      this.setState({
        renderResolutions: res.data
      });
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className = "wrapper">
        <Row>
          <Col sm="12">
            <Carousel resolutions={this.state.displayResolutions} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default renderResolution;


