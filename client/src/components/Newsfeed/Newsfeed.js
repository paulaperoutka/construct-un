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
  Row,
  Col

} from "reactstrap";
import "./Newsfeed.css";

class Newsfeed extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      activeIndex: 0,
      items: []
    };
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

    const slides = this.state.items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.imageLink}
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

    return (
      <Row>
        <Col>
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
        </Col>
      </Row>
    );
  }

}

export default Newsfeed;