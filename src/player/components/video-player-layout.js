import React from 'react';
import './video-player-layout.css';

const VideoPLayerLayout = (props) => (
	<div
		ref={props.setRef}
		className="VideoPlayer"
	>
		{props.children}
	</div>
);

export default VideoPLayerLayout;
