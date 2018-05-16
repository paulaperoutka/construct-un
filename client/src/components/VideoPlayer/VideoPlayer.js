import React, { Component } from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.css";

class VideoPlayer extends Component {
	render() {
		return (
			<div className="wrapper">
				<div id="video-container">
					<ReactPlayer url="https://bcliveunivsecure-lh.akamaihd.net/i/un150_1@575439/master.m3u8"
						width="75%"
          	height="75%"
						controls />
				</div>
			</div>
		)
	}
}

export default VideoPlayer;
