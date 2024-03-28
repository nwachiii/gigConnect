'use client';
import React from 'react';
import {AbsoluteCenter, Box} from '@chakra-ui/react';
import {HeaderWithNav} from '@/components/generic-components/Headers';

export const TransactionHistory = () => {
	return (
		<Box minH='100vh' bg='#F5F5F5'>
			<HeaderWithNav />
			<AbsoluteCenter>TransactionHistory</AbsoluteCenter>
		</Box>
	);
};

export default TransactionHistory;
