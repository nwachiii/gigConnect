import {Box, Button, Flex, HStack, Heading, Image, Menu, MenuButton, MenuItem, MenuList, Stack, Text, VStack, useDisclosure} from '@chakra-ui/react';
import {OfferList} from './offerList';
import {useState} from 'react';
import {WithdrawModal} from './modals/withdrawModal';
import {IoEyeOffOutline, IoEyeOutline} from 'react-icons/io5';
import {ProfileSetup} from '../../Projects/ProfileSetupModal';

export const JobsList = () => {
	const modalDisclosure = useDisclosure();
	const withdrawModal = useDisclosure();
	const [showPrice, setShowPrice] = useState(true);

	return (
		<Stack maxW='1440px' w='full' padding='16px 44px' alignItems='center' justifyContent='space-between' spacing='36px' mx='auto'>
			{/* Banner */}
			<Flex h='58px' bg='#202329' align='center' p='13px 15px 13px 18px' w='full' borderRadius={'16px'} justify={'space-between'}>
				<Text color='#FFFFFF' fontSize={'14px'} fontWeight={'500'}>
					Complete your account setup to build trust and connect with talents
				</Text>
				<Button color='#4C5361' fontSize='14px' fontWeight='400' bg='#F6F7F7' w='106px' h='32px' p='6px 14px' borderRadius='12px' onClick={modalDisclosure.onOpen}>
					Get Started
				</Button>
			</Flex>

			{/* Main Content */}
			<Flex w='full' columnGap='20px'>
				<OfferList />
				<VStack borderRadius={'16px'} p={4} gap={4} w='full' bg='#FFFFFF' maxH={'max-content'} h={'max-content'}>
					<VStack borderRadius='12px' border='1px solid #EDEEEF' w='full' p={4}>
						<Image src='/img/icons/userIcon.svg' />
						<Text>Ola Ahmed</Text>
						<Text>CRM Developer | Fintech</Text>
						<Button p={'6px 14px'} rounded={'12px'} border='1px solid #EDEEEF' bg={'#F6F7F7'} fontWeight={400}>
							Complete Profile
						</Button>
					</VStack>
					<Stack borderRadius='12px' border='1px solid #EDEEEF' w='full' p={4} gap={2} bg='#053AF9' color='#FFFFFF' align='center'>
						<Text fontSize={14}>Earnings available now:</Text>
						<HStack gap={4}>
							<Text fontWeight={700} fontSize={20}>
								{showPrice ? '$ 0.00' : '******'}
							</Text>
							<Box cursor={'pointer'} onClick={() => setShowPrice(!showPrice)}>
								{showPrice ? <IoEyeOutline /> : <IoEyeOffOutline />}
							</Box>
						</HStack>
						<Menu>
							<MenuButton>
								<Image src='/img/icons/MenuIcon.svg' />
							</MenuButton>
							<MenuList border={'1px solid #EDEEEF'} rounded={'12px'} color={'#000000'} px={1}>
								<MenuItem onClick={withdrawModal.onOpen} {...menuItemStyles}>
									Withdraw funds
								</MenuItem>
								<MenuItem {...menuItemStyles}>View Pending earnings</MenuItem>
								<MenuItem {...menuItemStyles}>Go to reports</MenuItem>
							</MenuList>
						</Menu>
					</Stack>
				</VStack>
			</Flex>
			<ProfileSetup modalDisclosure={modalDisclosure} />
			<WithdrawModal withdrawModal={withdrawModal} />
		</Stack>
	);
};

const menuItemStyles = {
	_hover: {
		background: '#F6F5F5',
		border: '1px solid #EDEAEC',
		borderRadius: '8px',
	},
};
