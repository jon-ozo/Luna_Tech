import BentoGrid from './BentoGrid';
import contractImg from './img/general-contract.webp';
import propertyImg from './img/property-management.jpg';
import consultingImg from './img/business-consulting.jpg';

const Service = () => {
	// const bentoTitle = 'What';
	const bentoSpanTitle = 'What we do';
	const bentoSubTitle = `Embark on a journey where simplicity meets excellence. Join Luna for a transformative business experience.`;
	const gridContents = [
		{
			id: 1,
			title: 'Business Consulting',
			subtitle: `Unlock your business's full potential with our expert business consulting services. From
strategic planning to operational efficiency, our consultants are here to guide you
towards sustainable growth and success.`,
			img: consultingImg,
			alt: 'client consultation',
		},
		{
			id: 2,
			title: 'General Contracts',
			subtitle: `For seamless project execution and unparalleled results, choose us for your general
contracting needs. We specialize in delivering high-quality projects on time and within
budget, ensuring your vision becomes a reality.`,
			img: contractImg,
			alt: 'general contractors',
		},
		{
			id: 3,
			title: 'Property Management',
			subtitle: `Let us handle the complexities of property management, ensuring your real estate
investments are optimized for maximum returns. Our team is dedicated to providing
top-notch property management services tailored to your unique needs.`,
			img: propertyImg,
			alt: 'property managers',
		},
		{
			id: 4,
			title: 'Equipment Leasing',
			subtitle: `Explore our comprehensive equipment leasing services, designed to meet the demands
of various industries. Whether you need machinery for construction, manufacturing, or
any other sector, we have the perfect leasing solutions for you.`,
			img: '',
			alt: '',
		},
		{
			id: 5,
			title: 'Vehicle Sales & Leasing',
			subtitle: `Drive your business forward with our reliable vehicle sales and leasing options. From
commercial fleets to individual vehicles, we offer a diverse range to meet your
transportation needs.`,
			img: '',
			alt: '',
		},
	];

	return (
		<>
			<BentoGrid
				// bentoitle={bentoTitle}
				bentoSpanTitle={bentoSpanTitle}
				bentoSubTitle={bentoSubTitle}
				gridContents={gridContents}
			/>
		</>
	);
};

export default Service;
