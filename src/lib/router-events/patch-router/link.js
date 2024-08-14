// import NextLink from 'next/link';
import {forwardRef} from 'react';
import {Link as ChakraLink} from '@chakra-ui/react'
import {onStart} from '../events';
import {shouldTriggerStartEvent} from './should-trigger-start-event';

export const Link = forwardRef<"a">(function Link({href, onClick, ...rest}, ref) {
	const useLink = href && href.startsWith('/');
	if (!useLink) return <a href={href} onClick={onClick} {...rest} />;

	return (
		<ChakraLink
			href={href}
			onClick={(event) => {
				if (shouldTriggerStartEvent(href, event)) onStart();
				if (onClick) onClick(event);
			}}
			{...rest}
			ref={ref}
		/>
	);
});
