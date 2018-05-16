import React from "react";
import axios from "axios";
import {
	Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button,
  CardBody,
  Card,
  CardTitle,
  CardText,
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

class Newsfeed extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      activeIndex: 0,
      activeTab: '1',
      items: []
    };
    this.toggle = this.toggle.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

	componentDidMount() {
		axios.get("/api/news")
		.then(res => this.setState({ items: res.data }))
		.catch(err => console.log(err));
	}

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }


  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }	

	render() {
    const { activeIndex } = this.state;

    const carouselFrame = function() {
      return (
        <Card className="newsfeed">
          <CardBody>
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
            >
    {/*                  <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />*/}
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
          </CardBody>
        </Card>
      )
    }

    const slides = function() {

      const articles = [];

      switch(this.state.activeTab) {  
        case "1":
          articles.length = 0;
          articles.forEach(item => {
            if(item.sphere === "africa") {
              articles.push(item);
            }
          });
          break;
        case "2":
          articles.length = 0;
          articles.forEach(item => {
            if(item.sphere === "americas") {
              articles.push(item);
            }
          });
          break;
        case "3":
          articles.length = 0;
          articles.forEach(item => {
            if(item.sphere === "asia") {
              articles.push(item);
            }
          });
          break;
        case "4":
          articles.length = 0;
          articles.forEach(item => {
            if(item.sphere === "middle-east") {
              articles.push(item);
            }
          });
          break;
        case "5":
          articles.length = 0;
          articles.forEach(item => {
            if(item.sphere === "europe") {
              articles.push(item);
            }
          });
          break;
      }

      articles.map(item => {
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={articles.imageLink}
          >
            <Row>
              <Col>
                <h3>{item.title}</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <img src={item.imageLink} alt="*" />
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="author">{item.imageAuthor}</p>
              </Col>
            </Row>
            <Row>  
              <Col>
                <p>{item.summary}</p>
              </Col>
            </Row>
          </CarouselItem>
        );
      });

    }

    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Africa
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Americas
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Asia-Pacific
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Middle-East
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }}
            >
              Europe
            </NavLink>
          </NavItem>
        </Nav>
         <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                {carouselFrame}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                {carouselFrame}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                {carouselFrame}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
                {carouselFrame}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row>
              <Col sm="12">
                {carouselFrame}
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }

}

export default Newsfeed;