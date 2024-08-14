import {Button, Flex, HStack, Heading, Stack, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure} from '@chakra-ui/react';
import {ActiveProposals} from './proposals-components/activeProps';
import {ArchivedProposals} from './proposals-components/archivedProps';
import {Referrals} from './proposals-components/referrals';
import { ProfileSetup } from './ProfileSetupModal';

export const Proposals = () => {
	const modalDisclosure = useDisclosure();
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
			<Stack borderRadius={'16px'} p={4} gap={4} minW='981px' w='full' bg='#FFFFFF'>
				<Heading fontSize={24}>My proposals</Heading>
				<Tabs>
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
			<ProfileSetup modalDisclosure={modalDisclosure} />
		</Stack>
	);
};

const tabs = [
	{
		tablist: 'Active',
		component: ActiveProposals,
	},
	{
		tablist: 'Referrals',
		component: Referrals,
	},
	{
		tablist: 'Archived',
		component: ArchivedProposals,
	},
];
