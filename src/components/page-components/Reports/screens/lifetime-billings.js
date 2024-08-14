import {Button, Divider, Flex, HStack, Image, Stack, Text, VStack} from '@chakra-ui/react';

export const LifetimeBillings = () => {
	return (
		<VStack minH={'50vh'} align={'center'} gap='12px'>
			<HStack w='full' justify='end'>
				<Button fontWeight={400} p='8px 16px' color='#FFF' border='1px solid #EDEEEF' bg='#053AF9' rounded='12px' w='145px' h='40px'>
					Download CSV
				</Button>
			</HStack>
			<Divider />
			<Stack minH='460px' align='center' justify='center' w='full' gap='18px'>
				<Image src='/img/icons/folderIcon.svg' boxSize='60px' />
				<Text textAlign={'center'} maxW={'330px'} lineHeight='24px' fontWeight={700}>
					There are no earnings to display for the selected date range.
				</Text>
				<Text color={'#7D7D7D'} textAlign={'center'} lineHeight={'18px'} maxW={'350px'}>
					If you believe this is a mistake, please contact customer support.
				</Text>
				<Button p={'6px 14px'} rounded={'12px'} border='1px solid #EDEEEF' bg={'#F6F7F7'} fontWeight={400} fontSize={14} w='200px'>
					Contact customer support
				</Button>
			</Stack>
		</VStack>
	);
};
