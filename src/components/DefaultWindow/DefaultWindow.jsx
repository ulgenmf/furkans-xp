import React, { useRef } from "react";
import styled from "styled-components";
import GridLayout from "react-grid-layout";
import { GiResize } from "react-icons/gi";
import { Resizable } from "re-resizable";
import "xp.css/dist/XP.css";
import { useState } from "react";

function DefaultWindow({ WindosName, customDiv }) {
	const [size, setSize] = useState(20);
	function click() {
		elementRef.current.style.display = "none";
		console.log("ss");
	}
	function sizer() {
		setSize(500);
		console.log(size);
	}

	const elementRef = useRef();
	return (
		<>
			<div style={{ background: "white" }} className="window " ref={elementRef}>
				<Resizable
					defaultSize={{
						width: 200,
						height: 200,
					}}
					height={500}
					width={500}
					minWidth={300}
					minHeight={200}
					maxHeight={"90vh"}
					maxWidth={"90vw"}
				>
					<div className="title-bar " style={{ padding: "15px 0 15px 0" }}>
						<div className="title-bar-text overflow-hidden">
							A Window With Stuff In It
						</div>
						<div className="title-bar-controls gap-[1px] px-2 ">
							<button aria-label="Minimize" onClick={click}></button>
							<button aria-label="Close" onClick={click}></button>
						</div>
					</div>
					<div className="window-body ">
						<p>There's so much room for activities!</p>
					</div>
				</Resizable>
			</div>
		</>
	);
}

export default DefaultWindow;
