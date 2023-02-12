import React from "react";
import DefaultWindow from "@/components/DefaultWindow/DefaultWindow";
import GridLayout from "react-grid-layout";
import { Error } from "react-windows-xp";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import images from "../../constants/images";
import { useState, useEffect } from "react";
import wallpaper from "../../constants/images";
import { Resizable } from "re-resizable";

function index() {
	const layout = [
		{ i: "a", x: 1, y: 0, w: 1, h: 2 },
		{ i: "b", x: 2, y: 0, w: 1, h: 2 },
		{ i: "c", x: 3, y: 0, w: 1, h: 2 },
	];

	const DesktopFiles = [images.thisPc, images.folder, images.trash];
	const myArray = [
		images.flutter,
		images.redux,
		images.sass,
		images.flutter,
		images.redux,
		images.sass,
		images.flutter,
		images.redux,
		images.sass,
		images.flutter,
		images.redux,
		images.sass,
		images.flutter,
		images.redux,
		images.sass,
	];

	const array = new Array(10).fill("2");
	console.log(array, "asdasd");

	return (
		<div className="desktop flex ">
			<GridLayout
				layout={layout}
				autoSize={true}
				width={1000}
				cols={12}
				maxRows={5}
				rowHeight={20}
			>
				{/* <DefaultWindow key={"b"} WindosName={"3"} /> */}

				{DesktopFiles.map((item, index) => (
					<div className="flex flex-col items-center" key={layout[index].i}>
						<Image src={item} alt="" height={40} width={40} />
						<p>{item.name}</p>
					</div>
				))}
			</GridLayout>
		</div>
	);
}

export default index;
