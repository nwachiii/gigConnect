'use client';
import React, {Fragment, useEffect, useState} from 'react';
import {Center, Box, Stack, HStack, Text, Flex} from '@chakra-ui/react';
import {HeaderWithNav} from '@/components/generic-components/Headers';
import ScrollToTop from '@/utils/scrollToTop';
import {JobDetailsSummary, StepFive, StepFour, StepOne, StepThree, StepTwo} from '@/components/page-components/Jobs/PostAJob';
import {GCButton} from '@/ui-lib/ui-lib-components/Button';

export const PostAJob = () => {
	const [step, setStep] = useState(0);

	const handleProgress = (arg) => {
		if (step > 0 && arg == 'prev') {
			setStep(step - 1);
		}
		if (step <= 5 && arg == 'next') {
			setStep(step + 1);
		}
	};

	useEffect(() => {
		ScrollToTop();
	}, [step]);
	const SubPages = [<StepOne key={0} handleProgress={handleProgress} step={step} />, <StepTwo key={1} handleProgress={handleProgress} step={step} />, <StepThree key={2} handleProgress={handleProgress} step={step} />, <StepFour key={3} handleProgress={handleProgress} step={step} />, <StepFive key={4} handleProgress={handleProgress} step={step} />, <JobDetailsSummary key={5} handleProgress={handleProgress} step={step} />];

	return (
		<Box minH='100vh' bg='#F5F5F5'>
			<HeaderWithNav />

			<Center>
				<Stack w='full' maxW='982px' mt={'20px'} spacing={'16px'}>
					{/* Banner */}
					<Banner />
					<Box w='full' borderRadius=' 16px 16px' p='12.5px' bg='#FFFFFF'>
						<HStack borderBottom='1px solid #ECECEC' w='full' height='38px' justify={'space-between'} mb={3}>
							<Text>Post a Job</Text>
						</HStack>
						{/* Post a Job Component */}
						{SubPages[step]}
					</Box>
				</Stack>
			</Center>
		</Box>
	);
};

export default PostAJob;

const Banner = () => {
	return (
		<Flex h='58px' bg='#202329' align='center' p='13px 15px 13px 18px' w='full' borderRadius={'16px'} justify={'space-between'}>
			<Text color='#FFFFFF' fontSize={'14px'} fontWeight={'500'}>
				Complete your account setup to build trust and connect with talents
			</Text>
			<GCButton color='#4C5361' fontSize='14px' fontWeight='400' bg='#F6F7F7' w='106px' h='32px'>
				Get Started
			</GCButton>
		</Flex>
	);
};
