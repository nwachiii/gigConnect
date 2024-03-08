'use client';
import {Box, Text, VStack, Image, Stack} from '@chakra-ui/react';
import {HeaderEmpty} from '@/components/Headers';
import {Footer} from '@/components/Footer';
import {GCButton} from '@/ui-lib/ui-lib-components/Button';
import {useRouter} from 'next/navigation';

const AccountCreated = () => {
	const router = useRouter();
	return (
		<Box w='full' bg='#FFF' minH='100vh' px={{base: 4, lg: '70px'}}>
			<HeaderEmpty />

			<VStack bg='#ffffff' align='center' w='full' spacing={4}>
				<Stack spacing={4} m={8} p={'28px 45px'} bg='#ffffffcc' border='1px solid #E5E5E5' rounded='12px' boxShadow='md' w='full' maxW={{base: '90%', md: '460px'}} align={'center'}>
					<Image src='/img/check-circle.svg' w={16} h={16} alt='' />
					<Text color='#0D0D0D' fontSize={'24px'} fontWeight={'800'} align='center'>
						Account Created
					</Text>
					<Text mb='34px' align='center' color='#0D0D0D' fontSize={'14px'} fontWeight={'400'}>
						Donec eget elementum dui. Morbi dignissim orci
						<br />
						sed nulla luctus, at interdum justo dapibus.
						<br /> Praesent turpis dolor.
					</Text>
					<GCButton onClick={() => router.push('/workspace')} type='button' w={'full'} bg='#0D0D0D' py={'12px'} mt={4} mb={3} h='51px' color={'#fff'}>
						Continue to Dashboard
					</GCButton>
				</Stack>
			</VStack>

			<Footer />
		</Box>
	);
};

export default AccountCreated;
