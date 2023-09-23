import { ChevronRight, Person, PhoneAndroid } from '@mui/icons-material';
import { Divider, Grid, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	FinalStep,
	MailStep,
	PasswordStep,
} from '../../Components/signin-steps';

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
							xs: 'column-reverse',
							sm: 'column-reverse',
							md: 'row',
						}}
						gap={{
							xs: '8rem',
							sm: '8rem',
							md: '0rem',
						}}
						maxWidth={'1080px'}
						justifyContent={'space-between'}
						alignItems={'center'}>
						<Grid
							container
							maxWidth={{
								xs: '100%',
								sm: '80%',
								md: '40%',
							}}
							flexDirection={'column'}
							alignItems={'center'}
							justifyContent={'center'}>
							<Grid
								gap={2}
								container
								width={'100%'}
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
