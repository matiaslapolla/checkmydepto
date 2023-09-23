import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import background from '../../Assets/apartment_illustration_2.jpg';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		email: '',
		password: '',
		username: '',
		emailError: false,
		passwordError: false,
	});

	const validateEmail = (email) => {
		let isValid = true;
		if (email === '') {
			isValid = false;
		} else {
			const re = /\S+@\S+\.\S+/;
			isValid = re.test(email);
		}
		return isValid;
	};

	const validatePassword = (password) => {
		let isValid = true;

		if (password === '') {
			isValid = false;
			return isValid;
		}

		if (password.length < 8 || password.length > 16) {
			isValid = false;
			return isValid;
		}

		const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

		isValid = re.test(password);

		return isValid;
	};

	const verifyFields = () => {
		let emailError = false;
		let passwordError = false;

		if (!validateEmail(formData.email)) {
			emailError = true;
		}

		if (!validatePassword(formData.password)) {
			passwordError = true;
		}

		setFormData({
			...formData,
			emailError,
			passwordError,
		});

		if (emailError || passwordError) {
			return false;
		}

		return true;
	};

	const handleFormChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const isFormValid = verifyFields();
		console.log(formData);
		if (isFormValid) {
			navigate('/aftersignup');
		} else {
			console.log('form is invalid');
		}
	};

	return (
		<Grid
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100vw',
				backgroundColor: 'rgba(255,255,255,0.9)',
			}}>
			<Grid
				paddingTop={{
					xs: '1rem',
					sm: '1rem',
					md: '4rem',
				}}
				display={'flex'}
				height={'100vh'}
				flexDirection={'column'}
				alignItems={'center'}
				justifyContent={'center'}>
				<Grid
					backgroundColor={'#00000010'}
					p={2}
					borderRadius={'1rem'}>
					<Typography
						maxWidth={'45ch'}
						variant='body2'>
						As this is a demo, the data you enter will not be saved.
					</Typography>
				</Grid>
				<form onSubmit={handleSubmit}>
					<Grid
						sx={{
							maxWidth: '500px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							padding: '2rem',
							backgroundColor: 'white',
							borderRadius: '1rem',
						}}>
						<Typography
							variant='h5'
							mb={4}
							fontWeight={'bold'}>
							Create your account
						</Typography>
						<Grid
							container
							justifyContent={'center'}
							alignItems={'center'}>
							<Grid
								container
								flexDirection={{
									xs: 'column',
									sm: 'column',
									md: 'row',
									lg: 'row',
									xl: 'row',
								}}
								gap={2}
								alignItems={{
									xs: 'center',
								}}
								justifyContent={{
									xs: 'center',
								}}>
								<TextField
									sx={{
										width: {
											xs: '100%',
											sm: '100%',
											md: 'auto',
										},
									}}
									value={formData.firstName}
									onChange={handleFormChange}
									id='firstName'
									name='firstName'
									label='First name'
									type='text'
									autoComplete='off'
								/>
								<TextField
									sx={{
										width: {
											xs: '100%',
											sm: '100%',
											md: 'auto',
										},
									}}
									value={formData.lastName}
									onChange={handleFormChange}
									id='lastName'
									name='lastName'
									label='Last name'
									type='text'
									autoComplete='off'
								/>
								<TextField
									sx={{
										width: {
											xs: '100%',
											sm: '100%',
											md: 'auto',
										},
									}}
									value={formData.username}
									onChange={handleFormChange}
									id='username'
									name='username'
									label='Username'
									type='text'
									autoComplete='off'
									error={formData.emailError}
								/>
								<TextField
									sx={{
										width: {
											xs: '100%',
											sm: '100%',
											md: 'auto',
										},
									}}
									required
									value={formData.email}
									onChange={handleFormChange}
									id='email'
									name='email'
									label='Email'
									type='email'
									autoComplete='off'
									error={formData.emailError}
								/>
								<TextField
									sx={{
										width: {
											xs: '100%',
											sm: '100%',
											md: '93%',
										},
									}}
									required
									value={formData.password}
									onChange={handleFormChange}
									id='password'
									name='password'
									label='Password'
									type='password'
									autoComplete='off'
									error={formData.passwordError}
								/>
								<Typography
									my={2}
									textAlign={'center'}
									variant='body2'
									gutterBottom>
									Password must be 8-16 characters long,
									contain at least one uppercase letter, one
									lowercase letter, and one number.
								</Typography>
								<Grid
									item
									container
									xs={12}
									justifyContent={'center'}>
									<Button
										type='submit'
										variant='contained'
										sx={{
											backgroundColor: 'orange',
											'&:hover': {
												backgroundColor: 'green',
											},
										}}>
										Sign Up
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							padding: '2rem',
							backgroundColor: 'white',
							borderRadius: '1rem',
							marginTop: '1rem',
							gap: '1rem',
						}}>
						<Typography variant='body1'>
							Already have an account?
						</Typography>
						<Link
							href='/signin'
							underline='none'>
							<Typography
								paddingX={2}
								paddingY={1}
								border={'2px solid orange'}
								borderRadius={'1rem'}
								sx={{
									textDecoration: 'none',
									color: 'orange',
									'&:hover': {
										backgroundColor: 'orange',
										':only-child': {
											color: 'white',
										},
									},
								}}
								variant='body1'>
								Sign In
							</Typography>
						</Link>
					</Grid>
				</form>
			</Grid>
		</Grid>
	);
};

export default Signup;
