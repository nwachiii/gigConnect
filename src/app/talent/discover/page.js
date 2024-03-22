'use client';
import React from 'react';
import {AbsoluteCenter, Box} from '@chakra-ui/react';
import {HeaderWithNav} from '@/components/Headers';

export const DiscoverTalents = () => {
	return (
		<Box minH='100vh' bg='#F5F5F5'>
			<HeaderWithNav />
			<AbsoluteCenter>Discover Talents</AbsoluteCenter>
		</Box>
	);
};

export default DiscoverTalents;
