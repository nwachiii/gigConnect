'use client';
import { Box, Image, keyframes, Spinner, Text } from "@chakra-ui/react";

export default function Loading() {
	// You can add any UI inside Loading, including a Skeleton.
	return <LoadingOverlay />;
}

export const LoadingOverlay = () => {
	return (
		<Box position='fixed' top='0' left='0' width='100vw' height='100vh' backgroundColor='rgba(255, 255, 255, 0.4)' backdropFilter='blur(15px) saturate(180%)' zIndex='9999' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
			<Image src={'/img/brand/GigConnectLogo.svg'} alt='logo' py={5} px={10} animation={`${pulse} 2s infinite`} aspectRatio={'auto'} />
			<Spinner size='xl' thickness='4px' speed='0.65s' color='#4545FE' />
			<Text mt='4' fontSize='xl' color='#191919'>
				fetching page info...
			</Text>
		</Box>
	);
};

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;
