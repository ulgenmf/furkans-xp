import "./globals.css";

import "../styles/App.scss";
import "../pages/splash/Splash.scss";
import "../components/DefaultWindow/DeafultWindow.scss";
import React, { createContext, useState } from "react";
import { useContext } from "react";
export const MyContext = React.createContext();

export default function App({ Component, pageProps }) {
	const [userName, setUserName] = useState("");

	return (
		<MyContext.Provider value={[userName, setUserName]}>
			<Component {...pageProps} />;
		</MyContext.Provider>
	);
}
