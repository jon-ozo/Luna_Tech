import BentoGrid from './BentoGrid';
import SliderComponent from './SliderComponent';
import TwoColsComponent from './TwoColsComponent';
import SingleColsComponent from './SingleColsComponent';
import img from './img/worried-male.jpg';
import consultImg from './img/consulting.png';
import purchaseImg from './img/purchase.png';
import leaseImg from './img/lease.png';
// import propertyImg from './img/property-management.png';
import contactImg from './img/contact-methods.jpg';
import { Link } from 'react-router-dom';
import propertyImg from './img/property-management.jpg';
import consultingImg from './img/business-consulting.jpg';
import relaxedManImg from './img/relaxed-man.webp';

const Home = ({ logos }) => {
	// cols-2 component variables
	const title = 'Navigating';
	const spanTitle = 'Business Challenges';
	const subTitle = `Luna is your calm harbor. Expert consulting, stress-free property management, and thoughtful equipment leasing. Find serenity in your business journey`;
	const alt = 'worried client';

	// bento grid component variables
	const bentoTitle = "Here's why";
	const bentoSpanTitle = 'you should choose Luna Tech';
	const bentoSubTitle = `Embark on a journey where simplicity meets excellence. Join Luna for a transformative business experience.`;
	const gridContents = [
		{
			id: 1,
			title: 'Stress-Free Leasing',
			subtitle: `Elevate your operations with hassle-free equipment leasing, tailored to your needs.`,
			img: relaxedManImg,
			alt: 'relaxed business client',
		},
		{
			id: 2,
			title: 'Strategic Clarity',
			subtitle: `Gain a crystal-clear understanding of your business path with Luna's expert consulting.`,
			img: consultingImg,
			alt: 'business consultation',
		},
		{
			id: 3,
			title: 'Effortless Management',
			subtitle: `Experience seamless property solutions that free you from the complexities of real estate.`,
			img: propertyImg,
			alt: 'property managers',
		},
		{
			id: 4,
			title: 'Innovation Hub',
			subtitle: `Harness innovation through our collaborative approach, fostering growth and forward-thinking.`,
			img: '',
			alt: '',
		},
		{
			id: 5,
			title: 'Customer-Centric',
			subtitle: `Your success is our priority. Luna's services are designed to meet and exceed your unique business goals.`,
			img: '',
			alt: '',
		},
	];

	// slider component variable
	const testimonialTitle = 'Testimonials';
	const testimonialSubTitle = `These are the experiences of some of our clients.`;
	const testimonials = [
		{
			id: 1,
			clientName: 'Kemi',
			companyName: 'Moniepoint LLC',
			testimony: `Luna's contractors demonstrated utmost professionalism in orchestrating the facilitation and execution of our IT infrastructure. Kudos to the Luna team for a job well done!`,
		},
		{
			id: 2,
			clientName: 'Tinu',
			companyName: 'Cashbox',
			testimony: `Luna has played a pivotal role in facilitating significant purchases and investments for our company. Their referrals have contributed substantially to our clientele, and their involvement has been integral to our notable growth over the past year.`,
		},
		{
			id: 3,
			clientName: 'John',
			companyName: 'WeeFeex',
			testimony: `Luna has been a valuable partner in our business consultations, deploying skilled contractors to address various needs for Wefix. Their support has been instrumental in enhancing our business operations.`,
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
		<article className='hero'>
			<header className='title'>
				<h1>
					<span>Unlocking</span>
					<br></br> Opportunities, Delivering Results
				</h1>
				<p className='sub-title'>
					At Luna Technologies, Expertise Meets Innovation. We offer strategic
					solutions, while maintaining reliability & trust.
				</p>
				<section>
					<ul className='flex-display service-list'>
						<li
							key='1'
							className='flex-display'
						>
							<i className='fa-solid fa-circle-check fa-2x'></i> Consulting
						</li>
						<li
							key='2'
							className='flex-display'
						>
							<i className='fa-solid fa-circle-check fa-2x'></i> Management
						</li>
						<li
							key='3'
							className='flex-display'
						>
							<i className='fa-solid fa-circle-check fa-2x'></i> Leasing
						</li>
					</ul>
				</section>
				<div className='cta-wrapper'>
					<Link
						to='/contact'
						className='cta'
					>
						TALK TO US
					</Link>
				</div>
			</header>

			<section className='brands-wrapper'>
				<div className='brand-logo brand-wrapper-flex'>
					{logos.map((logo) => (
						<div
							key={logo.id}
							className='logo grid'
						>
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

			<div className='hero-icons'>
				<figure>
					<img
						src={consultImg}
						alt='business consultion'
					/>
				</figure>
				<figure>
					<img
						src={leaseImg}
						alt='leasing'
					/>
				</figure>
				<figure>
					<img
						src={propertyImg}
						alt='property management'
					/>
				</figure>
				<figure>
					<img
						src={purchaseImg}
						alt='purchase'
					/>
				</figure>
			</div>
		</article>
	);
};

export default Home;
