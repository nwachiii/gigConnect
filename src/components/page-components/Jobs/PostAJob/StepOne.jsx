import React from 'react';
import {HStack, Flex, VStack, Box, Stack, Image, Text, ListItem, List, ListIcon} from '@chakra-ui/react';
import {GCButton} from '@/ui-lib/ui-lib-components/Button';
import {InputField} from '@/app/auth/create-account/page';
import {BsDot} from 'react-icons/bs';

export const StepOne = ({handleProgress}) => {
	return (
		<Flex justify={'space-between'} gap={'20px'}>
			<Stack spacing={'18px'} maxW={290}>
				<Image src='/img/step-one-tag.svg' alt='' w='55px' />
				<Text w='80%' color='#202329' fontSize='32px' fontWeight='700' lineHeight='48px'>{`Let's start with a strong title.`}</Text>
				<Text w='80%' color='#4C5361' fontSize='14px' fontWeight='400' lineHeight='20px'>{`This helps your job post stand out to the right candidates. It’s the first thing they’ll see, so make it count!`}</Text>
			</Stack>

			<Box w='647px' h='414px' borderRadius='16px' border='1px solid #ECECEC' background='#FFF' px='12px' pt={'27px'} mb='7px'>
				<Stack textAlign={'left'} w='full' spacing='4px' h='260px'>
					<Text color='#4C5361' fontSize='14px' fontWeight='400' lineHeight='20px'>
						Write a title for your job post
					</Text>
					<InputField name='firstName' placeholder='Enter your job title' />
					<Text color='#4C5361' fontSize='14px' fontWeight='700' lineHeight='20px' mt='14px'>
						Examples
					</Text>
					<List spacing={1.5} color='#4C5361' fontSize='14px' fontStyle='normal' fontWeight='400' lineHeight='20px' maxW='242px' mt={2}>
						<HStack spacing={'4px'} align='flex-start'>
							<span>•</span>
							<span>Build responsive WordPress site with booking/payment functionality</span>
						</HStack>
						<HStack spacing={'4px'} align='flex-start'>
							<span>•</span>
							<span>Graphic designer needed to design ad creative for multiple campaigns</span>
						</HStack>
						<HStack spacing={'4px'} align='flex-start'>
							<span>•</span>
							<span>Facebook ad specialist needed for product launch</span>
						</HStack>
					</List>
				</Stack>

				<HStack mt='50px' spacing='12px' w='full' justify={'flex-end'}>
					<GCButton isDisabled={true} bg='#E5E5E5' color='#2e2e2e' h='48px' minW='68px' w='fit-content' p='12px 16px'>
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

export default StepOne;
