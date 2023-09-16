import { Grid } from '@mui/material';
import React from 'react';
import HeroTextBanner from './hero-text-banner';

const HeroApartment = () => {
	return (
		<>
			<Grid
				height={'350px'}
				width={'1280px'}
				sx={{
					display: 'flex',
					alignSelf: 'center',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundImage:
						'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/apartment_illustration.jpg)',
					gap: 4,
					marginTop: 8,
					zindex: 1,
				}}>
				<HeroTextBanner />
			</Grid>
		</>
	);
};

export default HeroApartment;
