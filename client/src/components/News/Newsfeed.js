import React from "react";
import axios from "axios";
import {carousel} from "reactstrap";
import Slide from "./NewsSlide";
import "./newsfeed.css";

class Newsfeed extends React.Component {

	state = {
		articles: []
	};

	componentDidMount() {
		axios.get("/api/news")
		.then(res => this.setState({articles: res.data}))
		.catch(err => console.log(err));
	}

	render() {
		return (
			<div id="newsfeed" class="carousel slide" data-ride="carousel">
				<div className="carousel-inner">

				</div>
				<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
			    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
			    <span className="sr-only">Previous</span>
			  </a>
			  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
			    <span className="carousel-control-next-icon" aria-hidden="true"></span>
			    <span className="sr-only">Next</span>
			  </a>
			</div>
		)
	}

}

export default Newsfeed;