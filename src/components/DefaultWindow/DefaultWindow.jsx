import React, { Children, useContext, useRef } from "react";
import styled from "styled-components";
import GridLayout from "react-grid-layout";
import { GiResize } from "react-icons/gi";
import { Resizable } from "re-resizable";
import { basePath } from "next.config";
import "xp.css/dist/XP.css";
import { useState } from "react";
import { skillsArray } from "./functions";
import Image from "next/image";

import { AiOutlineClose } from "react-icons/ai";
import Draggable from "react-draggable";
import { MdMinimize } from "react-icons/md";
import images from "../../constants/images";
import { stringify } from "postcss";

export function SkillsWindow() {
	const [hide, setHide] = useState("");

	return (
		<div hide>
			<Draggable handle={".handle"}>
				<div className={` items-center w-[500px] justify-center  flex flex-col`}>
					<div
						className={`__title.bar   w-full handle cursor-move flex bg-gray-600 justify-between  h-10 rounded-t-2xl `}
					>
						<p className="text-white  self-center text-lg font-mono ml-2">SKills</p>
						<div className="flex justify-center hover:scale-105  active:bg-lime-400  bg-red-300 rounded-md ">
							<AiOutlineClose
								onClick={() => setHide("hidden")}
								size={30}
								className="self-center cursor-pointer"
							/>
						</div>
					</div>

					<div className="grid  grid-cols-3 grid-rows-3  rounded-b-lg gap-5 bg-gray-200 p-5  w-[500px] h-fit ">
						{skillsArray.map((item) => (
							<div className="flex items-center hover:scale-105 duration-200 text-[1rem] font-sans  gap-1 flex-col">
								<Image height={50} src={item.image} />
								<p>{item.name}</p>
							</div>
						))}
					</div>
				</div>
			</Draggable>
		</div>
	);
}

export function MeWindow() {
	const [hide, setHide] = useState("");
	const [firstPic, setFirstPic] = useState(false);
	const [secondPic, setSecondPic] = useState(false);
	const [thirdPic, setThirdPic] = useState(false);
	const [fourthPic, setfourthPic] = useState(false);

	return (
		<div hide={hide}>
			<Draggable bounds={{ top: 1, bottom: 650, right: 800 }} handle={".handle"}>
				<div className="flex flex-col relative h-[400px] w-[600px]  ">
					<div
						className={`__title.bar  handle cursor-move flex w-full bg-gray-600 justify-between  h-10 rounded-t-2xl `}
					>
						<p className="text-white  self-center text-lg font-mono ml-2">ME</p>
						<div className="flex justify-center hover:scale-105  active:bg-lime-400  bg-red-300 rounded-md ">
							<AiOutlineClose
								onClick={() => setHide((prev) => "hidden")}
								size={30}
								className="self-center cursor-pointer"
							/>
						</div>
					</div>
					<div className="bg-gray-200 flex rounded-b-md items-center justify-center   gap-10 h-[200px]">
						<Image
							className="rounded-md border  border-separate shadow-2xl shadow-indigo-200 border-black  cursor-pointer hover:scale-105 duration-200"
							height={100}
							width={100}
							src={images.me1}
							onClick={() => setFirstPic((prev) => !prev)}
						/>

						<Image
							onClick={() => setSecondPic((prev) => !prev)}
							className="rounded-md border  border-separate shadow-2xl shadow-indigo-200 border-black  cursor-pointer hover:scale-105 duration-200"
							height={100}
							width={100}
							src={images.me2}
						/>
						<Image
							onClick={() => setThirdPic((prev) => !prev)}
							className="rounded-md border  border-separate shadow-2xl shadow-indigo-200 border-black  cursor-pointer hover:scale-105 duration-200"
							height={100}
							width={100}
							src={images.me3}
						/>
						<Image
							onClick={() => setfourthPic((prev) => !prev)}
							className="rounded-md border  border-separate shadow-2xl shadow-indigo-200 border-black  cursor-pointer hover:scale-105 duration-200"
							height={100}
							width={100}
							src={images.me4}
						/>
					</div>
				</div>
			</Draggable>
			{firstPic && (
				<Draggable
					className="absolute "
					bounds={".desktop"}
					defaultPosition={{ x: 100, y: -200 }}
					handle=".handle2"
				>
					<div className="flex flex-col h-96 w-96">
						<div
							className={`__title.bar  handle2 cursor-move flex w-full bg-gray-600 justify-between  h-10 rounded-t-2xl `}
						>
							<p className="text-white  self-center text-lg font-mono ml-2">
								my.picture
							</p>
							<div className="flex justify-center hover:scale-105  active:bg-lime-400  bg-red-300 rounded-md ">
								<AiOutlineClose
									onClick={() => setFirstPic((prev) => !prev)}
									size={30}
									className="self-center cursor-pointer"
								/>
							</div>
						</div>
						<Image className="rounded-b-md" width={600} src={images.me1} />
					</div>
				</Draggable>
			)}
			{secondPic && (
				<Draggable bounds={".desktop"} className=" left-40" handle=".handle2">
					<div className="absolute top-0">
						<div className="flex flex-col  h-96 w-96">
							<div
								className={`__title.bar  handle2 cursor-move flex w-full bg-gray-600 justify-between  h-10 rounded-t-2xl `}
							>
								<p className="text-white  self-center text-lg font-mono ml-2">
									my.picture
								</p>
								<div className="flex justify-center hover:scale-105  active:bg-lime-400  bg-red-300 rounded-md ">
									<AiOutlineClose
										onClick={() => setSecondPic((prev) => !prev)}
										size={30}
										className="self-center cursor-pointer"
									/>
								</div>
							</div>
							<Image className="rounded-b-md" width={600} src={images.me2} />
						</div>
					</div>
				</Draggable>
			)}
			{thirdPic && (
				<Draggable bounds={".desktop"} className=" left-40" handle=".handle2">
					<div className="absolute top-0">
						<div className="flex flex-col  h-96 w-96">
							<div
								className={`__title.bar  handle2 cursor-move flex w-full bg-gray-600 justify-between  h-10 rounded-t-2xl `}
							>
								<p className="text-white  self-center text-lg font-mono ml-2">
									my.picture
								</p>
								<div className="flex justify-center hover:scale-105  active:bg-lime-400  bg-red-300 rounded-md ">
									<AiOutlineClose
										onClick={() => setThirdPic((prev) => !prev)}
										size={30}
										className="self-center cursor-pointer"
									/>
								</div>
							</div>
							<Image className="rounded-b-md" width={600} src={images.me3} />
						</div>
					</div>
				</Draggable>
			)}
			{fourthPic && (
				<Draggable bounds={".desktop"} handle=".handle2">
					<div className="absolute top-5 left-0">
						<div className="flex flex-col h-96 w-96">
							<div
								className={`__title.bar  handle2 cursor-move flex w-full bg-gray-600 justify-between  h-10 rounded-t-2xl `}
							>
								<p className="text-white  self-center text-lg font-mono ml-2">
									my.picture
								</p>
								<div className="flex justify-center hover:scale-105  active:bg-lime-400  bg-red-300 rounded-md ">
									<AiOutlineClose
										onClick={() => setfourthPic((prev) => !prev)}
										size={30}
										className="self-center cursor-pointer"
									/>
								</div>
							</div>
							<Image className="rounded-b-md" width={600} src={images.me4} />
						</div>
					</div>
				</Draggable>
			)}
		</div>
	);
}
