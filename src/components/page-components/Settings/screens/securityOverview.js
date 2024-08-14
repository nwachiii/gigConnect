import {Button, Flex, HStack, Image, Stack, Switch, Text, VStack, useDisclosure} from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import {TwoFAModal} from './modals';

export const SecurityOverview = ({handleEdit}) => {
	const [twoFA, setTwoFa] = useState({
		phone: false,
		google: false,
	});

	const handleTwoFA = (name) => {
		setTwoFa((prev) => ({
			...prev,
			[name]: !prev[name],
		}));
	};
	const isTwoFAEnabled = twoFA.phone && twoFA.google;
	const {isOpen, onClose, onOpen} = useDisclosure();

	useEffect(() => {
		if (isTwoFAEnabled) {
			onOpen();
		} else {
			onClose();
		}
	}, [isTwoFAEnabled]);
	return (
		<Stack borderRadius='12px' border='1px solid #EDEEEF' w='full' align='start' bg='#FFF' gap={2} pb={6}>
			<HStack w='full' borderBottom='1px solid #EDEEEF' px={4} py={2}>
				<Text w='full' fontWeight={500} fontSize={18}>
					Security
				</Text>
			</HStack>
			<VStack justify='center' w='full' p={8}>
				<Stack borderRadius='12px' border='1px solid #EDEEEF' w='full' align='start' bg='#FFF' gap={8} p={4} maxW={650}>
					<Text textAlign='center' w='full' fontWeight={500}>
						Enable 2 step verification
					</Text>
					<Flex gap={12} w='full' justify='center'>
						<Stack align='center' border='1px solid #EDEEEF' p={'8px 28px'} h='250px' w='230px' rounded={'16px'} gap={4} justify='center'>
							<Image src='/img/icons/phoneIcon.svg' boxSize={'60px'} />
							<Text textAlign='center' w='full' fontWeight={700} fontSize={16} maxW={150}>
								Continue with Phone Number
							</Text>
							<Text textAlign='center' fontSize={12} maxW={125}>
								You will receive an OTP on your registered line
							</Text>
							<Switch onChange={() => handleTwoFA('phone')} value={twoFA.phone} id='phoneNumber' />
						</Stack>
						<Stack align='center' border='1px solid #EDEEEF' p={'8px 28px'} h='250px' w='230px' rounded={'16px'} gap={4} justify='center'>
							<Image src='/img/icons/Google.svg' boxSize={'60px'} />
							<Text textAlign='center' w='full' fontWeight={700} fontSize={16} maxW={163}>
								Continue with Google Authenticator
							</Text>
							<Text textAlign='center' fontSize={12} maxW={150}>
								You will need to install this app on your mobile device
							</Text>
							<Switch onChange={() => handleTwoFA('google')} isChecked={twoFA.google} id='google' />
						</Stack>
					</Flex>
				</Stack>
				<Stack maxW='250px' align='center' w='full' justify='center' mt={8} mb={4} gap={4}>
					<Image src='/img/icons/shield-icon.svg' boxSize={'60px'} />
					<Text fontWeight={500}>Account Secured</Text>
					<Text textAlign='center' maxW={225} fontSize={14} color='#878C95'>
						Your account password is fortified and highly secure.
					</Text>
					<Text color='#325FFF' textShadow='sm' fontSize={14}>
						Need help? Contact Support{' '}
					</Text>
					<Button fontWeight={400} color='#FFFFFF' h='40px' p='12px 16px' gap={2} rounded={'12px'} bg='#053AF9' boxShadow='sm' w='250px' onClick={handleEdit}>
						Change Password
					</Button>
				</Stack>
			</VStack>
			<TwoFAModal isOpen={isOpen} onClose={onClose} />
		</Stack>
	);
};
