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
			title: 'Equipment & Machinery Purchasing Facilitation',
			subtitle: `Embark on a hassle-free journey with Luna as your partner in equipment and mahinery purchasing. We leverage our indutry expertise and network to facilitate smooth sourcing and acquisition. From identifying the right equipment to negotiating favorable terms with vendors, we hndle the intricaies, allowing ou to focus on what matters most - your business.`,
			img: '',
			alt: '',
		},
		{
			id: 5,
			title: 'Vehicle & Equipment Leasing',
			subtitle: `At Luna, we redefine how businesses approach vehicle and equipment leasing. We go beyond conventional leasing services - we take charge of the entire process. When you enter into a contract with Luna, it signifies our commitment to handle the meticulous sourcing of the right equipment, engage in vendor negotiations, and ensure a seamless leasing experience. Whether you require machinery for construction, manufacturing, or any other industry, our leasing solutions are tailored to your specific needs.`,
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
