import { ChevronRight, Person, PhoneAndroid } from '@mui/icons-material';
import { Button, Divider, Grid, TextField, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { Router, useNavigate } from 'react-router-dom';

const textStyleObject = {
	'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
		borderColor: 'orange',
	},
	'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
		borderColor: 'darkOrange',
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
		color: 'black',
	},
	'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
		color: 'black',
	},
	'& .MuiInputLabel-outlined.Mui-focused': {
		color: 'black',
	},
	'&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
		borderColor: 'darkOrange',
	},
};

const MailStep = ({ advanceStep }) => {
	return (
		<Grid
			gap={2}
			container
			border={'1px solid lightgray'}
			padding={8}
			maxWidth={'60%'}
			borderRadius={'8px'}
			flexDirection={'column'}>
			<Grid width={'100%'}>
				<TextField
					fullWidth
					variant={'outlined'}
					label={'Email, phone, or username'}
					placeholder={'Email, phone, or username'}
					sx={textStyleObject}
				/>
			</Grid>
			<Grid
				container
				gap={2}>
				<Grid item>
					<Button
						onClick={advanceStep}
						variant={'contained'}
						sx={{
							backgroundColor: 'orange',
							'&:hover': {
								backgroundColor: 'darkOrange',
							},
						}}>
						Continue
					</Button>
				</Grid>
				<Grid item>
					<Button
						variant={'outlined'}
						sx={{
							'&:hover': {
								borderColor: 'green',
								color: 'white',
								backgroundColor: 'darkGreen',
							},
							borderColor: 'darkGreen',
							color: 'darkGreen',
						}}>
						Create account
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
};

const PasswordStep = ({ advanceStep }) => {
	return (
		<Grid
			gap={2}
			container
			border={'1px solid lightgray'}
			padding={8}
			maxWidth={'60%'}
			borderRadius={'8px'}
			flexDirection={'column'}>
			<Grid width={'100%'}>
				<TextField
					fullWidth
					type='password'
					variant={'outlined'}
					label={'Password'}
					placeholder={'Password'}
					sx={textStyleObject}
				/>
			</Grid>
			<Grid
				container
				gap={2}>
				<Grid item>
					<Button
						onClick={advanceStep}
						variant={'contained'}
						sx={{
							backgroundColor: 'orange',
							'&:hover': {
								backgroundColor: 'darkOrange',
							},
						}}>
						Submit
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
};

const FinalStep = ({ advanceStep }) => {
	return (
		<Grid
			gap={2}
			container
			border={'1px solid lightgray'}
			padding={8}
			maxWidth={'60%'}
			borderRadius={'8px'}
			flexDirection={'column'}>
			<Grid
				container
				gap={2}>
				<Grid item>
					<Button
						onClick={advanceStep}
						variant={'contained'}
						sx={{
							backgroundColor: 'orange',
							'&:hover': {
								backgroundColor: 'darkOrange',
							},
						}}>
						Enter your account
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
};

const Signin = () => {
	const [currentStep, setCurrentStep] = useState(0);

	const navigate = useNavigate();

	const handleStep = useCallback(() => {
		setCurrentStep(currentStep + 1);
	}, [currentStep]);

	const resetStep = useCallback(() => {
		setCurrentStep(0);
		navigate('/');
	}, [currentStep]);

	return (
		<>
			<Grid
				container
				minHeight={'95vh'}>
				<Grid
					container
					flexDirection={'column'}
					alignItems={'center'}>
					<Grid
						mt={'8rem'}
						container
						flexDirection={{
							xs: 'column',
							sm: 'column',
							md: 'row',
						}}
						maxWidth={'1080px'}
						justifyContent={'center'}
						alignItems={'center'}>
						<Grid
							container
							maxWidth={{
								xs: '100%',
								sm: '100%',
								md: '40%',
							}}
							flexDirection={'column'}
							alignItems={'center'}
							justifyContent={'center'}>
							<Grid
								gap={2}
								container
								width={'80%'}
								padding={4}
								flexDirection={'column'}>
								<Grid justifyContent={'flex-start'}>
									<Typography
										variant={'h5'}
										letterSpacing={0.35}
										lineHeight={1.5}>
										Enter your e-mail, phone, or username
									</Typography>
								</Grid>
								<Grid width={'100%'}>
									<Divider />
								</Grid>
								<Grid
									container
									gap={2}>
									<Typography
										variant={'body2'}
										fontSize={'1.1rem'}
										fontWeight={'500'}
										letterSpacing={0.75}
										sx={{
											'&:hover': {
												cursor: 'pointer',
												textDecoration: 'underline',
												transition:
													'all 0.3s ease-in-out',
											},
										}}>
										Report a problem
									</Typography>
									<Grid
										gap={1}
										container
										flexDirection={'column'}>
										<Grid
											sx={{
												'&:hover': {
													cursor: 'pointer',
													backgroundColor: '#dedede',
													transition:
														'all 0.3s ease-in-out',
												},
											}}
											borderRadius={'8px'}
											width={'100%'}
											backgroundColor={'#f1f3f4'}
											gap={2}
											container
											padding={1}
											justifyContent={'space-between'}
											alignItems={'center'}>
											<PhoneAndroid />
											<Typography variant={'body1'}>
												Phone lost or stolen?
											</Typography>
											<ChevronRight />
										</Grid>
										<Grid
											sx={{
												'&:hover': {
													cursor: 'pointer',
													backgroundColor: '#dedede',
													transition:
														'all 0.3s ease-in-out',
												},
											}}
											width={'100%'}
											borderRadius={'8px'}
											backgroundColor={'#f1f3f4'}
											gap={2}
											container
											padding={1}
											justifyContent={'space-between'}
											alignItems={'center'}>
											<Person />
											<Typography variant={'body1'}>
												Account recovery
											</Typography>
											<ChevronRight />
										</Grid>
									</Grid>
								</Grid>
								<Grid>
									<Typography
										sx={{ display: 'flex', gap: '0.5rem' }}
										variant={'body2'}
										fontSize={'1rem'}>
										Don't have an account?
										<Typography
											color={'#0000f9'}
											variant={'body2'}
											fontSize={'1rem'}
											sx={{
												'&:hover': {
													cursor: 'pointer',
													color: 'orange',
													transition:
														'all 0.3s ease-in-out',
												},
											}}>
											Sign up
										</Typography>
									</Typography>
								</Grid>
							</Grid>
						</Grid>
						{currentStep === 0 && (
							<MailStep advanceStep={handleStep} />
						)}
						{currentStep === 1 && (
							<PasswordStep advanceStep={handleStep} />
						)}
						{currentStep === 2 && (
							<FinalStep advanceStep={resetStep} />
						)}
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default Signin;
