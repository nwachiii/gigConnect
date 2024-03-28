import {HStack, Flex, Stack, Image, Text, Box, List} from '@chakra-ui/react';
import {GCButton} from '@/ui-lib/ui-lib-components/Button';

export const StepFive = ({handleProgress}) => {
	return (
		<Flex justify={'space-between'} gap={'20px'}>
			<Stack spacing={'18px'} maxW={290}>
				<Image src='/img/step-five-tag.svg' alt='' w='55px' />
				<Text w='95%' color='#202329' fontSize='32px' fontWeight='700' lineHeight='48px'>{`Start the
Conversation.`}</Text>
				<Text color='#4C5361' fontSize='14px' fontWeight='700' lineHeight='20px' mt='14px'>
					Talent are looking for:
				</Text>
				<List spacing={1.5} color='#4C5361' fontSize='14px' fontStyle='normal' fontWeight='400' lineHeight='20px' maxW='242px' mt={2}>
					<HStack spacing={'4px'} align='flex-start'>
						<span>•</span>
						<span>Clear expectations about your task or deliverables </span>
					</HStack>
					<HStack spacing={'4px'} align='flex-start'>
						<span>•</span>
						<span>The skills required for your work </span>
					</HStack>
					<HStack spacing={'4px'} align='flex-start'>
						<span>•</span>
						<span>Good communication </span>
					</HStack>
					<HStack spacing={'4px'} align='flex-start'>
						<span>•</span>
						<span>Details about how you or your team like to work </span>
					</HStack>
				</List>
			</Stack>
			<Box w='647px' h='586px' borderRadius='16px' border='1px solid #ECECEC' background='#FFF' px='12px' pt={'27px'} mb='7px'>
				<HStack mt='50px' spacing='12px' w='full' justify={'flex-end'}>
					<GCButton onClick={() => handleProgress('prev')} bg='#E5E5E5' color='#2e2e2e' h='48px' minW='68px' w='fit-content' p='12px 16px'>
						Previous
					</GCButton>
					<GCButton onClick={() => handleProgress('next')} bg='#053AF9' color='#F9F9F9' h='48px' minW='68px' w='fit-content' p='12px 16px'>
						Next
					</GCButton>
				</HStack>
			</Box>
		</Flex>
	);
};

export default StepFive;
