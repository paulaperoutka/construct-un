import React, { Component } from "react";
import {
	Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  CardBody,
  Card,
  Row,
  Col
} from "reactstrap";
import CommentChain from "./CommentChain";

class CarouselComponent extends Component {

	constructor(props) {
		super(props);
		this.state = { 
      activeIndex: 0
    };
		this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
	}

	onExiting() {
  	this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.props.articles.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.articles.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }	

  render() {
  	const { activeIndex } = this.state;

    const slides = this.props.articles.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item._id}
        >
          <Row>
            <Col>
            	<p>{item.date}</p>
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
          <Row>  
            <Col>
            	{
              	item.comments? 
              	(
              		<CommentChain comments={item.comments} />
              	) : (
              		null
              	)
            	}
            </Col>
          </Row>
        </CarouselItem>
      );
    });

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
    );

  }
}

export default CarouselComponent;