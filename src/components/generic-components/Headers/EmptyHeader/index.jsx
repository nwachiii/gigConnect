import React from 'react';
import {Flex, Link, Image} from '@chakra-ui/react';

export const HeaderEmpty = () => {
	return (
		<Flex
			maxW='1400px'
			mx='auto'
			px='70px'
			// boxShadow={'0 4px 6px rgba(0, 0, 0, 0.1)'}
			w='full'
			zIndex={100}
			// bg={'#FAFAFA'}
			top={'0'}
			h={'10vh'}>
			<Link href='/'>
				<Image src={'/img/brand/GigConnectLogo.svg'} alt='logo' py={5} px={10} />
			</Link>
		</Flex>
	);
};
