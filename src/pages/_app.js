import "./globals.css";
import "../styles/App.scss";
import "../pages/splash/Splash.scss";
import "../components/DefaultWindow/DeafultWindow.scss";

export default function App({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
