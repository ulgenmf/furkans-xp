import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import images from "../../constants/images";
import { useState, useEffect } from "react";

function index() {
	const router = useRouter();
	const [opa, setOpa] = useState("0");
	const [isHidden, setIsHidden] = useState("");

	useEffect(() => {
		setTimeout(() => {}, setOpa("100"));
		setTimeout(() => {
			setIsHidden("hidden");
		}, 3000);
		setTimeout(() => {
			router.push("../desktop");
		}, 4000);
	}, []);

	return (
		<div className=" h-screen  overflow-clip w-screen">
			<div className={`h-screen bg-black ${isHidden} w-screen`}>
				<Image
					src={images.windows}
					alt="s"
					className={`h-screen  transation-opacity opacity-${opa}    duration-[2s] w-screen`}
				/>
			</div>{" "}
			<div
				className={`h-screen  relative flex items-center justify-center   bg-[#4F85F1]`}
			>
				<div className="bg-blue-800  absolute w-screen border-b-2  top-0 h-[15%] "></div>

				<Image src={images.windowsp} className=" h-[900px]  w-[50%]" />

				<div className="bg-blue-800 absolute border-t-2  w-screen bottom-0 h-[15%] "></div>
			</div>
		</div>
	);
}

export default index;
