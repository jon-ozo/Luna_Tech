import { Link } from 'react-router-dom';

const BentoGrid = ({
	bentoTitle,
	bentoSpanTitle,
	bentoSubTitle,
	gridContents,
}) => {
	return (
		<article className='full-wdth bento-wrapper'>
			<header>
				<h2>
					{bentoTitle} <span>{bentoSpanTitle}</span>
				</h2>
				<p>{bentoSubTitle}</p>
			</header>

			<div className='bento-grid'>
				{gridContents.map((gridContent) => (
					<section key={gridContent.id}>
						<header>
							<h3>{gridContent.title}</h3>
							<p>{gridContent.subtitle}</p>
							<p>
								{gridContent.btn && (
									<Link
										to='/contact'
										className='cta nav-link'
									>
										Consult With Us
									</Link>
								)}
							</p>
						</header>
						<figure>
							<img
								src={gridContent.img}
								alt={gridContent.alt}
								className='bento-img'
							/>
						</figure>
					</section>
				))}
			</div>
		</article>
	);
};

export default BentoGrid;
