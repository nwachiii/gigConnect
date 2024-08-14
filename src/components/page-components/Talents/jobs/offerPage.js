import {techJobs} from '@/lib';
import {Box, Button, Checkbox, Flex, HStack, Heading, Image, Stack, Text, VStack, useDisclosure} from '@chakra-ui/react';
import {useParams, useRouter} from 'next/navigation';
import {useState} from 'react';
import {BsChevronLeft} from 'react-icons/bs';
import dayjs from 'dayjs';
import {StarRating} from '@/ui-lib/ui-lib-components/StarRating';
import {OfferAccepted, OfferDeclined} from './modals';

export const OfferPage = () => {
	const router = useRouter();
	const query = useParams();
	const job = techJobs.find((job) => job.id === Number(query?.id));
	const currentIndex = techJobs.indexOf(job);
	const nextIndex = (currentIndex + 1) % techJobs.length;
	const nextJob = techJobs[nextIndex];
	const [isChecked, setIsChecked] = useState(false);
	const offerModal = useDisclosure();
	const offerDeclinedModal = useDisclosure();

	return (
		<Stack maxW='1440px' w='full' padding='16px 44px' alignItems='center' justifyContent='space-between' spacing='36px' mx='auto'>
			{/* Main Content */}
			<Stack borderRadius={'16px'} gap={4} minW='981px' w='full' bg='#FFFFFF'>
				<HStack p={4} borderBottom={'1px solid #ebebeb'} w={'full'}>
					<HStack gap={3} cursor={'pointer'} onClick={() => router.back(-1)}>
						<Stack bg={'#F6F7F7'} justify={'center'} p={3} rounded={'full'}>
							<BsChevronLeft />
						</Stack>
						<Text fontWeight={500} fontSize={18}>
							Back
						</Text>
					</HStack>
				</HStack>
				<Stack p={4}>
					<Heading pb={2} fontSize={24}>
						Received Offer
					</Heading>
					<Stack border={'1px solid #EDEEEF'} p={'16px'} h={'125px'} rounded={'12px'} gap={2}>
						<Flex gap={4}>
							<Image src={'/img/profilePicture.png'} boxSize={'60px'} />
							<Stack gap={0}>
								<Text fontSize={18} fontWeight={500}>
									Client Name
								</Text>
								<StarRating ratingNumber={3} />
							</Stack>
						</Flex>
						<HStack gap={1} fontSize={14} color={'#878C95'}>
							<Image src='/img/icons/location.svg' alt='location' boxSize={'20px'} />
							<Text h={'max-content'} pr={2} borderRight={'1px solid #878C95'}>
								Lagos, Nigeria
							</Text>
							<Text pl={2}>{dayjs().format('hh:mm A')} - GMT+1 West Africa</Text>
						</HStack>
					</Stack>
					<VStack align={'start'} borderRadius='12px' border='1px solid #EDEEEF' w='full' p={4}>
						<Flex direction={'column'} borderRadius='12px' border='1px solid #EDEEEF' w='full' p={4} align={'start'} gap={4}>
							<Text fontWeight={700} fontSize={18}>
								Contract Terms
							</Text>
							<Text>
								<span style={{color: '#053AF9', fontWeight: 500}}>GigConnect Payment Protection.</span> Only pay for the work you authorize.
							</Text>
							<HStack align={'end'}>
								<Text fontWeight={700}>Payed a fixed price for this project</Text>
								<Image src='/img/icons/questionBox.svg' />
							</HStack>
							<Box border={'1px solid #EDEEEF'} p={'5px 11px'} h={'max-content'} rounded={'full'} gap={2} bg={'#F6F7F7'}>
								<Text fontWeight={500} color={'#4C5361'}>{`$800.00`}</Text>
							</Box>
							<Text color={'#707581'}>This is the price you and James Daniels have agreed upon</Text>
							<Stack>
								<HStack align={'end'}>
									<Text fontWeight={700}>Deposit funds into Escrow Balance</Text>
									<Image src='/img/icons/questionBox.svg' />
								</HStack>
								<Text>
									Deposited <b>$800.00</b> of the whole project
								</Text>
							</Stack>
						</Flex>
						<Flex direction={'column'} borderRadius='12px' border='1px solid #EDEEEF' w='full' p={4} align={'start'} gap={4}>
							<Text fontWeight={700} fontSize={18}>
								Work Description
							</Text>
							<Text color={'#363B45'}>
								<span style={{color: '#053AF9', fontWeight: 500}}>{nextJob.projectTitle}</span> (#{nextJob.id})
							</Text>
							<HStack align={'end'}>
								<Text fontWeight={700}>Contract Title</Text>
								<Image src='/img/icons/questionBox.svg' />
							</HStack>
							<Box border={'1px solid #EDEEEF'} p={'5px 11px'} h={'max-content'} rounded={'full'} gap={2} bg={'#F6F7F7'}>
								<Text fontWeight={500} color={'#4C5361'}>
									{job.projectTitle}
								</Text>
							</Box>
							<Stack>
								<Text fontWeight={700}>Description of the work</Text>
								<Text fontSize={14} color={'#4C5361'}>
									{job.jobDescription}
								</Text>
							</Stack>
							<Stack borderTop={'1px solid #EDEEEF'} w='full' pt={4} pb={16}>
								<Text fontWeight={700}>Project Milestone</Text>
								<Flex gap={2}>
									<Checkbox isChecked={isChecked} onChange={(event) => setIsChecked(event.target.checked)} />
									<Text>
										Yes, I understand and agree to <span style={{color: '#053AF9', fontWeight: 500}}>GigConnect Terms of Service</span>, including the <span style={{color: '#053AF9', fontWeight: 500}}>User Agreement</span> and <span style={{color: '#053AF9', fontWeight: 500}}>Privacy Policy</span>.
									</Text>
								</Flex>
							</Stack>
						</Flex>
						<HStack w={'full'} justify={'end'} gap={2} my={4}>
							<Button bg={'#202329'} rounded={'12px'} fontWeight={400} p={'12px 16px'} h={'max-content'} color={'#fff'} border={'1px solid #EDEEEF'} onClick={offerDeclinedModal.onOpen}>
								Decline Offer
							</Button>
							<Button bg={'#053AF9'} rounded={'12px'} fontWeight={400} p={'12px 16px'} h={'max-content'} color={'#fff'} border={'1px solid #EDEEEF'} onClick={offerModal.onOpen} isDisabled={!isChecked}>
								Accept Offer
							</Button>
						</HStack>
					</VStack>
				</Stack>
			</Stack>
			<OfferAccepted offerModal={offerModal} />
			<OfferDeclined offerDeclineModal={offerDeclinedModal} />
		</Stack>
	);
};
