import { useState } from 'react';

const SliderComponent = ({
	testimonialTitle,
	testimonialSubTitle,
	testimonials,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleScrollLeft = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const handleScrollRight = () => {
		const isLastSlide = currentIndex === testimonials.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	return (
		<article className='slider-col-component'>
			<header>
				<h2>{testimonialTitle}</h2>
				<p>{testimonialSubTitle}</p>
			</header>

			<div className='testimonial-wrapper scroll-flex-display'>
				<section
					key={testimonials[currentIndex].id}
					className='testimonial-card'
				>
					<h3>{testimonials[currentIndex].clientName}</h3>
					<p>
						<q>{testimonials[currentIndex].testimony}</q>
					</p>
					<p className='company-name'>
						{testimonials[currentIndex].companyName}
					</p>
				</section>
			</div>
			<aside className='scroll-buttons flex-display'>
				<div
					onClick={handleScrollLeft}
					className='left-arrow'
				>
					<i className='fa-solid fa-chevron-left fa-4x'></i>
				</div>
				<div
					onClick={handleScrollRight}
					className='right-arrow'
				>
					<i className='fa-solid fa-chevron-right fa-4x'></i>
				</div>
			</aside>
		</article>
	);
};

export default SliderComponent;
