import React from "react";
import ReactPlayer from "react-player";
function MediaPlayer() {
	const url = "https://www.youtube.com/watch?v=y6120QOlsfU";
	return (
		<>
			<div className="bg-red-200 h-[400px] w-3/5">
				<ReactPlayer
					height={500}
					width={500}
					url={"https://www.youtube.com/watch?v=y6120QOlsfU"}
					config={{}}
				/>
			</div>

			<div>
				<iframe
					src="https://stablediffusionweb.com/#demo"
					height={500}
					frameborder="1"
				></iframe>
			</div>
		</>
	);
}

export default MediaPlayer;
