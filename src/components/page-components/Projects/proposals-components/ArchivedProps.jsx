import {HStack, Image, Stack, Text} from '@chakra-ui/react';

export const ArchivedProposals = () => {
	return (
		<Stack>
			<HStack borderRadius='12px' border='1px solid #EDEEEF' w='full' p={4} justify={'space-between'} gap={4}>
				<Stack gap={2}>
					<Text fontWeight={500}>Archived proposals (0)</Text>
					<Text fontSize={14}>This screen displays all of your archived proposals. It includes the date communication began with the client and the reason the proposal was archived.</Text>
				</Stack>
				<Image src='/img/icons/rightArrow.svg' />
			</HStack>
			<HStack borderRadius='12px' border='1px solid #EDEEEF' w='full' p={4} justify={'space-between'} gap={4}>
				<Stack gap={2}>
					<Text fontWeight={500}>Archived interviews (0)</Text>
					<Text fontSize={14}>These are interview invitations which have been archived.</Text>
				</Stack>
				<Image src='/img/icons/rightArrow.svg' />
			</HStack>
		</Stack>
	);
};
