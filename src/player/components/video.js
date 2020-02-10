import React, { Component } from 'react';
import './video.css'

class Video extends Component {
	togglePlay() {
		if (this.props.pause){
			this.video.play()
		} else {
			this.video.pause()
		}
	}

	componentWillReceiveProps(nextProps, nextContext) {
		if (nextProps.pause !== this.props.pause) {
			this.togglePlay();
		}
	}

	setRef = element => {
		this.video = element;
	};

	render() {
		const {
			handleLoadedMetaData,
			handleTimeUpdate,
			handleSeeking,
			handleSeeked

		} = this.props;
		return (
			<div className="Video">
				<video
					ref={this.setRef}
					src={this.props.src}
					autoPlay={this.props.autoplay}
					onLoadedMetadata={handleLoadedMetaData}
					onTimeUpdate={handleTimeUpdate}
					onSeeking={handleSeeking}
					onSeeked={handleSeeked}
					muted={this.props.muted}
				/>
			</div>
		);
	}
}

export default Video;
