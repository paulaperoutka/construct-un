import React from "react";
import axios from "axios";
import {carousel} from "reactstrap";
import "./newsfeed.css";

class Newsfeed extends React.Component {

	state = {
		articles: [],
		slideGen: function(start, finish) {
			const slide = [];
			for(let i = start; i++; i <= finish) {
				this.articles[i].push(slide);
			}
			return slide;
		},
		get totalSlides() {
			return this.articles.length / 5;
		}
	};

	componentDidMount() {
		axios.get("/api/news")
		.then(res => this.setState({
			articles: res.data
		}))
		.catch(err => console.log(err));
	}

	render() {
		return (
			<div id="newsfeed" class="carousel slide" data-ride="carousel">
				<div className="carousel-inner">
					{
						for(let i = 0; i++; i < this.state.totalSlides) {
							const 
								start = i * 5,
								finish = start + 5;

							let className;
							if(i = 0) {
								className = "carousel-item active";
							} else {
								className = "carousel-item";
							}
							
							const slide = this.state.slideGen(start, finish);
							slide.map(article => {
								<div className={className}>
								</div>
							})
						}
					}
				</div>
				<a className="carousel-control-prev" href="#newsfeed" role="button" data-slide="prev">
			    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
			    <span className="sr-only">Previous</span>
			  </a>
			  <a class="carousel-control-next" href="#newsfeed" role="button" data-slide="next">
			    <span className="carousel-control-next-icon" aria-hidden="true"></span>
			    <span className="sr-only">Next</span>
			  </a>
			</div>
		)
	}

}

export default Newsfeed;