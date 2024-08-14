'use client';
import React from 'react';
import {AbsoluteCenter, Box} from '@chakra-ui/react';
import {HeaderWithNav} from '@/components/generic-components/Headers';

export const HireTalents = () => {
	return (
		<Box minH='100vh' bg='#F5F5F5'>
			<HeaderWithNav />
			<AbsoluteCenter>Hire Talents</AbsoluteCenter>
		</Box>
	);
};

export default HireTalents;
