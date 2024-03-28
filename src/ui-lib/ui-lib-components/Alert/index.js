import React from 'react';
import {Alert, AlertIcon, AlertTitle, AlertDescription} from '@chakra-ui/react';

export const RequestResponseAlert = ({status, title, description}) => {
	const getStatus = (arg) => {
		if (arg == 'isError') {
			return 'error';
		}
		if (arg == 'isLoading') {
			return 'warning';
		}
		if (arg == 'isSuccess') {
			return 'success';
		}
	};
	return (
		<Alert status={getStatus(status)} variant={'left-accent'} rounded={'md'}>
			<AlertIcon />
			<AlertTitle>{title}</AlertTitle>
			<AlertDescription>{description}</AlertDescription>
		</Alert>
	);
};
