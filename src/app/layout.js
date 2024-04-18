/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import '../styles/globals.css';
import {Providers} from './providers';
import {useRouter} from 'next/navigation';
import React, {useState} from 'react';
import NProgress from 'nprogress';
import {Progress} from '@chakra-ui/react';
import {PAGE_URLS_EXCLUDED_FROM_PROGRESS_LOADER} from '../../constants/routes';

const metadata = {
	title: 'Gig Connect App',
	description: 'We connect businesses to top talents all around Africa',
};

NProgress.configure({showSpinner: true, trickleRate: 0.02, trickleSpeed: 800, easing: 'ease', speed: 500});

export default function RootLayout({children}) {
	// const getPath = usePathname();
	// const [isPageNavigated, setIsPageNavigated] = useState(true);

	// useEffect(() => {
	// 	getActivePage('auth', getPath) ? setIsPageNavigated(false) : setIsPageNavigated(true);
	// }, []);
	const router = useRouter();
	const [pageLoader, setPageLoader] = useState(false);

	const isPageTransitionable = PAGE_URLS_EXCLUDED_FROM_PROGRESS_LOADER.some((item) => item == router?.pathname);

	router?.events?.on('routeChangeStart', (url) => {
		NProgress.start();
		setPageLoader(true);
	});
	router?.events?.on('routeChangeComplete', (url) => {
		NProgress.done();
		setPageLoader(false);
	});

	return (
		<html lang='en'>
			<body>
				<Providers>
					{!isPageTransitionable ? pageLoader && <Progress w='full' size='xs' left={'0'} colorScheme='gray' top='6.94rem' position='fixed' isIndeterminate zIndex={'1300'} /> : null}
					{children}
				</Providers>
			</body>
		</html>
	);
}
