import React, { Component } from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.css";

class VideoPlayer extends Component {

	render() {
		return (
			<div>
				<ReactPlayer url="https://bcliveunivsecure-lh.akamaihd.net/i/un150_1@575439/master.m3u8" controls />
			</div>
		)
	}
}

export default VideoPlayer;