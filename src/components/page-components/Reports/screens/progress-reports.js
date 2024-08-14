import {Image, Text, VStack} from '@chakra-ui/react';

export const WorkInProgress = ({desc}) => {
	return (
		<VStack minH={'50vh'} align={'center'} justify={'center'} gap={4}>
			<Image src='/img/icons/suitcase.svg' />
			<Text color='#878C95' fontWeight={600}>
				You have no {desc}
			</Text>
		</VStack>
	);
};
