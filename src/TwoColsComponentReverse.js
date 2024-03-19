const TwoColsComponentReverse = ({
	title,
	spanTitle,
	subTitle,
	img,
	alt,
	lists,
}) => {
	return (
		<article className='cols-2'>
			<section className='grid-display'>
				<header className='order2'>
					<h2>
						{title} <span>{spanTitle}</span>
					</h2>
					<p>{subTitle}</p>
				</header>
				<figure className='two-cols-img order1'>
					<img
						src={img}
						alt={alt}
					/>
				</figure>
			</section>

			<section>
				<h3 className='header-service-list'>
					Here's an in-depth look at our Procurement Expertise:
				</h3>
				<ul className='grid-display service-list'>
					{lists.map((list) => (
						<li
							key={list.key}
							className=''
						>
							{list.listItem}
						</li>
					))}
				</ul>
			</section>
		</article>
	);
};

export default TwoColsComponentReverse;
