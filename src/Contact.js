import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'gmail_service',
				'template_ux116fi',
				form.current,
				'rrg6q72AOcAvMiuIO'
			)
			.then(
				(result) => {
					console.log(result.text);
					result.text === 'OK'
						? alert('Email sent successfully')
						: alert('Email not sent');
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<article className='contact-form'>
			<form
				ref={form}
				onSubmit={sendEmail}
			>
				<fieldset>
					<legend>Inquiry Information</legend>

					<div className='form-input'>
						<label htmlFor='name'>Full Name</label>
						<input
							type='text'
							id='name'
							name='name'
							placeholder='Full Name'
							required
						/>
					</div>
					<div className='form-input'>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							id='email'
							name='email'
							placeholder='Email'
							required
						/>
					</div>
					{/* <div className='form-input'>
						<label htmlFor='subject'>Subject</label>
						<input
							type='text'
							id='subject'
							placeholder='Subject'
							required
						/>
					</div> */}
					<div className='form-input'>
						<label htmlFor='message'>Inquiry</label>
						<textarea
							id='message'
							name='message'
							cols='30'
							rows='10'
							required
						></textarea>
					</div>
					<div className='form-input'>
						<button
							type='submit'
							className='cta'
						>
							Send
						</button>
					</div>
				</fieldset>
			</form>
		</article>
	);
};

export default Contact;
