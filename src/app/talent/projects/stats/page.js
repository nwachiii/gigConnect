'use client';
import React from 'react';
import {Box} from '@chakra-ui/react';
import {HeaderWithNav} from '@/components/generic-components/Headers';
import {StatList} from '@/components/page-components/Projects/StatList';

export const MyStats = () => {
	return (
		<Box minH='100vh' bg='#F5F5F5'>
			<HeaderWithNav isTalent />
			<StatList />
		</Box>
	);
};

export default MyStats;
