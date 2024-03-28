import {HStack, Flex, Stack, Image, Text, Box} from '@chakra-ui/react';
import {GCButton} from '@/ui-lib/ui-lib-components/Button';

export const StepThree = ({handleProgress}) => {
	return (
		<Flex justify={'space-between'} gap={'20px'}>
			<Stack spacing={'18px'} maxW={290}>
				<Image src='/img/step-three-tag.svg' alt='' w='55px' />
				<Text w='95%' color='#202329' fontSize='32px' fontWeight='700' lineHeight='48px'>{`What are the main
skills required for
your work?`}</Text>
				<Text w='95%' color='#202329' fontSize='14px' fontWeight='400' lineHeight='20px'>{`Consider the size of your project and the time it will take.`}</Text>
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

export default StepThree;
