import {StarRating} from '@/ui-lib/ui-lib-components/StarRating';
import {Box, Button, Flex, HStack, Image, Link, Stack, StackDivider, Text} from '@chakra-ui/react';
import {CiHeart} from 'react-icons/ci';

export const JobListing = ({job, component, link, handleJob, isSaved, buttonText}) => {
	return (
		<Stack borderRadius='12px' border='1px solid #EDEEEF' p={4} gap={1}>
			<HStack>
				<Image src='/img/icons/userIcon.svg' />
				<Text>{job.clientName}</Text>
			</HStack>
			<Text fontSize={18} fontWeight={500}>
				{job.projectTitle}
			</Text>
			<HStack align={'start'} color={'#878C95'}>
				<Image src='/img/icons/location.svg' alt='location' />
				<Text>Lagos, Nigeria | {job.location}</Text>
			</HStack>
			<Flex borderRadius='16px' border='1px solid #EDEEEF' w='full' px='12px' h={'55px'} align={'center'} justifyContent={'space-between'}>
				<HStack gap={'4px'} w={'full'}>
					<CiHeart color={isSaved ? 'red' : 'black'} size={35} cursor={'pointer'} onClick={() => handleJob(job)} />
					<HStack bg={'#F6F5F5'} border={'1px solid #EDEAEC'} h={'max-content'} p={'4px 8px'} justify={'center'} borderRadius={'12px'} w={'full'} maxW={'90px'}>
						<Text fontSize={12} color={'#4C5361'}>
							Verified
						</Text>
						<Image src='/img/icons/check-verified.svg' alt='' />
					</HStack>
					<HStack color={'#4C5361'} divider={<StackDivider h={'20px'} alignSelf={'center'} dir='horizontal' color={'#4C5361'} />} w={'full'} justify={'space-evenly'} fontSize={13} whiteSpace={'nowrap'}>
						<Text>Fixed-Price</Text>
						<Text>{job.difficulty}</Text>
						<Text>Est. Budget {job.budget}</Text>
						<Text>Posted 30 minutes ago</Text>
						<StarRating size={15} w={'full'} ratingNumber={job.ratings} />
					</HStack>
				</HStack>
				<HStack>
					{component}
					<Link display={'contents'} href={link}>
						<Button bg={'#053AF9'} color={'white'} rounded={'12px'} fontWeight={400} p={'6px 16px'} w={'max-content'} fontSize={14} h={'32px'}>
							{buttonText}
						</Button>
					</Link>
				</HStack>
			</Flex>
			<Text pb={4} borderBottom={'1px solid #EDEEEF'}>
				{job.jobDescription}
			</Text>
			<Text fontWeight={500} pt={3}>
				Required Skills
			</Text>
			<Flex gap={2} flexWrap={'wrap'}>
				{job.skillsRequired.map((skill, idx) => {
					return (
						<Box key={idx} bg={'#F6F7F7'} border={'1px solid #EDEEEF'} padding={'5px 11px'} rounded={'16px'} w={'max-content'} h={'max-content'}>
							<Text whiteSpace={'nowrap'} fontSize={14} fontWeight={500} color={'#4C5361'}>
								{skill}
							</Text>
						</Box>
					);
				})}
			</Flex>
		</Stack>
	);
};
