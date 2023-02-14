import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import images from "../../constants/images";
// import { MyName } from "../../components/Name/MyName";
import Name from "../../components/Name/Name";
import { RiAwardFill } from "react-icons/ri";
import TypeIt from "typeit-react";
import { useState, useEffect } from "react";
function Splash() {
	const [isVisible, setIsvisible] = useState("hidden");
	const [placeHolder, setPlaceHolder] = useState("");
	function handleSubmit() {}
	const Layer1 = images.Layer1;
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

	const scaleVariants = {
		whileInView: {
			scale: [0.1, 0.7],
			opacity: [0.5, 1],
			transition: {
				duration: 1,
				ease: "easeInOut",
			},
		},
	};
	const icon = <RiAwardFill size={30} fill={"blue"} />;
	const sentence1 =
		"	Award Module Operating System v4.00APQ," +
		"" +
		"An Star Module Copy Right 1994-2024, Award Software, Inc." +
		"B1W1WC/BIW2WM BRIOS V10.2";
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsvisible("");
		}, 5000);

		return () => clearTimeout(timer);
	}, []);

	const command = "Please write your input here";
	function placeHolderHandle() {}

	return (
		<>
			<div className="mobile-device text-5xl text-center items-center flex  text-purple-400 h-screen w-screen bg-black font-V3">
				<p className="p-2">
					I see you are on a mobile device, sorry to inform you responsive
					configuration hasnt been completed yet, please try with bigger screen
					later.
				</p>
			</div>
			<div className="body__body flex  text-white flex-col  bg-black h-screen">
				<Image
					className="h-28 w-44 absolute  duration-150 body__img right-[3%] top-[3%]"
					src={Layer1}
					alt=""
				/>

				<div className="  w-full font-V3 text-3xl flex flex-col  relative">
					<TypeIt className=" tablet:hidden pc:hiddenm">Please wait...</TypeIt>
					<TypeIt options={{ speed: 5, cursor: false }}>
						{" "}
						<div className="flex name flex-row mt-2">
							<RiAwardFill size={40} fill={"blue"} />
							{sentence1}
						</div>
						<div className="flex flex-col mt-10 ml-3">
							<div id="expand " className="name">
								<p>Platform: MacIntel</p>
								<p>
									Agent: Mozilla/5.0 (Machintosh;Intel Mac Os X 10_15_7
									AppleWebKit/537/.36 (KHTML, like Gexkho) Chrome/99.0.4844.52
									Safari/537.36
								</p>
								<p>Vendor: GoooggLe Inc.</p>
							</div>
							<div className="ml-4">
								<p>Name:Muhammed Furkan Ulgen</p>
								<p>Bhirtday: 16.04.1994</p>
								<p>Place Of Birth: Istanbul/ Turkey</p>
								<p>Profession: Software Developer</p>
								<p>Place: Leipzig/ Germany</p>
							</div>
							<p className="text-lime-500 me">
								Hey, My name is Furkan, I am a software developer. Lets take a small
								tour on my portfolio shall we ?
							</p>
						</div>
					</TypeIt>
				</div>
				<div
					className={` ${isVisible} self-center flex items-center flex-col name absolute bottom-[30%] text-center`}
				>
					<Link href={"../start"}>
						<p className="self-center text-black w-52 rounded-3xl py-3 hover:bg-lime-300 hover:scale-105 duration-200  bg-yellow-50 text-center place-self-center text-2xl font-semibold">
							press enter
						</p>
					</Link>
				</div>

				<p className="absolute   bottom-2 left-2 font-V3 text-lg">
					Please wait untill booting completes, Do not press F1 or DEL to enter any
					BIOS settings
					<br />
					<span>02/09/2022-NF-CK09920-AA029LLLIQ-PP-002</span>
				</p>
			</div>
		</>
	);
}

export default Splash;
