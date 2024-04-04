/* eslint-disable @next/next/no-img-element */
'use client';
import {Fragment, useState} from 'react';

import {VStack, Stack, Heading, Text, Flex} from '@chakra-ui/react';
import {HeaderEmpty} from '@/components/generic-components/Headers/EmptyHeader';
import {Footer} from '@/components/generic-components/Footer';
import {OTPInput} from 'chakra-otp-input';
import {GCButton} from '@/ui-lib/ui-lib-components/Button';
import {useRouter} from 'next/navigation';

export const EmailVerification = () => {
	const [emailOTP, setEmailOTP] = useState('');
	const router = useRouter();
	return (
		<Fragment>
			<HeaderEmpty />
			<VStack bg='#ffffff' align='center' w='full' spacing={4}>
				<Stack spacing={4} m={8} p={'28px 45px'} bg='#ffffffcc' border='1px solid #E5E5E5' rounded='12px' boxShadow='md' w='full' maxW={{base: '90%', md: '460px'}}>
					<Heading color='#0D0D0D' fontSize={'32px'} fontWeight={'600'}>
						Email <br /> Verification
					</Heading>
					<Text mt='22px' color='#0D0D0D' fontSize={'14px'} fontWeight={'400'}>
						We have sent a 6 digit OTP code to your email address and phone number. Kindly input to verify and proceed
					</Text>
					<Flex py='4' justify='center' align='center' w='full'>
						<OTPInput spacing={'16px'} style={{color: '#272727', background: '#FFF', border: '1px solid #E0E0E0'}} value={emailOTP} type='number' noInputs={6} onChange={(value) => setEmailOTP(value)} />
					</Flex>
					<Flex color='#0D0D0D' textAlign='center' fontSize='12px' fontStyle='normal' fontWeight='500' lineHeight='18px' w='full' justifyContent='space-between'>
						<Text>{`Didn't receive OTP?`}</Text>
						<Text>{`Resend in 0:25 Sec`}</Text>
					</Flex>
					<GCButton isDisabled={emailOTP?.length < 6} onClick={() => router.push('/auth/create-account/account-created')} type='button' w={'full'} bg='#0D0D0D' py={'12px'} mt={4} mb={3} h='51px' color={'#fff'}>
						Next
					</GCButton>
				</Stack>
			</VStack>
			<Footer />
		</Fragment>
	);
};

export default EmailVerification;
