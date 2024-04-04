/* theme.ts */
import {extendTheme} from '@chakra-ui/react';
import { bgColor } from './background';

export const theme = extendTheme({
	bgColor,
	fonts: {
		heading: 'var(--font-inter)',
		body: 'var(--font-inter)',
	},
});
