import BentoGrid from './BentoGrid';
import SliderComponent from './SliderComponent';
import TwoColsComponent from './TwoColsComponent';
import SingleColsComponent from './SingleColsComponent';
import img from './img/worried-male.jpg';
import Hero from './Hero';
import contactImg from './img/contact-methods.jpg';
import consultingImg from './img/business-consulting.png';
import moniepointImg from './img/brands/moniepoint_logo.png';
import cashboxImg from './img/brands/logo-text.png';
import weefeexImg from './img/brands/wee-logo.png';

const Home = ({ logos }) => {
	// cols-2 component variables
	const title = 'Navigating';
	const spanTitle = 'Business Challenges';
	const subTitle = `Luna serves as your steadfast anchor, providing expert consulting, streamlined vehicle and equipment leasing, and facilitating equipment and machinery purchasing. Discover tranquility in your business voyage as we navigate challenges on your behalf.`;
	const alt = 'worried client';

	// bento grid component variables
	const bentoTitle = "Here's why";
	const bentoSpanTitle = 'you should choose Luna Tech';
	const bentoSubTitle = `Grow your business to new heights. Embark on a journey where simplicity meets excellence. Let us help you transform your business.`;
	const gridContents = [
		{
			id: 1,
			title: 'Holistic Approach',
			subtitle: `Luna doesn't just provide services; we offer a holistic approach to business enhancement. Whether you're seeking cutting-edge technology, expert IT guidance, or streamlined procurement, we provide comprehensive solutions that address every facet of your business.`,
			img: '',
			alt: '',
			btn: false,
		},
		{
			id: 2,
			title: 'Expertise and Innovation',
			subtitle: `Benefit from Luna's wealth of expertise and commitment to innovation. Our seasoned professionals bring a wealth of knowledge, ensuring that your business stays ahead in the dynamic landscape of technology, IT solutions, and procurement strategies.`,
			img: consultingImg,
			alt: 'business consultation',
			btn: true,
		},
		{
			id: 3,
			title: 'Tailored Solutions',
			subtitle: `We understand that every business is unique. Luna's solutions are tailor-made to suit your specific needs and objectives. From technology procurement to IT consultancy and procurement expertise, our services are crafted to align seamlessly with your business goals.`,
			img: '',
			alt: '',
			btn: false,
		},
		{
			id: 4,
			title: 'Vendor Relationships',
			subtitle: `Benefit from Luna's strong relationships with reputable vendors. Our network ensures access to quality products and services, allowing your business to thrive with reliable and innovative solutions.`,
			img: '',
			alt: '',
			btn: false,
		},
		{
			id: 5,
			title: 'Comprehensive IT Services',
			subtitle: `Luna is your one-stop destination for comprehensive IT services. From technology procurement to IT business consultancy and IT DevOps, we cover the entire spectrum, supporting your business's technological evolution.`,
			img: '',
			alt: '',
			btn: false,
		},
		{
			id: 6,
			title: 'Procurement Excellence',
			subtitle: `Luna's procurement services redefine excellence. Beyond mere purchases, we provide strategic sourcing, vendor management, and cost-effective solutions. Our procurement expertise extends to vehicles, equipment, and a range of essential resources, ensuring your business operates efficiently.`,
			img: '',
			alt: '',
			btn: false,
		},
		{
			id: 7,
			title: 'Seamless Technology Procurement',
			subtitle: `Luna is your go-to tech procurement company. Our streamlined and efficient process guarantees a hassle-free experience, making the acquisition of the latest and most advanced technology a seamless journey.`,
			img: '',
			alt: '',
			btn: false,
		},
	];

	// slider component variable
	const testimonialTitle = 'Testimonials';
	const testimonialSubTitle = `These are the experiences of some of our clients.`;
	const testimonials = [
		{
			id: 1,
			clientName: 'Kemi',
			companyLogo: moniepointImg,
			testimony: `Luna's contractors demonstrated utmost professionalism in orchestrating the facilitation and execution of our IT infrastructure. Kudos to the Luna team for a job well done!`,
		},
		{
			id: 2,
			clientName: 'Sydney',
			companyLogo: cashboxImg,
			testimony: `Luna has played a pivotal role in facilitating significant purchases and investments for our company. Their referrals have contributed substantially to our clientele, and their involvement has been integral to our notable growth over the past year.`,
		},
		{
			id: 3,
			clientName: 'John',
			companyLogo: weefeexImg,
			testimony: `Luna has been a valuable partner in our business consultations, deploying skilled contractors to address various needs for Weefeex. Their support has been instrumental in enhancing our business operations.`,
		},
	];

	// cols-2 component variables - contact
	const contactTitle = 'We Guarantee';
	const contactSpanTitle = 'ground breaking results';
	const contactSubTitle = `Get in touch with us and let us help you uncover the real questions you should ask and together we will proffer solutions that last`;
	const contactAlt = 'worried client';

	// FAQ variables
	const faqTitle = 'FAQs';
	const faqSubTitle = `Below are the frequently asked questions from interested persons.`;
	const faqs = [
		{
			id: 1,
			question: 'What services does Luna Technologies offer?',
			answer:
				'Luna Business Solutions provides a comprehensive suite of services, including business consulting, property management, and equipment leasing. We offer tailored solutions to address the diverse needs of our clients.',
		},
		{
			id: 2,
			question: 'How can Luna assist my business through business consulting?',
			answer:
				'Our experienced consultants work closely with clients to analyze, strategize, and optimize their business operations. We provide insights, recommendations, and strategies to enhance overall efficiency, profitability, and sustainable growth.',
		},
		{
			id: 3,
			question: "What does Luna's property management service entail?",
			answer:
				"Luna's property management services encompass the effective handling of real estate assets. We manage properties on behalf of owners, ensuring proper maintenance, tenant relations, and financial management to maximize property value.",
		},
		{
			id: 4,
			question: 'Can Luna assist with leasing equipment for my business?',
			answer:
				'Absolutely. Luna facilitates equipment leasing, providing businesses access to a wide range of machinery and tools without the burden of ownership. This allows businesses to stay agile and cost-effective.',
		},
		{
			id: 5,
			question:
				'How does Luna tailor its services to individual business needs?',
			answer:
				'At Luna, we understand that each business is unique. Our approach involves in-depth consultations to grasp the specific requirements of our clients, allowing us to tailor our services to their distinct needs and objectives.',
		},
		{
			id: 6,
			question: "Is Luna's consulting service suitable for small businesses?",
			answer:
				"Yes, Luna's business consulting services are designed to cater to businesses of all sizes. Whether you're a startup or an established enterprise, our consultants can provide valuable insights and strategies to drive success.",
		},
		{
			id: 7,
			question:
				'How can I initiate a consultation with Luna Business Solutions?',
			answer:
				'To schedule a consultation, please visit our website or contact us at lunatechglobal@gmail.com. Our team will be happy to discuss your business needs and propose a customized solution that aligns with your goals.',
		},
		{
			id: 8,
			question: 'What industries does Luna cater to in property management?',
			answer:
				'Luna Technologies has experience in managing properties across various industries, including residential, commercial, and industrial sectors. Our expertise ensures effective management tailored to the specific requirements of each property type.',
		},
		{
			id: 9,
			question: 'Does Luna offer long-term equipment leasing options?',
			answer:
				'Yes, Luna provides flexible leasing options, including long-term arrangements. We work closely with clients to accommodate their equipment needs over extended periods, offering cost-effective solutions for sustained operational efficiency.',
		},
		{
			id: 10,
			question: "How can I get more information about Luna's services?",
			answer:
				'For more detailed information about our services, you can explore our website or reach out to our customer service at support@(domainname). We are readily available to answer any additional questions and provide the information you need.',
		},
	];

	return (
		<>
			<Hero />

			<section className='brands-wrapper'>
				<header>
					<p className='minor-heading'>Brands That Trust Us</p>
				</header>
				<div className='brand-logo flex-display'>
					{logos.map((logo) => (
						<div key={logo.id}>
							<img
								src={logo.img}
								alt='brand logo'
							/>
						</div>
					))}
				</div>
			</section>

			<TwoColsComponent
				title={title}
				spanTitle={spanTitle}
				subTitle={subTitle}
				img={img}
				alt={alt}
			/>

			<BentoGrid
				bentoTitle={bentoTitle}
				bentoSpanTitle={bentoSpanTitle}
				bentoSubTitle={bentoSubTitle}
				gridContents={gridContents}
			/>

			<TwoColsComponent
				title={contactTitle}
				spanTitle={contactSpanTitle}
				subTitle={contactSubTitle}
				img={contactImg}
				alt={contactAlt}
				btn='true'
			/>

			<SliderComponent
				testimonialTitle={testimonialTitle}
				testimonialSubTitle={testimonialSubTitle}
				testimonials={testimonials}
			/>

			<SingleColsComponent
				title={faqTitle}
				subTitle={faqSubTitle}
				contents={faqs}
			/>
		</>
	);
};

export default Home;
