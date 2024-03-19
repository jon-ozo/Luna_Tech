import { Link } from 'react-router-dom/dist';

const Hero = () => {
	return (
		<article className='hero-section'>
			<section className='container'>
				<h1>
					<span>Unlock Success with Luna - </span>
					<br></br> Your Trusted Partner in Business Growth
				</h1>
				<p className='sub-title'>
					Your Gateway to Seamless Tech Procurement and Business Consultancy.
				</p>
				<section>
					<ul className='flex-display hero-service-list'>
						<li
							key='1'
							className='flex-display'
						>
							<i className='fa-solid fa-circle-check fa-2x'></i> Consulting
						</li>
						<li
							key='2'
							className='flex-display'
						>
							<i className='fa-solid fa-circle-check fa-2x'></i> Property
							Management
						</li>
						<li
							key='3'
							className='flex-display'
						>
							<i className='fa-solid fa-circle-check fa-2x'></i> Vehicle &
							Equipment Leasing
						</li>
					</ul>
				</section>
				<div className='cta-wrapper'>
					<Link
						to='/contact'
						className='cta'
					>
						TALK TO US
					</Link>
				</div>
			</section>
		</article>
	);
};

export default Hero;
