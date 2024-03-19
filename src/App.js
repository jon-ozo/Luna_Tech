import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Service from './Service';
import logo from './img/luna-logo.png';
import cashBox from './img/brands/logo-text.png';
import fuelPointLogo from './img/brands/fuelpoint-logo.png';
import tamakLogo from './img/brands/tamak-logo.png';
import monilogo from './img/brands/moni-logo.png';
import monielogo from './img/brands/moniepoint_logo.png';
import { Route, Routes } from 'react-router-dom';
import Contact from './Contact';
// import ErrorPage from './ErrorPage';

function App() {
	const logos = [
		{ id: 1, img: cashBox },
		{ id: 2, img: fuelPointLogo },
		{ id: 3, img: tamakLogo },
		{ id: 4, img: monilogo },
		{ id: 5, img: monielogo },
	];

	const footerLinks = [
		{ id: 1, title: 'Inquiry' },
		// { id: 2, title: 'Terms' },
		// { id: 3, title: 'Disclaimer' },
	];

	return (
		<article className='app'>
			<Header logo={logo} />
			<main>
				<Routes>
					<Route
						path='/'
						element={<Home logos={logos} />}
					/>
					<Route
						path='/home'
						element={<Home logos={logos} />}
					/>
					<Route
						path='/about'
						element={<About />}
					/>
					<Route
						path='/services'
						element={<Service />}
					/>
					{/* <Route
						path='/#faq'
						element={<Home logos={logos} />}
					/> */}
					<Route
						path='/contact'
						element={<Contact />}
					/>
				</Routes>
			</main>
			<Footer
				logo={logo}
				footerLinks={footerLinks}
			/>
		</article>
	);
}

export default App;
