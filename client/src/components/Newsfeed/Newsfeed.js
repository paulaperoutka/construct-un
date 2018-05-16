import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  Row,
  Col,
  TabContent, 
  TabPane, 
  Nav, 
  NavItem, 
  NavLink 
} from "reactstrap";
import classnames from "classnames";
import "./Newsfeed.css";
import CarouselComponent from "./CarouselComponent";

class Newsfeed extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      activeTab: "africa",
      items: {
        "africa": [],
        "americas": [],
        "asiaPacific": [],
        "middleEast": [],
        "europe": []
      },
    };
    this.toggle = this.toggle.bind(this);
  }

	componentDidMount() {
		axios.get("/api/news")
		.then(res => {
      const obj = {
        "africa": [],
        "americas": [],
        "asiaPacific": [],
        "middleEast": [],
        "europe": []
      };
      res.data.forEach(item => {
        switch(item.sphere) {
          case "africa":
            obj.africa.push(item);
            break;
          case "americas":
            obj.americas.push(item);
            break;
          case "asia-pacific":
            obj.asiaPacific.push(item);
            break;
          case "middle-east":
            obj.middleEast.push(item);
            break;
          case "europe":
            obj.europe.push(item);
            break;
        }
      });
      this.setState({ items: obj });
      console.log(this.state.items, "stored articles");

    })
		.catch(err => console.log(err));
	}

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

	render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "africa" })}
              onClick={() => { this.toggle("africa"); }}
            >
              Africa
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "americas" })}
              onClick={() => { this.toggle("americas"); }}
            >
              Americas
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "asiaPacific" })}
              onClick={() => { this.toggle("asiaPacific"); }}
            >
              Asia-Pacific
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "middleEast" })}
              onClick={() => { this.toggle("middleEast"); }}
            >
              Middle-East
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "europe" })}
              onClick={() => { this.toggle("europe"); }}
            >
              Europe
            </NavLink>
          </NavItem>
        </Nav>
         <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="africa">
            <Row>
              <Col sm="12">
                <CarouselComponent articles={this.state.items.africa} />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="americas">
            <Row>
              <Col sm="12">
                <CarouselComponent articles={this.state.items.americas} />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="asiaPacific">
            <Row>
              <Col sm="12">
                <CarouselComponent articles={this.state.items.asiaPacific} />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="middleEast">
            <Row>
              <Col sm="12">
                <CarouselComponent articles={this.state.items.middleEast} />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="europe">
            <Row>
              <Col sm="12">
                <CarouselComponent articles={this.state.items.europe} />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default Newsfeed;