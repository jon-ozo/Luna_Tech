import { Link } from 'react-router-dom';

const TwoColsComponent = ({ title, spanTitle, subTitle, img, alt, btn }) => {
	return (
		<article className='flex-display cols-2'>
			<section className='row'>
				<header>
					<h2>
						{title} <span>{spanTitle}</span>
					</h2>
					<p>{subTitle}</p>
					{btn && (
						<Link
							to='/contact'
							className='cta'
						>
							GOT QUESTIONS?
						</Link>
					)}
				</header>
			</section>
			<section className='row'>
				<figure className='two-cols-img'>
					<img
						src={img}
						alt={alt}
					/>
				</figure>
			</section>
		</article>
	);
};

export default TwoColsComponent;
