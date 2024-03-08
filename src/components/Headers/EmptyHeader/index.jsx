import React from 'react';
import {Flex, Link, Image} from '@chakra-ui/react';

export const HeaderEmpty = () => {
	return (
		<Flex maxW='1400px' mx='auto' px='70px'>
			<Link href='/'>
				<Image src={'/img/brand/GigConnectLogo.svg'} alt='logo' p={10} />
			</Link>
		</Flex>
	);
};
