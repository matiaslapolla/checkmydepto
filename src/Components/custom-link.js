import { Grid, Link, Typography } from '@mui/material';

const CustomLink = (props) => {
	return (
		<Grid
			item
			xs={'auto'}>
			<Link
				underline='none'
				href={props?.linkPath}>
				{props?.image ? (
					<Grid
						paddingY={1}
						paddingX={2}>
						<img
							src={props?.image}
							alt={props?.linkTitle}
							style={{
								height: '32px',
								marginTop: '8px',
							}}
						/>
					</Grid>
				) : (
					<Grid
						paddingY={1}
						paddingX={2}
						borderRadius={'1rem'}
						sx={{
							'&:hover': {
								backgroundColor: 'orange',
								color: 'white',
								transition: 'all 0.2s ease-in-out',
							},
						}}>
						<Typography
							sx={{
								'&:hover': {
									color: 'white',
									transition: 'all 0.2s ease-in-out',
								},
							}}
							color={'black'}
							variant={'body1'}
							fontWeight={'semibold'}
							letterSpacing={0.6}>
							{props?.linkTitle}
						</Typography>
					</Grid>
				)}
			</Link>
		</Grid>
	);
};

export default CustomLink;
