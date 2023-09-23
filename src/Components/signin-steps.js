import { Button, Grid, TextField, Typography } from '@mui/material';
import { inputStyle } from '../Constants/InputStyle';

export const MailStep = ({ advanceStep }) => {
	return (
		<Grid
			gap={2}
			container
			border={'1px solid lightgray'}
			padding={8}
			maxWidth={{
				xs: '90%',
				sm: '70%',
				md: '60%',
			}}
			borderRadius={'8px'}
			flexDirection={'column'}>
			<Grid width={'100%'}>
				<TextField
					fullWidth
					variant={'outlined'}
					label={'Email, phone, or username'}
					placeholder={'Email, phone, or username'}
					sx={inputStyle}
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

export const PasswordStep = ({ advanceStep }) => {
	return (
		<Grid
			gap={2}
			container
			border={'1px solid lightgray'}
			padding={8}
			maxWidth={{
				xs: '90%',
				sm: '70%',
				md: '60%',
			}}
			borderRadius={'8px'}
			flexDirection={'column'}>
			<Grid width={'100%'}>
				<TextField
					fullWidth
					type='password'
					variant={'outlined'}
					label={'Password'}
					placeholder={'Password'}
					sx={inputStyle}
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

export const FinalStep = ({ advanceStep }) => {
	return (
		<Grid
			gap={2}
			container
			border={{
				xs: 'none',
				sm: '1px solid lightgray',
			}}
			padding={8}
			maxWidth={'60%'}
			borderRadius={'8px'}
			flexDirection={'column'}>
			<Grid
				container
				flexDirection={'column'}
				justifyContent={'center'}
				alignItems={'center'}
				gap={2}>
				<Grid item>
					<Typography
						variant={'h5'}
						letterSpacing={0.35}
						textAlign={'center'}
						lineHeight={1.5}>
						Everything is ready!
					</Typography>
					<Typography
						marginTop={1}
						variant={'body2'}
						letterSpacing={0.35}
						textAlign={'center'}
						lineHeight={1.5}>
						As this is a demo, you can enter any email and password.
					</Typography>
				</Grid>
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
