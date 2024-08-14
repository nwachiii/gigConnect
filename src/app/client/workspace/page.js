'use client';
import React from 'react';
import {HeaderWithNav} from '@/components/generic-components/Headers';
import {Image, Stack, Text, Box, Flex} from '@chakra-ui/react';
import {JobPostings} from '@/components/page-components/Workspace/Postings';
import {DiscoverTopRatedTalent} from '@/components/page-components/Workspace/DiscoverTopRatedTalent';
import WorkspaceContracts from '@/components/page-components/Workspace/Contracts';
import {GCButton} from '@/ui-lib/ui-lib-components/Button';
import {PlusIconWhite} from '@/assets/icons/PlusIcon';

export const Workspace = () => {
	return (
		<Box minH='100vh' bg='#F5F5F5'>
			<HeaderWithNav />
			{/* banner */}
			<Stack maxW='1440px' w='full' padding='13px 44px' alignItems='center' justifyContent='space-between' spacing='36px' mx='auto'>
				{/* Subnav */}
				<Flex w='full' align='center' justifyContent={'space-between'}>
					<Box color='#2E2E2E' lineHeight='18px'>
						<Text display={'flex'} gap={2} fontSize='24px' fontWeight='600'>
							<span>Your Workspace </span> <Image src='/img/waving-hand.svg' alt='waving hand' />
						</Text>
						<Text mt={2} color='#2E2E2E' fontSize='14px' fontWeight='400'>
							Welcome to your workspace Ola
						</Text>
					</Box>
					<GCButton color='#F9F9F9' fontSize='16px' fontWeight='400' bg='#053AF9' w='144px' h='48px' leftIcon={<PlusIconWhite />}>
						Post a Job
					</GCButton>
				</Flex>

				{/* Banner */}
				<Flex h='58px' bg='#202329' align='center' p='13px 15px 13px 18px' w='full' borderRadius={'16px'} justify={'space-between'}>
					<Text color='#FFFFFF' fontSize={'14px'} fontWeight={'500'}>
						Complete your account setup to build trust and connect with talents
					</Text>
					<GCButton color='#4C5361' fontSize='14px' fontWeight='400' bg='#F6F7F7' w='106px' h='32px'>
						Get Started
					</GCButton>
				</Flex>

				{/* Main Content */}
				<Flex w='full' columnGap='20px'>
					<Stack w='full' spacing='20px'>
						<JobPostings />
						<WorkspaceContracts />
					</Stack>
					<DiscoverTopRatedTalent />
				</Flex>
			</Stack>
		</Box>
	);
};

export default Workspace;
