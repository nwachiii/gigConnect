import {StarRating} from '@/ui-lib/ui-lib-components/StarRating';
import {Flex, Image, Stack, Text} from '@chakra-ui/react';
import {FaChevronDown} from 'react-icons/fa6';

export const PersonInfo = ({person}) => {
	return (
		<Stack rounded={'16px'} minW={'250px'} bg={'#FFF'} p={2}>
			<Stack gap={1} rounded={'16px'} align={'center'} border={'1px solid #EDEEEF'} p={4}>
				<Image src={'/img/profilePicture.png'} boxSize={'40px'} />
				<Text>{person.firstName + ' ' + person.lastName}</Text>
				<Text color={'#7D7D7D'} fontSize={12} textAlign={'center'}>
					{person.jobTitle}
				</Text>
				<StarRating ratingNumber={4} />
			</Stack>
			<Stack>
				<Flex align={'center'} justify={'space-between'} rounded={'12px'} bg={'#F6F7F7'} p={4}>
					<Text color={'#363B45'}>Search Messages</Text>
					<FaChevronDown color='#707581' />
				</Flex>
				<Flex align={'center'} justify={'space-between'} rounded={'12px'} bg={'#F6F7F7'} p={4}>
					<Text color={'#363B45'}>Files and links</Text>
					<FaChevronDown color='#707581' />
				</Flex>
				<Flex align={'center'} justify={'space-between'} rounded={'12px'} bg={'#F6F7F7'} p={4}>
					<Text color={'#363B45'}>Personal Notepad</Text>
					<FaChevronDown color='#707581' />
				</Flex>
			</Stack>
		</Stack>
	);
};
