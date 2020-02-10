import React from 'react';
import Play from "../../icons/components/play";
import Pause from "../../icons/components/pause";
import './play-pause.css'

const PlayPause = (props) => (
	<div className="PlayPause">
				<button onClick={props.handleClick}>
					{
						props.pause ?
							<Play size={25} color="white"/>
						:
							<Pause size={25} color="white"/>
					}
				</button>
	</div>
);

export default PlayPause;
