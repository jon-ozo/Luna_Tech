const SingleColsComponent = ({ title, subTitle, contents }) => {
	return (
		<article className='single-col-component'>
			<header>
				<h2>{title}</h2>
				<p>{subTitle}</p>
			</header>

			<div
				id='faq'
				className='faq-wrapper grid-display faq'
			>
				{contents.map((content) => (
					<details key={content.id}>
						<summary>{content.question}</summary>
						<p>{content.answer}</p>
					</details>
				))}
			</div>
		</article>
	);
};

export default SingleColsComponent;
