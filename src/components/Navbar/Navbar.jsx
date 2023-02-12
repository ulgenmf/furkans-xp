import React from "react";
import images from "../../constants/images";
import { MyName } from "../Name/MyName";
import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useState } from "react";
function Navbar() {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="app__navbar backdrop-blur-sm ">
			<div className="app_navbar-logo">
				{/* <div className="bg-black n flex items-center justify-center">
					<MyName />
				</div> */}
				<img src={images.logo} alt="" />
			</div>
			<ul className="app__navbar-links">
				{["home", "work", "about", "skills", "testimonials", "contact"].map(
					(item) => (
						<>
							<li className="app_flex p-text relative" key={`link-${item}`}>
								<div className="absolute right-1/2 -top-2  " />
								<a href={`#${item}`}>{item}</a>
							</li>
						</>
					)
				)}
			</ul>
			<div className="app__navbar-menu ">
				<HiMenuAlt4 onClick={() => setToggle(true)} />

				{toggle && (
					<motion.div
						transition={{ duration: 0.85, ease: "easeInOut" }}
						whileInView={{ x: [300, 0] }}
					>
						{" "}
						<HiX onClick={() => setToggle(false)} />
						<ul className="app__navbar-links">
							{["home", "work", "about", "skills", "testimonials", "contact"].map(
								(item, index) => (
									<>
										<li key={{ item }}>
											<a href={`#${item}`} onClick={() => setToggle(false)}>
												{item}
											</a>
										</li>
									</>
								)
							)}
						</ul>
					</motion.div>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
