import TwoColsComponent from './TwoColsComponent';
import aboutImg from './img/team.jpg';

const About = () => {
	const title = 'About';
	const spanTitle = 'Luna Tech';
	const contents = `Luna Technology & Global services LLC, your trusted partner in business
solutions and innovation. As a US-based business, we are registered to excel in various
domains, including general merchandise, contractors, machinery trading, and more.
`;
	const img = aboutImg;

	return (
		<>
			<TwoColsComponent
				title={title}
				spanTitle={spanTitle}
				subTitle={contents}
				img={img}
				alt='luna team'
			/>
		</>
	);
};

export default About;
