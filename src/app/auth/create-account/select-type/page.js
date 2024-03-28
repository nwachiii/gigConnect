/* eslint-disable @next/next/no-img-element */
'use client';
import {Footer} from '@/components/generic-components/Footer';
// import Link from 'next/link';
import {CheckboxBase} from '@/components/generic-components/CheckboxBase';
import {HeaderEmpty} from '@/components/generic-components/Headers';
import {GCButton} from '@/ui-lib/ui-lib-components/Button';
import React from 'react';
import {Box, Flex, Grid, HStack, Text, Image, Button, Heading, Link, VStack, useRadio, useRadioGroup, Stack} from '@chakra-ui/react';

const SelectionCard = ({title, description, iconSrc, ...props}) => {
	const {getInputProps, getCheckboxProps} = useRadio(props);

	const input = getInputProps();
	const checkbox = getCheckboxProps();

	return (
		<Box as='label'>
			<input {...input} />
			<VStack {...checkbox} borderWidth='1px' borderRadius='16px' p={6} shadow='md' _checked={{bg: '#053AF9', color: '#FFFFFF', transition: '200ms all ease-in-out'}} cursor='pointer' spacing={4} alignItems='center'>
				<Image {...checkbox} boxSize='58px' src={iconSrc} alt={title} _checked={{filter: 'invert(50%)'}} />
				<VStack spacing={2} alignItems='center'>
					<Heading size='md' color='currentcolor'>
						{title}
					</Heading>
					<Text fontSize='sm' textAlign='center'>
						{description}
					</Text>
				</VStack>
				<Box borderWidth='1px' width='full' />
				<Text fontWeight='500'>Select</Text>
			</VStack>
		</Box>
	);
};

// Component to manage the radio group state
const SelectionGroup = ({options, setRole}) => {
	const {getRootProps, getRadioProps} = useRadioGroup({
		name: 'accountType',
		defaultValue: options[0].value,
		onChange: (e) => {
			return setRole(e);
		},
	});

	const group = getRootProps();

	return (
		<Grid {...group} templateColumns='repeat(2, 1fr)' gap={'47px'}>
			{options.map((option) => (
				<SelectionCard key={option.value} {...getRadioProps({value: option.value})} {...option} />
			))}
		</Grid>
	);
};

export const SelectAccountType = ({handleScreen, setRole}) => {
	const options = [
		{
			title: 'Talent',
			description: 'Get started as talent looking for a gig',
			iconSrc: '/img/profile-1.svg',
			value: 'talent',
		},
		{
			title: 'Client',
			description: 'Get started as client looking to hire talent',
			iconSrc: '/img/work-1.svg',
			value: 'client',
		},
	];

	return (
		<Box bg='#ffffff' w='full'>
			<HeaderEmpty />
			<Flex justify='center' align='center' p={6}>
				<VStack spacing={8} align='stretch'>
					<VStack spacing={2}>
						<Heading textAlign='center' color='#202329' fontSize={'32px'} fontWeight={'700'}>
							Create an Account
						</Heading>
						<Text color='#4C5361' fontSize={'16px'} fontWeight={'400'} textAlign='center'>
							Select account type to proceed
						</Text>
					</VStack>
					<Stack w='647px' px='70px' h='436px' borderRadius={'16px'} border='1px solid #EDEEEF' justify={'center'} align='center' spacing='27px'>
						<SelectionGroup options={options} setRole={setRole} />

						<GCButton onClick={() => handleScreen('showCreateAccountForm')} w='371px' h='42px' bg='#0D0D0D' borderRadius='10px' color='#FFF' fontSize='14px' fontWeight='500' mx='auto'>
							Next
						</GCButton>

						<Flex justify='center' gap='8px' color='#888A8F' fontSize={'14px'} fontWeight={'400'}>
							<Text>Already have an Account? </Text>
							<Link color='#0D0D0D' href='/auth/sign-in'>
								Sign in
							</Link>
						</Flex>
					</Stack>
				</VStack>
			</Flex>
			<Footer />
		</Box>
	);
};

export default SelectAccountType;
