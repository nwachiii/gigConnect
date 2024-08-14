/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import 'nprogress/nprogress.css';
import '../styles/globals.css';
import {Providers} from './providers';
import {usePathname, useRouter} from 'next/navigation';
import {useEffect, useState} from 'react';
import NProgress from 'nprogress';
import {Progress} from '@chakra-ui/react';
import {PAGE_URLS_EXCLUDED_FROM_PROGRESS_LOADER} from '../../constants/routes';
import {LoadingOverlay} from '@/components/generic-components/Loaders';
import NextTopLoader from 'nextjs-toploader';
import { HandleOnComplete } from '@/lib/router-events';

const metadata = {
	title: 'Gig Connect App',
	description: 'We connect businesses to top talents all around Africa',
};

NProgress.configure({showSpinner: true, trickleRate: 0.02, trickleSpeed: 800, easing: 'ease', speed: 500});

export default function RootLayout({children}) {
	const router = useRouter();
	const pathname = usePathname();
	const [pageLoader, setPageLoader] = useState(false);

	const isPageTransitionable = PAGE_URLS_EXCLUDED_FROM_PROGRESS_LOADER.some((item) => item == router?.asPath);

	// console.log('load', pageLoader);

	// useEffect(() => {
	// 	const handleStart = (url) => {
	// 		if (url !== router.asPath) {
	// 			setPageLoader(true);
	// 			console.log('has started');
	// 			NProgress.start();
	// 		}
	// 	};

	// 	const handleComplete = () => {
	// 		setPageLoader(false);
	// 		console.log('has stopped');
	// 		NProgress.done();
	// 	};
	// 	router?.events?.on('routeChangeStart', handleStart);
	// 	router?.events?.on('routeChangeComplete', handleComplete);
	// 	router?.events?.on('routeChangeError', handleComplete);

	// 	return () => {
	// 		router?.events?.off('routeChangeStart', handleStart);
	// 		router?.events?.off('routeChangeComplete', handleComplete);
	// 		router?.events?.off('routeChangeError', handleComplete);
	// 	};
	// }, [router?.events]);

	return (
		<html lang='en'>
			<body>
				{/* {Boolean(pageLoader) ? (
					<>
						<Progress w='full' size='xs' left={'0'} colorScheme='gray' top='6.94rem' position='fixed' isIndeterminate zIndex={'1300'} />
						 <LoadingOverlay />;
					</>
				) : null} */}
				<Providers>
					{children}
					<HandleOnComplete />
				</Providers>
			</body>
		</html>
	);
}
