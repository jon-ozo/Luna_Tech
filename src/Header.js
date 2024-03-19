import Nav from './Nav';

const Header = ({ logo }) => {
	const navList = [
		{ id: 1, title: 'Home' },
		{ id: 2, title: 'about' },
		{ id: 3, title: 'services' },
	];

	return (
		<>
			<Nav
				logo={logo}
				navList={navList}
			/>
		</>
	);
};

export default Header;
