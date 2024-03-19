import TwoColsComponent from './TwoColsComponent';
import TwoColsComponentReverse from './TwoColsComponentReverse';
import itDevelopmentImg from './img/it-development.jpg';
import procurementImg from './img/procurement.jpg';
import consultancyImg from './img/consultancy.webp';

const Service = () => {
	const title = 'I.T';
	const spanTitle = 'Business Conultancy';
	const subTitle = `Our team of experts provides comprehensive IT business consultancy services, guiding you through strategic decisions and innovative solutions. At Luna, we facilitate investment by providing expert business consultancy services. Let us guide you toward strategic decisions that drive growth and success. Here's what you can expect from our IT Business Consultancy service:`;
	const consultancyList = [
		{ key: 1, listItem: 'Strategic Planning' },
		{ key: 2, listItem: 'Innovative Solutions' },
		{ key: 3, listItem: 'Risk Management' },
		{ key: 4, listItem: 'Operational Efficiency' },
	];
	const businessConsultancyAlt = 'Shaking hands';

	// reverse row variables
	const reverseRowTitle = 'Procurement Expertise';
	const reverseRowSpanTitle = 'Expertise';
	const reverseRowSubTitle = `Our procurement services go beyond mere purchase – we help you source, purchase, and lease vehicles / equipment seamlessly, taking the hassle out of the process. Luna's Procurement Expertise is a comprehensive service designed to elevate your sourcing and acquisition experience. We understand that procurement is more than just making purchases; it's about finding the right solutions that align with your business goals. Here's an in-depth look at our Procurement Expertise:`;
	const procurementList = [
		{
			key: 1,
			listItem:
				'Strategic Sourcing: Luna specializes in strategic sourcing, ensuring that every acquisition aligns with your business strategy. We meticulously analyze your needs, identify the best suppliers, and negotiate favorable terms to maximize value.',
		},
		{
			key: 2,
			listItem:
				'Vendor Management: Our expertise extends to effective vendor management. We maintain strong relationships with reputable suppliers, ensuring that you have access to reliable and quality products. Our vendor management strategies enhance transparency, accountability, and communication throughout the procurement process.',
		},
		{
			key: 3,
			listItem:
				"Customized Solutions: We recognize that every business has unique needs. Luna's Procurement Expertise is tailored to provide customized solutions, whether you're sourcing technology, equipment, or vehicles. Our team collaborates with you to understand specific requirements and deliver solutions that meet your expectations.",
		},
	];
	const procurementAlt = 'Worldwide procurement connectivity';

	// second row variables
	const secondTitle = 'I.T';
	const secondSpanTitle = 'Development';
	const secondSubTitle = ` At Luna, we understand that IT DevOps is at the core of modern business success. Embrace a holistic approach with our expanded IT DevOps services, seamlessly integrated with a spectrum of offerings to meet all your business needs. Luna continues to excel in providing comprehensive solutions to enhance your overall business operations. This includes:`;
	const itDevelopmentlist = [
		{
			key: 1,
			listItem:
				"Infrastructure Upgrades: Stay ahead in the tech landscape with Luna's top-notch infrastructure upgrade solutions, tailored to your evolving business needs.",
		},
		{
			key: 2,
			listItem:
				"Office Relocation Services: Experience a hassle-free move with Luna's expert office relocation services, ensuring a smooth transition for your business.",
		},
		{
			key: 3,
			listItem:
				'Office Network and Internet Services: Let Luna manage your office network and internet services, optimizing connectivity and ensuring a secure and reliable connection.',
		},
		{
			key: 4,
			listItem:
				"System Purchase and Installation: Ensure seamless system integration with Luna's expert services, supporting your business operations at every level.",
		},
		{
			key: 5,
			listItem:
				'Hardware Purchase and Installation: From selecting the right hardware to flawless installation, Luna handles it all to keep your business running smoothly.',
		},
	];
	const itDevelopmentAlt = 'IT development plan';
	const listStatus = 'true';

	return (
		<>
			<TwoColsComponent
				title={title}
				spanTitle={spanTitle}
				subTitle={subTitle}
				img={consultancyImg}
				alt={businessConsultancyAlt}
				listStatus={listStatus}
				lists={consultancyList}
			/>

			<TwoColsComponentReverse
				title={reverseRowTitle}
				spanTitle={reverseRowSpanTitle}
				subTitle={reverseRowSubTitle}
				img={procurementImg}
				alt={procurementAlt}
				lists={procurementList}
			/>

			<TwoColsComponent
				title={secondTitle}
				spanTitle={secondSpanTitle}
				subTitle={secondSubTitle}
				img={itDevelopmentImg}
				alt={itDevelopmentAlt}
				listStatus={listStatus}
				lists={itDevelopmentlist}
			/>
		</>
	);
};

export default Service;
