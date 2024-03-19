import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ logo, navList }) => {
	const [visible, setVisible] = useState('hidden');

	const handleShowMobileNav = () => {
		setVisible('');
	};

	const handleHideMoileNav = () => {
		setVisible('hidden');
	};

	return (
		<nav className='full-width flex-display bg-dark'>
			<ul className='nav-link flex'>
				{navList.map((list) => (
					<li key={list.id}>
						<Link to={`/` + list.title}>{list.title}</Link>
					</li>
				))}
			</ul>

			<figure>
				<Link to='/'>
					<img
						src={logo}
						alt='company logo'
					/>
				</Link>
			</figure>

			<aside className='flex-display'>
				<a
					href='/#faq'
					className='nav-link'
				>
					FAQ
				</a>
				{/* <Link
					to='/#faq'
					className='nav-link'
				>
					FAQ
				</Link> */}
				<Link
					to='/contact'
					className='cta nav-link'
				>
					Talk to us
				</Link>
				<i
					onClick={handleShowMobileNav}
					className='fa-solid fa-bars nav-link fa-2x'
				></i>
			</aside>
			<ul className={'mobile-nav ' + visible}>
				<i
					onClick={handleHideMoileNav}
					className='fa-solid fa-xmark fa-2x'
				></i>

				{navList.map((list) => (
					<li key={list.id}>
						<Link to={`/` + list.title}>{list.title}</Link>
					</li>
				))}
				<li>
					<Link to='/#faq'>FAQ</Link>
				</li>
				<li>
					<Link
						to='/contact'
						className='cta'
					>
						Talk to us
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
