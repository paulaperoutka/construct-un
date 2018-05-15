import React, { Component } from "react";
import ReactPlayer from "react-player";

class VideoPlayer extends Component {

	render() {
		return (
			<div>
				{console.log(ReactPlayer.canPlay("http://webtv.un.org/bd962187-e429-427b-894b-540860409297"), "can it play?")}
				<ReactPlayer url="http://webtv.un.org/bd962187-e429-427b-894b-540860409297" playing />
			</div>
		)
	}
}

export default VideoPlayer;