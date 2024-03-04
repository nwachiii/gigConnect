import {Inter} from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({subsets: ['latin']});

export const metadata = {
	title: 'Gig Connect App',
	description: 'We connect businesses to top talents all around Africa',
};

export default function RootLayout({children}) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
