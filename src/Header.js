import Nav from './Nav';

const Header = ({ logo }) => {
	const navList = [
		{ id: 1, title: 'Home' },
		{ id: 2, title: 'about' },
		{ id: 3, title: 'service' },
	];

	return (
		<header className='full-width'>
			<Nav
				logo={logo}
				navList={navList}
			/>
		</header>
	);
};

export default Header;
