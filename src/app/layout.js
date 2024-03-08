/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import '../styles/globals.css';
import {Providers} from './providers';
import {usePathname} from 'next/navigation';
import React, {useEffect, useState} from 'react';
import {HeaderEmpty, HeaderWithNav} from '@/components/Headers';
import {getActivePage} from '@/utils/getActivePage';

const metadata = {
	title: 'Gig Connect App',
	description: 'We connect businesses to top talents all around Africa',
};

export default function RootLayout({children}) {
	// const getPath = usePathname();
	// const [isPageNavigated, setIsPageNavigated] = useState(true);

	// useEffect(() => {
	// 	getActivePage('auth', getPath) ? setIsPageNavigated(false) : setIsPageNavigated(true);
	// }, []);

	return (
		<html lang='en'>
			<body>
				<Providers>
					{/* {isPageNavigated == 'true' ? <HeaderWithNav /> : null} */}
					{children}
				</Providers>
			</body>
		</html>
	);
}
