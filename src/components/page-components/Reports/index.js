import {Button, Flex, HStack, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure} from '@chakra-ui/react';
import {useState} from 'react';
import {MessageIcon} from '@/assets/icons/MessageIcon';
import {WorkInProgress} from './screens/progress-reports';
import {AvailableReports} from './screens/available-reports';
import { ProfileSetup } from '../Projects/ProfileSetupModal';

export const ReportsPage = () => {
	const modalDisclosure = useDisclosure();
	const [tabIndex, setTabIndex] = useState(0);

	return (
		<Stack maxW='1120px' w='full' padding='16px 44px' alignItems='center' justifyContent='space-between' spacing='36px' mx='auto'>
			{/* Banner */}
			<Flex h='58px' bg='#202329' align='center' p='13px 15px 13px 18px' w='full' borderRadius={'16px'} justify={'space-between'}>
				<Text color='#FFFFFF' fontSize={'14px'} fontWeight={'500'}>
					Complete your account setup to build trust and connect with talents
				</Text>
				<Button color='#4C5361' fontSize='14px' fontWeight='400' bg='#F6F7F7' w='106px' h='32px' p='6px 14px' borderRadius='12px' onClick={modalDisclosure.onOpen}>
					Get Started
				</Button>
			</Flex>

			<Stack bg={'#fff'} border={'1px solid #ebebeb'} w={'full'} maxW={'1440px'} borderRadius={'16px'}>
				<Stack justify={'space-between'} p={2} align={'flex-start'} lineHeight={'32px'} gap={8} w='full'>
					<Tabs w='full' tabIndex={tabIndex}>
						<TabList width={'full'} justifyContent={'space-evenly'} borderBottom={'0'} gap={4}>
							{tabs.map((tab, index) => (
								<Tab
									_selected={{
										color: '#FFFFFF',
										bg: '#053AF9',
										border: '1px solid #325FFF',
									}}
									color='#ADB0B6'
									key={index}
									index={index}
									onClick={() => setTabIndex(index)}
									w='260px'
									h='102px'
									border='1px solid #ECECEC'
									rounded='16px'>
									<Stack h='max-content' gap='0px' align='center'>
										<HStack h='max-content'>
											<Text fontSize={12}>{tab.tablist.name}</Text>
											<MessageIcon color={tabIndex === index ? '#EDEEEF' : '#4C5361'} />
										</HStack>
										<Text h='max-content' fontSize={18} fontWeight={500}>
											{tab.tablist.amount}
										</Text>
										{index === 3 && <Text fontSize={10}>Last Payment: $0.00</Text>}
									</Stack>
								</Tab>
							))}
						</TabList>
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
		tablist: {
			name: 'Work in progress',
			amount: '$0.00',
		},
		component: () => <WorkInProgress desc='work in progress' />,
	},
	{
		tablist: {
			name: 'In review',
			amount: '$0.00',
		},
		component: () => <WorkInProgress desc='jobs in review' />,
	},
	{
		tablist: {
			name: 'Pending',
			amount: '$0.00',
		},
		component: () => <WorkInProgress desc='pending payments' />,
	},
	{
		tablist: {
			name: 'Available',
			amount: '$0.00',
		},
		component: AvailableReports,
	},
];
