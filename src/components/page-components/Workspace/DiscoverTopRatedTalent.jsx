'use client';
import React from 'react';
import {Text, Box, VStack, Avatar} from '@chakra-ui/react';
import Carousel from 'react-elastic-carousel';
import {UserIcon} from '@/assets/icons/Navbar/user-icon';
import {StarRating} from '@/ui-lib/ui-lib-components/StarRating';
import {GCButton} from '@/ui-lib/ui-lib-components/Button';

export const DiscoverTopRatedTalent = () => {
	const itemsToShow = 2;
	const breakPoints = [{width: 1, itemsToShow}];
	return (
		<Box borderRadius='16px' border='1px solid #ECECEC' background=' #FFF' maxW='346px' w='full' height='402px' p='10px 15px'>
			<Text color=' #2e2e2e' fontSize='18px' fontWeight='600'>
				Discover top rated talent
			</Text>
			<Text my={'15px'} color=' #7D7D7D' fontSize='14px' fontWeight='400' lineHeight='18px'>
				Pellentesque lobortis urna arcu, non gravida nulla vehicula vestibulum raesent risus massa.
			</Text>
			<Carousel
				pagination={false}
				itemPadding={[0, 5]}
				showEmptySlots={false}
				breakPoints={breakPoints}
				// disableArrowsOnEnd={true}
				enableAutoPlay={true}
				autoPlaySpeed={1500}
				showArrows={false}
				enableTilt={true}
				enableSwipe={true}>
				{talentsData?.map((item, idx) => (
					<VStack key={idx} w='230px' h='227px' borderRadius={'14px'} bg='#FFFFFF' border='1px solid #F4F4F4' justify={'center'}>
						<Avatar bg='#F5F5F5' icon={<UserIcon />} />
						<Text color='#2e2e2e' fontSize={'14px'} fontWeight={'500'}>
							{item.name}
						</Text>
						<Text color='#7D7D7D' fontSize={'10px'} fontWeight={'400'}>
							{item.role}
						</Text>
						<StarRating ratingNumber={item.starRating} />
						<GCButton onClick={() => router.push('/client/jobs/create')} color='#4C5361' fontSize='14px' fontWeight='400' bg='#F6F7F7' w='107px' h='32px'>
							View Profile
						</GCButton>
					</VStack>
				))}
			</Carousel>
			<GCButton w='full' h='32px' mt={'10px'}>
				{' '}
				See All
			</GCButton>
		</Box>
	);
};

//  <StarRating ratingNumber={1} />;

const talentsData = [
	{
		id: 1,
		name: 'James Daniels',
		starRating: 4,
		role: 'CRM Developer | Fintech',
	},
	{
		id: 2,
		name: 'James Daniels',
		starRating: 2,
		role: 'CRM Developer | Fintech',
	},
	{
		id: 3,
		name: 'James Daniels',
		starRating: 3,
		role: 'CRM Developer | Fintech',
	},
	{
		id: 4,
		name: 'James Daniels',
		starRating: 4,
		role: 'CRM Developer | Fintech',
	},
	{
		id: 5,
		name: 'James Daniels',
		starRating: 2,
		role: 'CRM Developer | Fintech',
	},
	{
		id: 6,
		name: 'James Daniels',
		starRating: 4,
		role: 'CRM Developer | Fintech',
	},
	{
		id: 7,
		name: 'James Daniels',
		starRating: 2,
		role: 'CRM Developer | Fintech',
	},
];
