import {profileSteps} from '@/lib';
import {HStack, Heading, Image, Modal, ModalCloseButton, ModalContent, ModalOverlay, Stack, Text, VStack} from '@chakra-ui/react';

export const ProfileSetup = ({modalDisclosure}) => {
	return (
		<Modal isOpen={modalDisclosure.isOpen} onClose={modalDisclosure.onClose}>
			<ModalOverlay bg='rgba(0,0,0,0.1)' />
			<ModalContent rounded={'16px'} maxW={'630px'} w={'full'}>
				<VStack align={'start'} gap={2}>
					<HStack p={3} borderBottom={'1px solid #ebebeb'} w={'full'}>
						<Text fontWeight={500}>Action required</Text>
						<ModalCloseButton bg={'#F6F7F7'} p={3} rounded={'full'} />
					</HStack>
					<Stack w={'full'} p={3}>
						<Heading fontSize={24}>Complete your profile</Heading>
						<Text fontSize={14} color={'#4C5361'}>
							Talents with complete, quality profiles are 4.5 times more likely to get hired by clients.
						</Text>
						<VStack w={'full'}>
							{profileSteps.map((step, index) => {
								return (
									<HStack borderRadius='12px' border='1px solid #EDEEEF' w='full' p={4} key={index} gap={4} justify={'space-between'}>
										<HStack align={'start'}>
											<Image src={step.isComplete ? '/img/icons/radio-tick.svg' : '/img/icons/radio.svg'} mt={1} />
											<Stack gap={2}>
												<Text fontWeight={500}>{step.title}</Text>
												<Text fontSize={14}>{step.description}</Text>
											</Stack>
										</HStack>
										<Image src='/img/icons/rightArrow.svg' />
									</HStack>
								);
							})}
						</VStack>
					</Stack>
				</VStack>
			</ModalContent>
		</Modal>
	);
};
