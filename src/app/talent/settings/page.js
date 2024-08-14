'use client';
import React from 'react';
import {Box} from '@chakra-ui/react';
import {HeaderWithNav} from '@/components/generic-components/Headers';
import {UserSettings} from '@/components/page-components/Settings';

export const WorkPosts = () => {
	return (
		<Box minH='100vh' bg='#F5F5F5'>
			<HeaderWithNav isTalent />
			<UserSettings />
		</Box>
	);
};

export default WorkPosts;
