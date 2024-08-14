import {Box, Button, HStack, Image, Stack, Text, VStack} from '@chakra-ui/react';
import {FaPlus} from 'react-icons/fa6';

export const BillingDetails = ({handleEdit}) => {
	const totalCards = [];

	function maskCardNumber(cardNumber) {
		return cardNumber.slice(0, -4).replace(/\d/g, '*') + cardNumber.slice(-4);
	}

	return (
		<Stack borderRadius='12px' border='1px solid #EDEEEF' w='full' align='start' bg='#FFF' gap={2} pb={6}>
			<HStack w='full' borderBottom='1px solid #EDEEEF' px={4} py={2}>
				<Text w='full' fontWeight={500} fontSize={18}>
					Billing & Payments
				</Text>
			</HStack>
			{totalCards.length > 0 ? (
				<Box w='full' p={4}>
					<Stack borderRadius='12px' border='1px solid #EDEEEF' w='full' gap={6} p={4} pt={8} justify='center' align='center'>
						{totalCards.map((card) => (
							<HStack borderRadius='12px' border='1px solid #EDEEEF' w='full' gap={6} p={2} align='center' key={card.id}>
								<Image src={card.cardName === 'Visa' ? '/img/icons/Visa.svg' : '/img/icons/Mastercard.png'} boxSize='60px' objectFit={'contain'} />
								<Text>{maskCardNumber(card.cardNumber)}</Text>
							</HStack>
						))}
						<Button fontWeight={400} color='#FFFFFF' h='50px' p='12px 16px' gap={2} rounded={'12px'} bg='#053AF9' boxShadow='sm' w='105px'>
							Add Card
						</Button>
						<Text fontSize={12} color='#4C5361'>
							Secured by Paystack gateway
						</Text>
					</Stack>
				</Box>
			) : (
				<VStack align='start' w='full' p={4}>
					<Stack borderRadius='12px' border='1px solid #EDEEEF' w='full' gap={6} p={8} justify='center' align='center'>
						<Image src='/img/icons/billing.svg' boxSize='60px' />
						<Text textAlign='center' maxW={145} fontWeight={700}>
							Add your debit card details
						</Text>
						<Button fontWeight={400} color='#FFFFFF' h='50px' p='12px 16px' gap={2} rounded={'12px'} bg='#053AF9' boxShadow='sm' w='105px'>
							Add Card
						</Button>
						<Text fontSize={12} color='#4C5361'>
							Secured by Paystack gateway
						</Text>
					</Stack>
					<Text color='#707581' fontSize={12} letterSpacing={'1.25px'} textTransform='uppercase' py={4}>
						Bank Details
					</Text>
					<Stack borderRadius='12px' border='1px solid #EDEEEF' w='full' p={2} pl={4} justify='start' align='start'>
						<Text color='#4C5361' fontSize={14}>
							Seamlessly receive payments by adding your bank details.
						</Text>
					</Stack>
					<Stack borderRadius='12px' border='1px solid #EDEEEF' w='full' p={4} justify='center' align='center' minH={150}>
						<Button
							fontWeight={400}
							color='#4C5361'
							h='40px'
							p='6px 14px'
							gap={2}
							rounded={'12px'}
							bg='#F6F7F7'
							boxShadow='sm'
							// w="105px"
							border='1px solid #EDEEEF'
							onClick={handleEdit}>
							<FaPlus />
							<Text>Add Bank Details</Text>
						</Button>
					</Stack>
				</VStack>
			)}
		</Stack>
	);
};
