import {Button, Heading, Image, ModalContent, Text, VStack} from '@chakra-ui/react';
import {useRouter} from 'next/navigation';

export const WithdrawSuccess = ({withdrawModal}) => {
	const router = useRouter();
	return (
		<ModalContent rounded={'16px'} pt={'34px'} pb={'42px'} maxW={'315px'} w={'full'}>
			<VStack align={'center'} gap={2}>
				<Image src='/img/icons/check-success.gif' boxSize={'68px'} objectFit={'cover'} />
				<Heading maxW={'225px'} lineHeight={'32px'} fontSize={20} textAlign={'center'}>
					Withdrawal successfully
				</Heading>
				<Text maxW={'250px'} color={'#4C5361'} textAlign={'center'}>
					Withdrawal to your bank account was successful
				</Text>
				<Button bg={'#053AF9'} rounded={'12px'} fontWeight={400} p={'12px 16px'} h={'max-content'} color={'#fff'} border={'1px solid #EDEEEF'} onClick={withdrawModal.onClose} w={'max-content'}>
					Okay
				</Button>
				<Button p={'6px 14px'} rounded={'12px'} border='1px solid #EDEEEF' bg={'#F6F7F7'} fontWeight={400} w={'max-content'} h='32px' color='#4C5361'>
					Message Client
				</Button>
			</VStack>
		</ModalContent>
	);
};
