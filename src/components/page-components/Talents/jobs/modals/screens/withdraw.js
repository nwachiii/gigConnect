import {Button, HStack, Heading, Image, Input, InputGroup, InputRightElement, ModalContent, Stack, Text, VStack} from '@chakra-ui/react';

export const WithdrawalScreen = ({formattedValue, setFormattedValue, handleScreen, withdrawModal}) => {
	const handleInputChange = (event) => {
		const inputValue = event.target.value;
		const numericValue = inputValue.replace(/[^0-9]/g, '');

		// Format the numeric value as currency (e.g., $12.00)
		const formattedCurrency = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 2,
		}).format(Number(numericValue) / 100); // Divide by 100 to convert cents to dollars

		setFormattedValue(formattedCurrency);
	};
	return (
		<ModalContent rounded={'16px'} maxW={'315px'} maxH={'412px'} w={'full'} p={4}>
			<VStack minH={'379px'} maxW={'295px'} p='10px' bg='#EDEEEF' rounded={'16px'} align={'center'} gap={5}>
				<Image src='/img/icons/wallet.svg' boxSize={'32px'} objectFit={'cover'} />
				<Heading maxW={'200px'} lineHeight={'32px'} fontSize={24} textAlign={'center'}>
					Withdraw Funds
				</Heading>
				<Text maxW={'175px'} color={'#4C5361'} textAlign={'center'} lineHeight={'18px'} fontSize={14}>
					Enter amount to withdraw to bank account
				</Text>
				<InputGroup maxW='165px' h='48px' rounded='14px' border='1px solid #EDEEEF' bg='#F6F7F7' alignItems='center' p='5px 11px'>
					<Input
						border='none'
						placeholder='0.00'
						color='#363B45'
						fontSize={24}
						fontWeight={500}
						// maxW="110px"
						_focus={{
							outline: 'none !important',
						}}
						maxLength={7}
						value={formattedValue}
						onChange={handleInputChange}
						focusBorderColor='transparent'
					/>
					<InputRightElement top={1} right={4}>
						<Image src='/img/icons/cardIcon.svg' boxSize={'20px'} />
					</InputRightElement>
				</InputGroup>
				<HStack bg={'#FFF'} rounded={'14px'} h='28px' fontWeight={400} p={'5px 12px'} color={'#4C5361'} border={'1px solid #EDEEEF'} w={'max-content'}>
					<Text fontSize={14} fontWeight={700}>
						$500.00
					</Text>
					<Text>Available Balance</Text>
				</HStack>
				<Stack w='full' align='center'>
					<Button
						fontWeight={400}
						fontSize={14}
						bg='#053AF9'
						color='#FFF'
						p={'6px 14px'}
						rounded={'12px'}
						w='full'
						maxW={'195px'}
						h='32px'
						boxShadow='md'
						_hover={{
							bg: '',
						}}
						onClick={() => handleScreen('otpScreen')}
						isDisabled={formattedValue === ''}>
						Proceed
					</Button>
					<Button
						fontWeight={400}
						fontSize={14}
						bg='#FFF'
						color='#4C5361'
						p={'6px 14px'}
						rounded={'12px'}
						w='full'
						maxW={'195px'}
						h='32px'
						_hover={{
							bg: '',
						}}
						onClick={withdrawModal.onClose}>
						Cancel
					</Button>
				</Stack>
			</VStack>
		</ModalContent>
	);
};
