import {Button, Flex, Link, Stack, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure} from '@chakra-ui/react';
import { ProfileSetup } from '../../Projects/ProfileSetupModal';
import { BillingsScreen } from '../screens/billings';
import { LifetimeBillings } from '../screens/lifetime-billings';

export const BillingsPage = () => {
	const modalDisclosure = useDisclosure();

	return (
		<Stack maxW='1120px' w='full' padding='16px 44px' alignItems='center' justifyContent='space-between' spacing='20px' mx='auto'>
			{/* Banner */}
			<Flex h='58px' bg='#202329' align='center' p='13px 15px 13px 18px' w='full' borderRadius={'16px'} justify={'space-between'}>
				<Text color='#FFFFFF' fontSize={'14px'} fontWeight={'500'}>
					Complete your account setup to build trust and connect with talents
				</Text>
				<Button color='#4C5361' fontSize='14px' fontWeight='400' bg='#F6F7F7' w='106px' h='32px' p='6px 14px' borderRadius='12px' onClick={modalDisclosure.onOpen}>
					Get Started
				</Button>
			</Flex>
			<Stack gap={0} align='start' w='full'>
				<Text fontSize={24} fontWeight={600}>
					Billings & Earnings
				</Text>
				<Text fontSize={14} fontWeight={400} color={'#4C5361'}>
					View your earnings and any applicable fees or taxes by client for the past 3 years. For earnings past three years, go to{' '}
					<Link as='span' textDecoration='underline' href='/reports/transaction-history'>
						transaction history
					</Link>
					.
				</Text>
			</Stack>
			<Stack bg={'#fff'} border={'1px solid #ebebeb'} w={'full'} maxW={'1440px'} borderRadius={'16px'}>
				<Stack justify={'space-between'} p={2} align={'flex-start'} lineHeight={'32px'} gap={8} w='full'>
					<Tabs w='full'>
						<Flex borderRadius='12px' border='1px solid #EDEEEF' w='full' px='8px' pt='8px' h={'56px'} align={'center'}>
							<TabList width={'full'} justifyContent={'center'} borderBottom={'0'}>
								{tabs.map((tab, index) => (
									<Tab
										_selected={{
											color: 'black',
											fontWeight: 500,
										}}
										color='#ADB0B6'
										key={index}
										index={index}>
										{tab.tablist}
									</Tab>
								))}
							</TabList>
							<TabIndicator mt={12} h='2.5px' bg='#053AF9' />
						</Flex>
						<TabPanels>
							{tabs.map((tab, index) => (
								<TabPanel p={0} mt={4} key={index}>
									{tab.component()}
								</TabPanel>
							))}
						</TabPanels>
					</Tabs>
				</Stack>
			</Stack>
			<ProfileSetup modalDisclosure={modalDisclosure} />
		</Stack>
	);
};

const tabs = [
	{
		tablist: 'Billing & Earnings',
		component: BillingsScreen,
	},
	{
		tablist: 'Lifetime Billed',
		component: LifetimeBillings,
	},
];
