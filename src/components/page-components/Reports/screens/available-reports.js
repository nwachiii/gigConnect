import {Button, Image, Stack, Text, VStack} from '@chakra-ui/react';

export const AvailableReports = () => {
	return (
		<VStack minH={'50vh'} align={'center'} justify={'center'} gap={8}>
			<Stack border='1px solid #EDEEEF' align='center' justify='center' w='full' rounded='16px' p={'12px'} h='144px'>
				<Text fontSize={12} color='#4C5361'>
					You earned it! Where should we deliver your balance?
				</Text>
				<Button p={'6px 16px'} rounded={'12px'} boxShadow='0px 1px 2px 0px rgba(16, 24, 40, 0.05);' bg={'#053AF9'} fontWeight={400} color='#FFFFFF' w='145px' h='max-content' fontSize={14}>
					Set up Payments
				</Button>
			</Stack>
			<Image src='/img/icons/blueArrow.svg' />
			<Stack>
				<Text color={'#7D7D7D'} textAlign={'center'} lineHeight={'18px'} maxW={'350px'}>
					No transactions in the last 30 days.
				</Text>
				<Button p={'6px 14px'} rounded={'12px'} border='1px solid #EDEEEF' bg={'#F6F7F7'} fontWeight={400}>
					View all transactions
				</Button>
			</Stack>
		</VStack>
	);
};
