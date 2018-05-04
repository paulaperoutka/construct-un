import React from "react";
import axios from "axios";
import "reactstrap";
import "./newsfeed.css";

class Newsfeed extends React.Component {

	state = {
		articles: [],
		slideGen: function(start, finish) {
			const slide = [];
			for(let i = start; i++; i <= finish) {
				this.articles[i].push(slide);
			}
			console.log(slide);
			return slide;
		},
		get totalSlides() {
			return this.articles.length / 5;
		},
		slideFramework: function() {
			for(let i = 0; i < this.totalSlides; i++) {
				const 
					start = i * 5,
					finish = start + 5;

				const slide = this.slideGen(start, finish);

				let className;
				if(i = 0) {
					className = "carousel-item active";
				} else {
					className = "carousel-item";
				}

				return (
					<div className={className}>
						<div className="row">
							<div className="col-lg-1">
							</div>
								{this.slideArticle(slide)}
							<div className="col-lg-1">
							</div>
						</div>
					</div>
				)
			}
		},
		slideArticle: function(slide) {
			slide.map(article => 
				<div className="col-lg-2">
					<div className="article">
						<img src={article.imageLink} alt="*" className="img-thumbnail">
						</img>
					</div>
				</div>
			)
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
			<div id="newsfeed" className="carousel slide" data-ride="carousel">
				<div className="carousel-inner">
					{this.state.slideFramework()}
				</div>
				<a className="carousel-control-prev" href="#newsfeed" role="button" data-slide="prev">
			    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
			    <span className="sr-only">Previous</span>
			  </a>
			  <a className="carousel-control-next" href="#newsfeed" role="button" data-slide="next">
			    <span className="carousel-control-next-icon" aria-hidden="true"></span>
			    <span className="sr-only">Next</span>
			  </a>
			</div>
		)
	}

}

export default Newsfeed;