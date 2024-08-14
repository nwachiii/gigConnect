import {Flex, HStack, Heading, Input, InputGroup, InputRightElement, Stack, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text} from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import {CiSearch} from 'react-icons/ci';
// import {SavedPostings} from './job-components/savedPostings';
// import {AllPostings} from './job-components/allPostings';
import {useSearchParams} from 'next/navigation';
import { SavedPostings } from './SavedPostingsForJob';
import { AllPostings } from './job-components/allPostings';

export const JobPostings = () => {
	const [savedJobs, setSavedJobs] = useState([]);
	const [tabIndex, setTabIndex] = useState(0);
	const searchParams = useSearchParams();
	const saved = searchParams.get('saved');

	useEffect(() => {
		if (saved) {
			setTabIndex(2);
		}
	}, [saved]);

	const handleTabsChange = (index) => {
		setTabIndex(index);
	};

	const handleSaveJob = (job) => {
		if (savedJobs.find((savedJob) => savedJob.id === job.id)) {
			setSavedJobs(savedJobs.filter((savedJob) => savedJob.id !== job.id));
		} else {
			setSavedJobs([...savedJobs, job]);
		}
	};

	const withTabs = (Component) => (props) => <Component {...props} savedJobs={savedJobs} handleSaveJob={handleSaveJob} tabIndex={tabIndex} />;
	const JobScreens = tabs.map((tab) => withTabs(tab.component));

	return (
		<Stack borderRadius={'16px'} p={4} gap={4} minW='981px' w='full' bg='#FFFFFF'>
			<InputGroup maxW={'410px'} alignItems={'center'}>
				<InputRightElement p={2} right={'4px'} top={'5px'}>
					<CiSearch size={25} />
				</InputRightElement>
				<Input placeholder='Search for jobs' py={6} w={'full'} />
			</InputGroup>
			<Heading fontSize={24}>Jobs you might like</Heading>
			<Flex h='56px' borderRadius='12px' border='1px solid #EDEEEF' w='full' align='center' px='12px' justifyContent={'space-between'}>
				<HStack spacing='13px'>
					<Text color='#2e2e2e' fontWeight={'600'} fontSize={'18px'}>
						Posting
					</Text>
					<HStack spacing='10px' h='42px' px='5px' justify={'center'} align='center' bg='#F5F5F5' borderRadius={'16px'}>
						<Text fontSize={'14px'} borderRadius={'16px'} p='5px 9px' bg='#FFFFFF'>{`Active (0)`}</Text>
						<Text fontSize={'14px'} borderRadius={'16px'} p='5px 9px' bg='#FFFFFF'>{`Archived (0)`}</Text>
					</HStack>
				</HStack>
			</Flex>
			<Tabs index={tabIndex} onChange={handleTabsChange}>
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
					{JobScreens.map((JobScreen, index) => (
						<TabPanel p={0} mt={4} key={index}>
							<JobScreen />
						</TabPanel>
					))}
				</TabPanels>
			</Tabs>
		</Stack>
	);
};

const tabs = [
	{
		tablist: 'Best Matches',
		component: AllPostings,
	},
	{
		tablist: 'Most Recent',
		component: AllPostings,
	},
	{
		tablist: 'Saved Jobs',
		component: SavedPostings,
	},
];
