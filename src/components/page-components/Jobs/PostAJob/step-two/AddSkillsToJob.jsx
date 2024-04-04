import React, {useEffect, useState} from 'react';
import {Box, Input, Tag, TagLabel, TagCloseButton, Text, Wrap, WrapItem, HStack, InputGroup, Image} from '@chakra-ui/react';
import {Formik, Form, Field} from 'formik';
import {GCButton} from '@/ui-lib/ui-lib-components/Button';
import {InputField} from '@/app/auth/create-account/page';
import {PlusIconDark} from '@/assets/icons/PlusIcon';

let initialSkills = [
	'Android App Development',
	'iOS',
	'Smartphone',
	'Mobile App Development',
	'User Profile Creation',
	'User Authentication',
	'iOS Development',
	'Tablet',
	'Swift',
	'React Native',
	'Map Integration',
	'In-App Purchases',
	'Payment Functionality',
	'Location-Based Service',
	'Hybrid App Development',
	'Chat & Messaging Software',
	'Review or Feedback Collection',
	'Social Media Account Integration',
	// ... Add all the initial skills here
];

export const SkillsSelector = ({handleProgress}) => {
	const [skills, setSkills] = useState(initialSkills);
	const [selectedSkills, setSelectedSkills] = useState([]);

	// Effect to update initialSkills whenever a new skill is added
	useEffect(() => {
		initialSkills = skills;
	}, [skills]);

	const addSkill = (skill) => {
		// Check if the skill is unique and not already in the list
		if (!initialSkills.includes(skill)) {
			const updatedSkills = [...initialSkills, skill];
			setSkills(updatedSkills);
		}
		// Add to selectedSkills if not already selected and within the limit
		if (!selectedSkills.includes(skill) && selectedSkills.length < 5) {
			setSelectedSkills([...selectedSkills, skill]);
		}
	};

	const removeSkill = (skill) => {
		setSelectedSkills(selectedSkills.filter((s) => s !== skill));
	};

	const filterSkills = (value) => {
		if (!value) {
			return initialSkills;
		}
		return skills.filter((skill) => skill.toLowerCase().includes(value.toLowerCase()));
	};

	const handleActiveStyle = (arg) => {
		if (selectedSkills.includes(arg)) {
			return {backgroundColor: '#053AF9', color: '#FFFFFF'};
		} else {
			return {backgroundColor: '#F6F7F7', color: '#2E2E2E'};
		}
	};

	return (
		<Box w='647px' h='586px' borderRadius='16px' border='1px solid #ECECEC' background='#FFF' px='12px' pt={'27px'} mb='7px'>
			<Text color='#4C5361' fontSize='14px' fontWeight='400' lineHeight='20px' mb={2}>
				Search skills or add your own
			</Text>
			<Formik
				initialValues={{search: ''}}
				onSubmit={(values, {setFieldValue}) => {
					addSkill(values.search);
					setFieldValue('search', '', false);
				}}>
				{({values, handleChange, handleBlur, handleSubmit, touched}) => (
					<Form>
						<InputGroup pos='relative'>
							<Image pos='absolute' top={'35%'} left={'2%'} src='/img/icons/search-icon.svg' alt='search-icon' zIndex={1} />
							<Field
								as={InputField}
								name='search'
								paddingLeft='25px'
								onChange={handleChange}
								onBlur={handleBlur}
								placeholder={touched ? 'Search skills' : ''}
								_placeholder={{
									paddingLeft: '25px',
								}}
							/>
						</InputGroup>
						<Text color='#4C5361' fontSize='12px' fontWeight='400' lineHeight='20px' mb={2}>
							For the best results, add 3-5 skills
						</Text>
						<Text color='#4C5361' fontSize='14px' fontWeight='700' lineHeight='20px' mt='14px'>
							Popular skills for Mobile App Development
						</Text>
						<Box my={4}>
							<Wrap>
								{filterSkills(values.search).map((skill) => (
									<WrapItem key={skill}>
										<Tag borderRadius={'16px'} size='lg' cursor='pointer' onClick={() => addSkill(skill)} style={handleActiveStyle(skill)}>
											<TagLabel fontSize={'14px'} fontWeight={'500'}>
												{skill}
											</TagLabel>
											{selectedSkills.includes(skill) ? <TagCloseButton onClick={() => removeSkill(skill)} /> : <PlusIconDark style={{margin: 'auto 5px'}} />}
										</Tag>
									</WrapItem>
								))}
							</Wrap>
						</Box>
						<HStack mt='50px' spacing='12px' w='full' justify={'flex-end'} borderTop={'1px solid #F6F7F7'}>
							<GCButton isDisabled={true} bg='#E5E5E5' color='#2e2e2e' h='48px' minW='68px' w='fit-content' p='12px 16px'>
								Previous
							</GCButton>
							<GCButton onClick={() => handleProgress('next')} bg='#053AF9' color='#F9F9F9' h='48px' minW='68px' w='fit-content' p='12px 16px'>
								Next
							</GCButton>
						</HStack>
					</Form>
				)}
			</Formik>
		</Box>
	);
};

export default SkillsSelector;
