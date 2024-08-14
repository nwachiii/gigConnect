'use client';
import React from 'react';
import {Box} from '@chakra-ui/react';
import {HeaderWithNav} from '@/components/generic-components/Headers';
import {Proposals} from '@/components/page-components/Projects/Proposal';

export const MyProposals = () => {
	return (
		<Box minH='100vh' bg='#F5F5F5'>
			<HeaderWithNav isTalent />
			<Proposals />
		</Box>
	);
};

export default MyProposals;
