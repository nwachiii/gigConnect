'use client';
import React from 'react';
import {Flex, Stack, Text, HStack, VStack, AbsoluteCenter} from '@chakra-ui/react';
import {ArrowRight} from '@/assets/icons/ArrowRight';
// import { Link } from '@/lib/router-events';
import Link from 'next/link';

export const WorkspaceContracts = () => {
	return (
		<Stack borderRadius={'16px'} h='fit-content' minH='250px' maxW='981px' w='full' bg='#FFFFFF'>
			<Flex h='56px' borderRadius='0px 0px 16px 16px' borderBottom='1px solid #ECECEC' w='full' align='center' px='15px' justifyContent={'space-between'}>
				<HStack spacing='13px'>
					<Text color='#2e2e2e' fontWeight={'600'} fontSize={'18px'}>
						Contracts
					</Text>
					<HStack spacing='5px' h='42px' px='5px' justify={'center'} align='center' bg='#F5F5F5' borderRadius={'16px'}>
						<Text fontSize={'14px'} borderRadius={'16px'} p='5px 9px' bg='#FFFFFF'>{`Total $ 0.00`}</Text>
					</HStack>
				</HStack>
				<Text color='#7D7D7D' fontSize={'14px'} as={Link} href='/jobs/posts' display={'flex'} gap='5px' alignItems='baseline'>
					<span>See all</span> <ArrowRight />
				</Text>
			</Flex>

			<VStack h="full" justifyContent={'center'} my="auto">
				<svg xmlns='http://www.w3.org/2000/svg' width='59' height='58' viewBox='0 0 59 58' fill='none'>
					<path fill-rule='evenodd' clip-rule='evenodd' d='M36.1141 6.6748H20.036C15.0601 6.6748 10.7705 10.7082 10.7705 15.6866V41.5763C10.7705 46.835 14.7798 51.0279 20.036 51.0279H39.3428C44.3211 51.0279 48.3545 46.5571 48.3545 41.5763V19.4251L36.1141 6.6748Z' stroke='#053AF9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
					<path d='M35.4785 6.64648V13.6766C35.4785 17.1082 38.2553 19.8922 41.6845 19.8995C44.8673 19.9067 48.1225 19.9092 48.3424 19.8947' stroke='#053AF9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
					<path d='M35.0193 37.5981H21.9766' stroke='#053AF9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
					<path d='M30.0859 25.6304H21.9756' stroke='#053AF9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
				</svg>
				<Text color='#7D7D7D' fontSize={'14px'} fontWeight={'400'}>
					You have no active contracts. View your{' '}
					<Link href='#' style={{color: '#053AF9'}}>
						ended contracts
					</Link>
				</Text>
			</VStack>
		</Stack>
	);
};

export default WorkspaceContracts;
