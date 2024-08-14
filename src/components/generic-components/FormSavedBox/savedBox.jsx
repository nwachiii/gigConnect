import {HStack, VStack, Text, Box, Image} from '@chakra-ui/react';

export const FormSavedBox = ({heading, description, tagline, handleDelete, handleEdit}) => {
	return (
		<HStack bg={'#F6F7F7'} rounded={'12px'} border={'1px solid #edeeef'} w={'full'} justify={'space-between'} p={2}>
			<VStack align={'start'} gap={1}>
				<Text fontWeight={500}>{heading}</Text>
				<Text fontSize={14}>{description}</Text>
				<Text fontSize={12}>{tagline}</Text>
			</VStack>
			<HStack justify={'end'}>
				<Box padding={'12px'} cursor={'pointer'} border={'1px solid #EDEEEF'} rounded={'full'} onClick={handleEdit}>
					<Image src='/img/icons/edit-icon.svg' alt='' />
				</Box>
				<Box padding={'12px'} cursor={'pointer'} border={'1px solid #FEE4E2'} rounded={'full'} onClick={handleDelete}>
					<Image src='/img/icons/trash-icon.svg' alt='' />
				</Box>
			</HStack>
		</HStack>
	);
};
