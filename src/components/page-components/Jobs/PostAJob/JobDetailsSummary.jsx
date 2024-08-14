import {HStack, Flex, Stack, Image, Text, Box} from '@chakra-ui/react';
import {GCButton} from '@/ui-lib/ui-lib-components/Button';
import {useRouter} from 'next/navigation';
export const JobDetailsSummary = ({handleStep, step}) => {
	const router = useRouter();

	return (
		<Flex justify={'space-between'} gap={'20px'}>
			<Stack spacing={'18px'} maxW={290}>
				<Image src='/img/summary-tag.svg' alt='' w='86px' />
				<Text w='95%' color='#202329' fontSize='32px' fontWeight='700' lineHeight='48px'>{`Job Details`}</Text>
				<Text w='95%' color='#202329' fontSize='14px' fontWeight='400' lineHeight='20px'>{`A detailed summary of your job post before posting`}</Text>
			</Stack>
			<Box w='647px' h='586px' borderRadius='16px' border='1px solid #ECECEC' background='#FFF' px='12px' pt={'27px'} mb='7px'>
				<HStack mt='50px' spacing='12px' w='full' justify={'flex-end'}>
					{/* <GCButton onClick={() => handleProgress('prev')} bg='#E5E5E5' color='#2e2e2e' h='48px' minW='68px' w='fit-content' p='12px 16px'>
						Previous
					</GCButton> */}
					<GCButton onClick={() => router.push('/client/jobs/manage-created-jobs')} bg='#053AF9' color='#F9F9F9' h='48px' minW='68px' w='fit-content' p='12px 16px'>
						Submit
					</GCButton>
				</HStack>
			</Box>
		</Flex>
	);
};
export default JobDetailsSummary;
