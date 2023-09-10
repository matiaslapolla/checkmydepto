import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import getInTouch from '../../Assets/get_in_touch_pana.png';

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

	const handleSubmit = (e) => {
		e.preventDefault();
		alert('Message Sent');
	};

	const handleChange = (e) => {
		setContactForm({
			...contactForm,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<Grid
			container
			direction='column'
			justifyContent='center'
			alignItems='center'
			sx={{
				backgroundImage: `url(${getInTouch})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 1000,
				backgroundBlendMode: 'multiply',
				minHeight: '100vh',
			}}>
			<Grid
				container
				alignItems={'center'}
				justifyContent={'center'}
				sx={{
					backdropFilter: 'blur(16px)',
					minHeight: '100vh',
					minWidth: '100vw',
					backgroundColor: '#FFFFFF75',
				}}>
				<Grid
					container
					flexDirection={{ xs: 'column', sm: 'row', md: 'row' }}
					justifyContent={'center'}
					alignItems={'center'}
					maxWidth={{
						xs: '100%',
						sm: '80%',
						md: '70%',
					}}
					gap='2rem'>
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
							gutterBottom>
							Greetings from the team at CheckMyDepto!
						</Typography>
						<Typography
							variant='body2'
							fontSize={'1rem'}
							sx={{ color: 'black' }}
							letterSpacing={0.5}
							gutterBottom>
							We are here to help and answer any question you
							might have. We look forward to hearing from you.
						</Typography>
						<Typography
							variant='body2'
							fontSize={'1rem'}
							sx={{ color: 'black' }}
							letterSpacing={0.5}
							gutterBottom>
							If you are a business owner and would like to be
							featured on our website, please contact us as well.
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
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Contact;
