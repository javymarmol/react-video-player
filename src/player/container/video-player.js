import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title'
import PlayPause from "../components/play-pause";
import Timer from "../components/timer";
import Controls from '../components/video-player-controls'
import ProgressBar from "../components/progress-bar";
import Spinner from '../components/spinner'
import Volume from "../components/volume";
import FullScreen from "../components/full-screen";

class VideoPlayer extends Component{
	state = {
		pause: true,
		loading: false,
		duration: 0,
		currentTime: 0,
		volume: 0.5,
		lastVolume: 0,
		muted: false
	};

	togglePlay = () => {
		this.setState({
			pause: !this.state.pause,
		})
	};

	componentDidMount() {
		this.setState({
			pause: !this.props.autoplay
		})
	}

	handleLoadedMetaData = event => {
		this.video = event.target;
		this.setState({
			duration: this.video.duration
		})
	};

	handleTimeUpdate = event => {
		// console.log(this.video.currentTime);
		this.setState({
			currentTime: this.video.currentTime
		})
	};

	handleProgressChange = event => {
		this.video.currentTime = event.target.value;
	};

	handleSeeking = event => {
		this.setState({
			loading: true
		})
	};

	handleSeeked = event => {
		this.setState({
			loading:false
		})
	};

	handleVolumeChange = event => {
		this.setState({
			volume: event.target.value,
		});
		this.video.volume = this.state.volume
	};

	toggleMuted = event => {
			this.setState({
				lastVolume: this.video.volume,
				volume: (!this.state.muted)? 0 : this.state.lastVolume,
				muted: !this.state.muted,
			});
	};

	handleFullScreen = event => {
		if (!document.webkitIsFullScreen){
			this.player.webkitRequestFullscreen();
		} else {
			//document.webkitExitFullScreen();
			document.webkitExitFullscreen();
		}
	};

	setRef = (element) => {
		this.player = element;
	};

	render() {
		return (
			<VideoPlayerLayout
				setRef={this.setRef}
			>
				<Title title={this.props.title}/>
				<Controls>
					<PlayPause
						pause={this.state.pause}
						handleClick={this.togglePlay}
					/>
					<Timer
						duration={this.state.duration}
						currentTime={this.state.currentTime}
					/>
					<ProgressBar
						duration={this.state.duration}
						currentTime={this.state.currentTime}
						handleProgressChange={this.handleProgressChange}
					/>
					<Volume
						handleVolumeChange={this.handleVolumeChange}
						toggleMuted={this.toggleMuted}
						volume={this.state.volume}
					/>
					<FullScreen
						handleFullScreen={this.handleFullScreen}
					/>
				</Controls>
				<Spinner active={this.state.loading}/>
				<Video
					handleLoadedMetaData={this.handleLoadedMetaData}
					autoplay={this.state.pause}
					pause={this.state.pause}
					src={this.props.src}
					handleTimeUpdate={this.handleTimeUpdate}
					handleSeeking={this.handleSeeking}
					handleSeeked={this.handleSeeked}
					muted={this.state.muted}
				/>
			</VideoPlayerLayout>
		)
	}
}

export default VideoPlayer;
