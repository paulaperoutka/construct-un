import React, { Component } from "react";
import {
  Card,
  Carousel,
  CarouselItem,
  CarouselControl,
  Col,
  Row,
  Button
} from "reactstrap";
import "./ResolutionCarousel.css";
import GenModal from "../GenModal";

class ResolutionCarousel extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      activeIndex: 0,
      modal: false,
      modalData: {}
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.modalToggle = this.modalToggle.bind(this);
    this.modalComment = this.modalComment.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.props.resolutions.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.resolutions.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  modalToggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  modalOpen(e) {
    const resIndex = e.target.getAttribute("data-index");
    this.setState({modalData: this.props.resolutions[resIndex]});
    this.modalToggle();
  }

  modalComment() {
    console.log("WIP");
  }

  render() {
    const { activeIndex } = this.state;

    const slides = this.props.resolutions.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item._id}
        >
          <div id="resolution-render-container">
            <h4>{item.resolutionTitle}</h4>
            <h5>Promoted by: {item.memberNation}</h5>
            <Button color="secondary" onClick={this.modalOpen} data-index={this.props.resolutions.indexOf(item)}>View</Button>
            {/*<h5>{item.sponsoringNation}</h5>*/}
            {/*<h6>{item.objective}</h6>*/}
            {/*<p>{item.proposal}</p>*/}
          </div>
        </CarouselItem>

      );
    });

    return (
      <div>
        <GenModal modalOpen={this.state.modal} modalToggle={this.modalToggle} modalData={this.state.modalData} submitBtn={"Comment"} modalSubmit={this.modalComment} />
        <Card className="resolutionCard">
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
        </Card>
      </div>
    );
  }
}

export default ResolutionCarousel;