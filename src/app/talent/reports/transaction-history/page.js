'use client';
import React from 'react';
import {Box} from '@chakra-ui/react';
import {HeaderWithNav} from '@/components/generic-components/Headers';
import {TransactionHistory} from '@/components/page-components/Reports/transaction-history';

export const Transactions = () => {
	return (
		<Box minH='100vh' bg='#F5F5F5'>
			<HeaderWithNav isTalent />
			<TransactionHistory />
		</Box>
	);
};

export default Transactions;
