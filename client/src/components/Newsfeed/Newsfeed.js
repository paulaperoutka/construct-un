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
  Collapse
} from "reactstrap";
import "./Newsfeed.css";

let items = [];

class Newsfeed extends React.Component {

	componentDidMount() {
		axios.get("/api/news")
		.then(res => res.data
      .forEach(item => items.push(item)))
		.catch(err => console.log(err));
	}

	constructor(props) {
    super(props);
    this.state = { 
      activeIndex: 0,
      collapse: false 
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }	

	render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.imageLink}
        >
          <img src={item.imageLink} alt="*" />
          <CarouselCaption captionText={item.title} captionHeader={item.title} />
        </CarouselItem>
      );
    });

    return (
      <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Headlines</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
              >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
              </Carousel>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }

}

export default Newsfeed;