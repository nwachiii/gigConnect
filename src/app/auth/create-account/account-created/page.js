'use client';
import {Box, Text, VStack, Image, Stack, useToast, Spinner} from '@chakra-ui/react';
import {HeaderEmpty} from '@/components/generic-components/Headers';
import {Footer} from '@/components/generic-components/Footer';
import {GCButton} from '@/ui-lib/ui-lib-components/Button';
import {useRouter} from 'next/navigation';
import {useMutation} from '@tanstack/react-query';
import {logInRequest} from '@/api/auth';
import {RequestResponseAlert} from '@/ui-lib/ui-lib-components/Alert';

const AccountCreated = () => {
	const router = useRouter();
	const toast = useToast();

	const mutation = useMutation({mutationFn: (formData) => logInRequest(formData)});

	let loginInfo = typeof window !== 'undefined' && localStorage.getItem('GIG_CONNECT_SIGNUP_INFO') !== 'undefined' && JSON.parse(localStorage.getItem('GIG_CONNECT_SIGNUP_INFO'));

	const handleLoginUser = () => {
		mutation.mutate({
			email: loginInfo?.email,
			password: loginInfo?.password,
		});
	};

	if (mutation?.isSuccess) {
		localStorage.removeItem('GIG_CONNECT_SIGNUP_INFO');
		console.log(mutation?.response);
		router.push('/workspace');
	}

	return (
		<Box w='full' bg='#FFF' minH='100vh' px={{base: 4, lg: '70px'}}>
			<HeaderEmpty />

			<VStack bg='#ffffff' align='center' w='full' spacing={4} maxW={{base: '90%', md: '460px'}} mx='auto'>
				{mutation?.isError && <RequestResponseAlert status={'isError'} title={mutation.error.message || 'An Error occured'} />}
				{mutation?.isSuccess && <RequestResponseAlert status={'isSuccess'} title={'Login Successful, Redirecting to workspace...'} />}
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
					<GCButton isLoading={mutation?.isLoading} onClick={handleLoginUser} type='button' w={'full'} bg='#0D0D0D' py={'12px'} mt={4} mb={3} h='51px' color={'#fff'}>
						{mutation?.isLoading ? <Spinner color='#FFFFFF' /> : 'Continue to Dashboard'}
					</GCButton>
				</Stack>
			</VStack>

			<Footer />
		</Box>
	);
};

export default AccountCreated;
