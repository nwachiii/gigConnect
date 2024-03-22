// app/providers.tsx
'use client';

import {ChakraProvider} from '@chakra-ui/react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 1,
			refetchOnWindowFocus: false,
		},
		mutations: {
			retry: 0,
		},
	},
});

export function Providers({children}) {
	return (
		<ChakraProvider>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				{children}
			</QueryClientProvider>
		</ChakraProvider>
	);
}
queryClient.clear();
