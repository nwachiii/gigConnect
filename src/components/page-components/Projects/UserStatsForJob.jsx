import {profileSteps} from '@/lib';
import {Flex, HStack, Heading, Image, Stack, Text, VStack} from '@chakra-ui/react';

export const UserStats = () => {
	return (
		<Stack borderRadius={'16px'} p={4} gap={4} minW='981px' w='full' bg='#FFFFFF'>
			<Heading fontSize={24}>My Stats</Heading>
			<Flex borderRadius='12px' border='1px solid #EDEEEF' w='full' align='start' justifyContent={'space-between'} flexDir={'column'} p={2}>
				<Text fontWeight={500}>Complete your profile</Text>
				<Text fontSize={14}>Having a complete profile improves your odds of getting hired. Add relevant work to set up your profile for success.</Text>
			</Flex>
			<HStack borderRadius='12px' border='1px solid #EDEEEF' w='full' p={4} justify={'space-between'} gap={4}>
				<HStack align={'start'}>
					<Image src='/img/icons/radio-tick.svg' mt={1} />
					<Stack gap={2}>
						<Text fontWeight={500}>Linked account</Text>
						<Text fontSize={14} maxW={'150px'}>
							Connect a social media profile +(10%)
						</Text>
					</Stack>
				</HStack>
				<Image src='/img/icons/rightArrow.svg' />
			</HStack>
			<Flex direction={'column'} p={3} gap={6} borderRadius='12px' border='1px solid #EDEEEF' w='full'>
				<Text>Talents with complete, quality profiles are 4.5 times more likely to get hired by clients.</Text>
				<VStack>
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
			</Flex>
		</Stack>
	);
};
