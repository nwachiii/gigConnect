'use client';
import React from 'react';
import {Button as ChakraButton, Spinner, HStack, ButtonGroup, Box, Icon, Text, Image} from '@chakra-ui/react';

export const sharedGCButtonProps = {
	h: '30px',
	color: '#202329',
	borderRadius: '14px',
	border: '1px solid #DFDFDF',
	background: 'transparent',
	padding: '5px 11px',
	alignItems: 'center',
	_active: {
		opacity: 0.8,
	},
	_hover: {
		transition: '200ms all ease-in-out',
		fontWeight: '700',
	},
	fontSize: '14px',
	fontStyle: 'normal',
	fontWeight: '500',
	lineHeight: '20px',
};

export const GCButton = ({variant, children, ...rest}) => {
	switch (variant) {
		case 'primary':
			return (
				<ChakraButton
					w='192px'
					bg='#4545FE'
					color='white'
					{...sharedGCButtonProps}
					fontSize={'14px'}
					fontWeight={'500'}
					borderRadius={12}
					_hover={{
						background: '',
					}}
					{...rest}>
					{children}
				</ChakraButton>
			);
		case 'btn-outline':
			return (
				<ChakraButton
					_hover={{
						background: '',
					}}
					{...sharedGCButtonProps}
					h='48px'
					w='192px'
					color='#191919'
					borderRadius={12}
					fontSize={'14px'}
					fontWeight={'400'}
					bg='transparent'
					border='1px solid #e4e4e4'
					{...rest}>
					{children}
				</ChakraButton>
			);

		case 'secondary':
			return (
				<ChakraButton
					_hover={{
						background: '',
					}}
					mt={0}
					size='lg'
					color='#4545FE'
					{...sharedGCButtonProps}
					bg='transparent'
					fontSize={'14px'}
					fontWeight={'500'}
					borderRadius='12px'
					disabled={isClicked}
					border='1px solid lightgray'
					onClick={() => setIsClicked(!isClicked)}
					{...rest}>
					{children}
				</ChakraButton>
			);
		case 'tertiary':
			return (
				<ChakraButton {...sharedGCButtonProps} mt={6} as='button' bg='#FFFFFF' fontSize='xl' borderRadius='xl' color={'#191919'} fontFamily={'heading'} {...rest}>
					{children}
				</ChakraButton>
			);
		case 'dark':
			return (
				<ChakraButton
					color='white'
					bg='black'
					w='160px'
					fontSize={'14px'}
					fontWeight={'500'}
					{...sharedGCButtonProps}
					disabled={isClicked}
					borderRadius={12}
					// _hover={{
					// 	shadow: 'md',
					// 	border: secondaryHoverBorder,
					// }}
					_hover={{
						background: '',
					}}
					onClick={() => setIsClicked(!isClicked)}
					{...rest}>
					{children}
				</ChakraButton>
			);

		default:
			return (
				<ChakraButton
					_hover={{
						background: '',
					}}
					{...sharedGCButtonProps}
					// onClick={() => !notes && !withoutLoader && setIsClicked(!isClicked)}
					{...rest}>
					{children}
				</ChakraButton>
			);
	}
};

export default GCButton;
