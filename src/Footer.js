import { Link } from 'react-router-dom';

const Footer = ({ logo, footerLinks }) => {
	const date = new Date().getFullYear();

	return (
		<footer className='grid-display full-width'>
			<figure>
				<Link to='/'>
					<img
						src={logo}
						alt='company logo'
					/>
				</Link>
				<h3>Luna Technology & Global services LLC</h3>
				<figcaption>
					Your trusted partner in business solutions and innovation. As a
					US-based business, we are registered to excel in various domains,
					including general merchandise, contractors, machinery trading, and
					more.
				</figcaption>
			</figure>

			<section>
				<h3>Help Center</h3>
				<ul>
					{footerLinks.map((list) => (
						<li key={list.id}>
							<Link to={`/contact`}>{list.title}</Link>
						</li>
					))}
				</ul>
			</section>

			<section>
				<h3>Socials</h3>
				<ul>
					<li key='1'>
						<a href='https://www.facebok.com'>
							<i className='fa-brands fa-square-facebook'></i>
							<span>Facebook</span>
						</a>
					</li>
					<li key='2'>
						<a href='https://www.twitter.com'>
							<i className='fa-brands fa-square-x-twitter'></i>
							<span>Twitter</span>
						</a>
					</li>
					<li key='3'>
						<a href='https://www.instagram.com'>
							<i className='fa-brands fa-square-instagram'></i>
							<span>Instagram</span>
						</a>
					</li>
				</ul>
			</section>

			<section>
				<h3>Contact</h3>
				<ul>
					<li key='1'>
						<i className='fa-solid fa-location-dot'></i>
						<span>Address: 8, The Green Suite A , Dover DE 19901</span>
					</li>
					{/* <li key='2'>
						<i className='fa-solid fa-square-phone'></i>
						<span>Phone: +234 805 333 3751</span>
					</li> */}
					<li key='3'>
						<i className='fa-solid fa-envelope'></i>
						<span>Email: info@lunatechcorp.com</span>
					</li>
				</ul>
			</section>

			<p className='copyright'>
				Copyright &copy; {date} Luna Tech Corp. All Rghts Reserved. Designed By{' '}
				<a href='weegroup.com'>WBM</a>
			</p>
		</footer>
	);
};

export default Footer;
