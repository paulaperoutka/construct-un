import React, { Component } from "react";
import ReactPlayer from "react-player";

class VideoPlayer extends Component {

	render() {
		return (
			<div>
				<ReactPlayer url="https://bcliveunivsecure-lh.akamaihd.net/i/un150_1@575439/index_1328_av-b.m3u8?sd=10&rebase=on" playing controls />
			</div>
		)
	}
}

export default VideoPlayer;