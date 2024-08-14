import React from 'react';
import {Flex, Stack, Text, HStack, VStack} from '@chakra-ui/react';
import {ArrowRight} from '@/assets/icons/ArrowRight';
import Link from 'next/link';
import {GCButton} from '@/ui-lib/ui-lib-components/Button';
import {PlusIconDark, PlusIconWhite} from '@/assets/icons/PlusIcon';
import {useRouter} from 'next/navigation';

export const JobPostings = () => {
	const router = useRouter();
	return (
		<Stack borderRadius={'16px'} h='383px' maxW='981px' w='full' bg='#FFFFFF'>
			<Flex h='56px' borderRadius='0px 0px 16px 16px' borderBottom='1px solid #ECECEC' w='full' align='center' px='15px' justifyContent={'space-between'}>
				<HStack spacing='13px'>
					<Text color='#2e2e2e' fontWeight={'600'} fontSize={'18px'}>
						Posting
					</Text>
					<HStack spacing='10px' h='42px' px='5px' justify={'center'} align='center' bg='#F5F5F5' borderRadius={'16px'}>
						<Text fontSize={'14px'} borderRadius={'16px'} p='5px 9px' bg='#FFFFFF'>{`Active (0)`}</Text>
						<Text fontSize={'14px'} borderRadius={'16px'} p='5px 9px' bg='#FFFFFF'>{`Archived (0)`}</Text>
					</HStack>
				</HStack>
				<Text color='#7D7D7D' fontSize={'14px'} as={Link} href='/jobs/posts' display={'flex'} gap='5px' alignItems='baseline'>
					<span>See all postings</span> <ArrowRight />
				</Text>
			</Flex>

			<VStack m='auto' maxW='327px' w='auto' textAlign={'center'}>
				<svg xmlns='http://www.w3.org/2000/svg' width='59' height='58' viewBox='0 0 59 58' fill='none'>
					<path d='M38.6176 22.487V15.1597C38.6176 10.1233 34.5358 6.04159 29.5019 6.04159C24.4656 6.01984 20.3645 10.0823 20.3428 15.1186V15.1597V22.487' stroke='#053AF9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
					<path fill-rule='evenodd' clip-rule='evenodd' d='M40.9603 50.7506H18.0396C12.3554 50.7506 7.75 46.1468 7.75 40.4677V27.1373C7.75 21.4582 12.3554 16.8545 18.0396 16.8545H40.9603C46.6446 16.8545 51.25 21.4582 51.25 27.1373V40.4677C51.25 46.1468 46.6446 50.7506 40.9603 50.7506Z' stroke='#053AF9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
				</svg>
				<Text mt={2} color='#2e2e2e' fontSize={'14px'} fontWeight={'600'}>
					No active job posts
				</Text>
				<Text mb={2} color='#7D7D7D' fontSize={'14px'} fontWeight={'400'}>
					Post a job to the marketplace <br /> and let talents come to you.
				</Text>
				<GCButton onClick={() => router.push('/client/jobs/create')} color='#4C5361' fontSize='16px' fontWeight='400' bg='#F6F7F7' w='144px' h='48px' leftIcon={<PlusIconDark />}>
					Post a Job
				</GCButton>
			</VStack>
		</Stack>
	);
};
