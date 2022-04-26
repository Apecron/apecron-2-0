import {
	Container,
	Typography,
	Box,
	Grid,
	Item,
	Link,
	Button,
	Tooltip,
} from '@mui/material';
import React from 'react';
import Image from 'next/image';

//Icons
import LaunchpadImage from '../../../public/images/graphics/launchpad-icon-image.svg';
import LaunchpadHandshake from '../../../public/images/icons/launchpad-icon-handshake.svg';
import LaunchpadIntegration from '../../../public/images/icons/launchpad-icon-integration.svg';

//Styles
import styles from './Launchpad.module.scss';
const Launchpad = () => {
	const preventDefault = (event) => event.preventDefault();

	return (
		<>
			<Box
				className={styles['launchpad-wrapper']}
				width='100%'
				sx={{
					p: 8,
				}}
			>
				<Container maxWidth='lg'>
					{/* Launchpad Leading Header */}
					<Box
						textAlign='center'
						className={styles['launchpad-header']}
						pb={8}
					>
						<Typography
							variant='h2'
							component='h3'
							color='#010007'
							fontWeight='300'
						>
							Core Ecosystem
						</Typography>
					</Box>
					{/* End: Launchpad Leading Header */}

					<Grid
						className={styles.launchpad}
						container
						spacing={8}
						columns={12}
						direction='row'
						justifyContent='space-between'
						alignItems='flex-start'
					>
						{/* Launchpad Highlights */}
						<Grid
							item
							className={styles['launchpad-highlights']}
							spacing={10}
							direction='column'
							justifyContent='center'
							alignItems='center'
							xs={6}
						>
							<Typography
								variant='h4'
								component='h3'
								fontSize={30}
								mt={2}
								mb={3}
								color='#010007'
							>
								The Launchpad
							</Typography>
							<Typography
								variant='p'
								component='p'
								fontSize={18}
								mb={3}
								lineHeight={1.5}
							>
								As part of our core ecosystem, we are
								establishing a safe and trusted launchpad that
								will provide fully vetted projects the ability
								to partner with us and launch on our platform
								while benefiting Apecron holders thru exclusive
								airdrops and limited pre-access for
								participating in launches. The launchpad is
								designed to help raise capital to kick start
								your project!
							</Typography>

							{/* Launchpad Feature Item*/}
							<Grid
								item
								className={styles['launchpad-item']}
								pt={0}
								mt={4}
								mb={4}
								xs={12}
								display='flex'
								flexDirection='row'
							>
								<Grid
									item
									xs='auto'
									mr={2.5}
									className={styles['launchpad-icon']}
								>
									<Image
										src={LaunchpadHandshake}
										width='60'
										alt='Apecron works on any device: desktop, tablet or mobile.'
									/>
								</Grid>
								<Grid item width='100%'>
									<Typography
										variant='h4'
										component='h3'
										fontSize={18}
										mb={1}
										color='#010007'
									>
										Partnership program
									</Typography>
									<Typography
										variant='p'
										component='p'
										fontSize={16}
									>
										We pride ourselves in bringing the best
										secure projects to our platform and
										network. We fully vet all projects
										launched on our platform and establish
										clear guidelines for acceptance.
									</Typography>
								</Grid>
							</Grid>
							{/* End: Launchpad Feature Item*/}

							{/* Launchpad Feature Item*/}
							<Grid
								item
								className={styles['launchpad-item']}
								pt={0}
								mt={4}
								mb={4}
								xs={12}
								display='flex'
								flexDirection='row'
							>
								<Grid
									item
									xs='auto'
									mr={2.5}
									className={styles['launchpad-icon']}
								>
									<Image
										src={LaunchpadIntegration}
										width='60'
										alt='Apecron works on any device: desktop, tablet or mobile.'
									/>
								</Grid>
								<Grid item width='100%'>
									<Typography
										variant='h4'
										component='h3'
										fontSize={18}
										mb={1}
										color='#010007'
									>
										Integrated with our platform
									</Typography>
									<Typography
										variant='p'
										component='p'
										fontSize={16}
									>
										We deliver new projects to the Apecron
										platform exclusively before they are
										available anywhere else! Apecron holders
										will have pre-access to research and
										dive in on new gems while feeling more
										confidence in their investment all in
										ample time so they don't miss out on the
										ride!
									</Typography>
								</Grid>
							</Grid>
							{/* End: Launchpad Feature Item*/}

							<Box mt={4} onClick={preventDefault}>
								<Tooltip title='Launching Soon' placement='top'>
									<Button
										className='btn-primary'
										variant='outlined'
										href='#'
									>
										Go to Launchpad
									</Button>
								</Tooltip>
							</Box>
						</Grid>
						{/* End: Launchpad Highlights */}

						{/* Launchpad Image*/}
						<Grid
							item
							className={styles['launchpad-image']}
							spacing={2}
							direction='column'
							justifyContent='flex-end'
							alignItems='flex-end'
							xs={6}
						>
							<Image
								src={LaunchpadImage}
								alt='The Apecron launchpad will feature trusted partners and projects fully vetted and establish a safe platform for holders'
							/>
						</Grid>
						{/* End: Launchpad Image*/}
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export default Launchpad;