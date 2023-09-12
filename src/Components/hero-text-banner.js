import { Grid, Typography } from '@mui/material';
import React from 'react';

const HeroTextBanner = () => {
	return (
		<>
			<Grid
				sx={{
					gap: 2,
					color: 'white',
					padding: 2,
					zIndex: 122,
					width: '100%',
					height: '100%',
					minHeight: 170,
					display: 'flex',
					textAlign: 'center',
					flexDirection: 'column',
					justifyContent: 'center',
				}}>
				<Grid
					container
					gap={1}
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Grid
						item
						width={{
							xs: '100%',
							sm: 'auto',
						}}>
						<Typography
							xs={3}
							color={'white'}
							letterSpacing={1.5}
							variant='h2'
							fontWeight={'bold'}>
							Welcome to{' '}
						</Typography>
					</Grid>
					<Grid item>
						<Typography
							color={'white'}
							letterSpacing={1.5}
							fontWeight={900}
							variant={'h2'}
							sx={{
								'&:hover': {
									color: 'orange',
									transition: 'all 0.2s ease-in-out',
								},
							}}>
							CheckMyDepto
						</Typography>
					</Grid>
				</Grid>
				<Grid
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Typography
						color={'white'}
						maxWidth={{
							xs: '40ch',
							sm: '75ch',
						}}
						variant='h6'>
						Apartment reviews, personal recommendations, real photos
						from the inside, and more!
					</Typography>
					<Typography
						variant='h6'
						color={'white'}>
						Your #1 resource for apartment reviews
					</Typography>
				</Grid>
			</Grid>
		</>
	);
};

export default HeroTextBanner;
