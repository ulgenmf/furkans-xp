import React from "react";
import Draggable from "react-draggable";
import GridLayout from "react-grid-layout";
import { Error } from "react-windows-xp";
import Image from "next/image";
import images from "../../constants/images";
import { meArray } from "@/components/DefaultWindow/functions";
import { SkillsWindow } from "../../components/DefaultWindow/DefaultWindow";
import Link from "next/link";
import { MeWindow } from "../../components/DefaultWindow/DefaultWindow";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import wallpaper from "../../constants/images";
import { Resizable } from "re-resizable";
import { FcFolder } from "react-icons/fc";

function index() {
	const [skillsFolder, setSkillsFolder] = useState("");
	const [worksFolder, setWorksFolder] = useState(false);
	const [meFolder, setMeFolder] = useState(false);
	const meArray = [images.me1, images.me2, images.me3, images.me4];
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
	const ch = meArray.map((x) => (
		<>
			<Image src={x} />
		</>
	));

	const array = new Array(10).fill("2");
	console.log(skillsFolder, "skills");
	return (
		<div className="flex flex-col h-screen">
			<div className=" w-full flex __bar    800">
				<div className="flex justify-center items-center">
					<Image src={images.bolt} className="h-16 w-14" />
					<p className="text-center text-white text-3xl">Welcome Furkan</p>
				</div>
			</div>
			<div className="desktop grid grid-flow-row grid-cols-12 grid-rows-6 overflow-hidden  layout">
				<Draggable bounds=".desktop">
					<div
						onDoubleClick={() => setSkillsFolder("")}
						className=" h-28 mt-2 active:scale-105  items-center cursor-pointer flex flex-col hover:bg-blue-400 active:bg-blue-600 hover:bg-opacity-20 bg-opacity-[0.01] rounded-lg  "
					>
						<FcFolder size={100} />
						<p className="text-white text-center font-semibold text-md bg-opacity-10 ">
							Skills
						</p>
					</div>
				</Draggable>
				<Draggable bounds=".desktop">
					<div className=" h-28  mt-2 active:scale-110  cursor-pointer  hover:scale-125 items-center flex flex-col hover:bg-blue-400 active:bg-blue-600 hover:bg-opacity-20 bg-opacity-[0.01] rounded-lg  ">
						<FcFolder size={120} />
						<p className="text-white text-center font-semibold text-md bg-opacity-10 ">
							Works
						</p>
					</div>
				</Draggable>
				<Draggable bounds=".desktop">
					<div className=" h-28 mt-2 active:scale-105  cursor-pointer  items-center flex flex-col hover:bg-blue-400 active:bg-blue-600 hover:bg-opacity-20 bg-opacity-[0.01] rounded-lg  ">
						<FcFolder size={100} />
						<p className="text-white text-center font-semibold text-md bg-opacity-10 ">
							Me
						</p>
					</div>
				</Draggable>{" "}
				<div>
					<SkillsWindow />
				</div>
				<MeWindow />
			</div>
		</div>
	);
}

export default index;
