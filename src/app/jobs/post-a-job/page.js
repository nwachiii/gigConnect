'use client'
import React from 'react';
import {AbsoluteCenter, Box} from '@chakra-ui/react';
import { HeaderWithNav } from '@/components/Headers';

export const PostAJob = () => {
	return (
		<Box minH="100vh" bg="#F5F5F5">
			<HeaderWithNav />
			<AbsoluteCenter>PostAJob</AbsoluteCenter>
		</Box>
	);
};

export default PostAJob;
