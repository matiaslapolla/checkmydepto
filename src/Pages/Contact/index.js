import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const textStyleObject = {
	'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
		borderColor: 'orange',
	},
	'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
		borderColor: 'green',
	},
	'& .MuiOutlinedInput-input': {
		color: 'black',
	},
	'& .MuiInputLabel-outlined': {
		color: 'black',
	},
	'&:hover .MuiOutlinedInput-input': {
		color: 'black',
	},
	'&:hover .MuiInputLabel-outlined': {
		color: 'green',
	},
	'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
		color: 'green',
	},
	'& .MuiInputLabel-outlined.Mui-focused': {
		color: 'green',
	},
	'&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
		borderColor: 'green',
	},
};

const Contact = () => {
	const [contactForm, setContactForm] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const [messageSent, setMessageSent] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setMessageSent(true);
	};

	const handleChange = (e) => {
		setContactForm({
			...contactForm,
			[e.target.name]: e.target.value,
		});
	};

	useEffect(() => {
		setTimeout(() => {
			setMessageSent(false);
		}, 3000);
	}, [messageSent]);

	return (
		<Grid
			container
			direction='column'
			justifyContent='center'
			alignItems='center'>
			<Grid
				paddingTop={'6rem'}
				paddingBottom={'4rem'}
				container
				alignItems={'center'}
				justifyContent={'center'}
				sx={{
					maxWidth: '1600px',
					minHeight: '100vh',
					backgroundColor: '#FFFFFF99',
				}}>
				<Grid
					container
					justifyContent={'center'}
					alignItems={'center'}
					gap={2}
					width={'fit-content'}>
					<Grid
						container
						maxWidth={{
							xs: '85%',
							md: '40%',
						}}
						flexDirection={'column'}
						backgroundColor={'orange'}
						padding={'2rem'}
						borderRadius={'2rem'}>
						<Typography
							fontSize={'2rem'}
							fontWeight={'bold'}
							color={'black'}
							sx={{
								'&:hover': {
									color: 'white',
								},
							}}
							gutterBottom>
							Hey!
						</Typography>
						<Typography
							variant='body2'
							fontSize={'1rem'}
							sx={{ color: 'black' }}
							letterSpacing={0.5}
							gutterBottom>
							We're here to assist with technical questions.
							Business owners can showcase their company on our
							website for wider exposure. Contact us for
							inquiries; we're eager to help you reach your goals.
						</Typography>
					</Grid>
					<Grid
						container
						item
						justifyContent={'center'}
						maxWidth={{
							xs: '85%',
							md: '40%',
						}}>
						<form
							onSubmit={handleSubmit}
							style={{
								display: 'flex',
								width: '85%',
							}}>
							<Grid
								container
								gap={2}
								flexDirection={'column'}
								width={'100%'}>
								<Grid
									container
									justifyContent={'space-between'}
									gap={2}
									flexDirection={'column'}>
									<TextField
										name='name'
										onChange={handleChange}
										fullWidth
										placeholder='Name'
										sx={textStyleObject}
									/>
									<TextField
										name='email'
										onChange={handleChange}
										fullWidth
										required
										placeholder='Email'
										sx={textStyleObject}
									/>
									<TextField
										name='subject'
										onChange={handleChange}
										fullWidth
										placeholder='Subject'
										sx={textStyleObject}
									/>
								</Grid>
								<Grid
									container
									gap={2}
									justifyContent={'center'}>
									<TextField
										name='message'
										onChange={handleChange}
										fullWidth
										required
										placeholder='Message'
										multiline
										rows={4}
										sx={textStyleObject}
									/>
									<Button
										variant='contained'
										type='submit'
										size='large'
										sx={{
											backgroundColor: 'orange',
											'&:hover': {
												backgroundColor: 'green',
											},
										}}>
										Send Message
									</Button>
								</Grid>
							</Grid>
						</form>
						{messageSent ? (
							<Grid
								sx={{
									marginTop: '2rem',
									paddingX: '2rem',
									paddingY: '1rem',
									backgroundColor: 'green',
									color: 'white',
									borderRadius: '2rem',
								}}>
								<Typography
									variant='h6'
									fontWeight={'bold'}>
									Thank you for your message!
								</Typography>
							</Grid>
						) : null}
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Contact;
