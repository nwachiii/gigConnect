import {Box, Button, HStack, Heading, Text, VStack} from '@chakra-ui/react';

export const ProfileCompleteScreen = () => {
	return (
		<VStack gap={4} w={'full'} p={'32px'}>
			<Box bg={'#efefef'} borderRadius={'24px'} px={'6px'} py={'5px'}>
				<Box bg={'#fff'} px={3} py={1} border={'1px solid #dfdfdf'} borderRadius={'14px'}>
					<Text fontSize={14} fontWeight={500}>
						All Done!
					</Text>
				</Box>
			</Box>
			<Heading fontWeight={700} maxW={'225px'} fontSize={24} lineHeight={'32px'} textAlign={'center'}>
				Nice work, Ola! Your profile’s ready.
			</Heading>
			<Text textAlign={'center'} maxW={'250px'} fontSize={12} color={'#4C5361'}>
				Congratulations! With thousands to choose from, it’s time to start bidding on roles that are the perfect fit for your skills.
			</Text>
			<HStack gap={4} mb={4}>
				<Button bg={'#F6F7F7'} color={'#4C5361'} rounded={'12px'} fontWeight={400} border={'1px solid #EDEEEF'} px={4} py={'6px'} fontSize={14} h={'max-content'}>
					View profile
				</Button>
				<Button bg={'#053AF9'} color={'white'} rounded={'12px'} fontWeight={400} px={4} py={'6px'} fontSize={14} h={'max-content'}>
					Browse jobs
				</Button>
			</HStack>
		</VStack>
	);
};
