import { Link } from 'react-router-dom';

const TwoColsComponent = ({
	title,
	spanTitle,
	subTitle,
	img,
	alt,
	btn,
	listStatus,
	lists,
}) => {
	return (
		<article className='flex-display cols-2'>
			<section className='row'>
				<header>
					<h2>
						{title} <span>{spanTitle}</span>
					</h2>
					<p>{subTitle}</p>
					{listStatus && (
						<ul className='service-list'>
							{lists.map((list) => (
								<li key={list.key}>{list.listItem}</li>
							))}
						</ul>
					)}
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
