import React, { Component } from "react";
import ReactPlayer from "react-player";

class VideoPlayer extends Component {
	render() {
		return <ReactPlayer url="blob:http://webtv.un.org/bd962187-e429-427b-894b-540860409297" playing />
	}
}