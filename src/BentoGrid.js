const BentoGrid = ({
	bentoTitle,
	bentoSpanTitle,
	bentoSubTitle,
	gridContents,
}) => {
	return (
		<article className='full-wdth bento-bg'>
			<header>
				<h2>
					{bentoTitle} <span>{bentoSpanTitle}</span>
				</h2>
				<p>{bentoSubTitle}</p>
			</header>

			<div className='grid bento-grid'>
				{gridContents.map((gridContent) => (
					<section key={gridContent.id}>
						<header>
							<h3>{gridContent.title}</h3>
							<p>{gridContent.subtitle}</p>
						</header>
						<figure>
							<img
								src={gridContent.img}
								alt={gridContent.alt}
							/>
						</figure>
					</section>
				))}
			</div>
		</article>
	);
};

export default BentoGrid;
