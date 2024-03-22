'use client';
import React from 'react';
import {AbsoluteCenter, Box} from '@chakra-ui/react';
import {HeaderWithNav} from '@/components/Headers';

export const Messages = () => {
	return (
		<Box minH='100vh' bg='#F5F5F5'>
			<HeaderWithNav />
			<AbsoluteCenter>Messages</AbsoluteCenter>
		</Box>
	);
};

export default Messages;
