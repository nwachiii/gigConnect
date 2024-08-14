'use client';
import React from 'react';
import {Box} from '@chakra-ui/react';
import {HeaderWithNav} from '@/components/generic-components/Headers';
import {JobApplication} from '@/components/page-components/Projects/job-components/jobApplication';

export const ApplyForAJob = () => {
	return (
		<Box minH='100vh' bg='#F5F5F5'>
			<HeaderWithNav isTalent />
			<JobApplication />
		</Box>
	);
};

export default ApplyForAJob;
