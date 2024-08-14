import {Flex, Heading, Stack, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import {useSearchParams} from 'next/navigation';
import {ActiveJobs, CompletedJobs, ReceivedOffers} from './offer-components/jobs';

export const OfferList = () => {
	const [savedJobs, setSavedJobs] = useState([]);
	const [tabIndex, setTabIndex] = useState(0);
	const searchParams = useSearchParams();
	const active = searchParams.get('active');
	const completed = searchParams.get('completed');

	useEffect(() => {
		if (active) {
			setTabIndex(1);
		} else if (completed) {
			setTabIndex(2);
		}
	}, [active, completed]);

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
			<Heading fontSize={24}>My Jobs</Heading>
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
		tablist: 'Received Offers',
		component: ReceivedOffers,
	},
	{
		tablist: 'Active Jobs',
		component: ActiveJobs,
	},
	{
		tablist: 'Completed Jobs',
		component: CompletedJobs,
	},
];
