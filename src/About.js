import TwoColsComponent from './TwoColsComponent';
import aboutImg from './img/team.jpg';

const About = () => {
	const title = 'About';
	const spanTitle = 'Luna Tech';
	const contents = `We harness the power of technology to streamline procurement processes and enhance your business growth through expert consulting. As your trusted business consultant and facilitator, we specialize in a myriad of services which includes technology procurement, and IT business consultancy.`;
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
