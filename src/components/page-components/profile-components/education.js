import {MonthPicker, YearPicker} from '@/components/generic-components/DatePicker';
import {FormErrorMessage} from '@/components/generic-components/FormErrorMessage';
import {FormSavedBox} from '@/components/generic-components/FormSavedBox';
import {educationValues} from '@/lib/schema';
import {Box, Button, Checkbox, HStack, Input, Stack, Text, Textarea, VStack, useToast} from '@chakra-ui/react';
import dayjs from 'dayjs';
import {Field} from 'formik';
import {useState} from 'react';
import {HiOutlineMinus} from 'react-icons/hi2';

export const EducationForm = ({remove, index, formik}) => {
	const [isSaved, setIsSaved] = useState(false);
	const toast = useToast();
	const isValid = !(formik.errors.education && formik.errors.education[index]);
	const isDateFilled = !(formik.values.education[index]?.startMonth && formik.values.education[index]?.startYear) || formik.values.education[index].current;

	const START_DATE = dayjs(`${formik.values.education[index]?.startYear}-${formik.values.education[index]?.startMonth}-01`);
	const END_DATE = dayjs(`${formik.values.education[index]?.endYear}-${formik.values.education[index]?.endMonth}-01`);

	const saveEducation = () => {
		setIsSaved(true);
		toast({
			title: 'Education Saved',
			status: 'success',
			duration: 3000,
			isClosable: true,
			position: 'top-right',
		});
	};

	const handleDelete = () => {
		if (index < 1) {
			toast({
				status: 'error',
				position: 'top-right',
				duration: 3000,
				description: 'You must have at least one education',
			});
		} else {
			remove(index);
		}
	};

	return (
		<div style={{width: '100%'}}>
			{isSaved ? (
				<FormSavedBox heading={formik.values.education[index]?.fieldOfStudy} description={formik.values.education[index]?.school} tagline={`${START_DATE.format('MMM, YYYY')} - ${formik.values.education[index].current ? 'Present' : END_DATE.format('MMM, YYYY')}`} handleDelete={handleDelete} handleEdit={() => setIsSaved(false)} />
			) : (
				<VStack bg={'#FFF'} rounded={'12px'} border={'1px solid #edeeef'} align={'start'} gap={2} w={'full'}>
					<HStack borderBottom={'1px solid #edeeef'} justify={'space-between'} w={'full'} p={2}>
						<Text fontWeight={500}>Add education</Text>
						<Box bg={'#F6F7F7'} border={'1px solid #edeeef'} cursor={'pointer'} p={2} rounded={'full'}>
							<HiOutlineMinus cursor={'pointer'} onClick={handleDelete} color='#4C5361' size={20} />
						</Box>
					</HStack>
					<VStack align={'start'} w={'full'} px={4} gap={8} mt={2}>
						<VStack align={'start'} w={'full'} maxW={'370px'} gap={6}>
							<VStack align={'start'} w={'full'}>
								<Text color='#4C5361' textShadow={'sm'}>
									School/Organisation*
								</Text>
								<Field as={Input} name={`education.${index}.school`} placeholder='Ex Northpole University' py={6} w={'full'} />
								<FormErrorMessage name={`education.${index}.school`} />
							</VStack>
							<VStack align={'start'} w={'full'}>
								<Text color='#4C5361' textShadow={'sm'}>
									Degree (Optional)
								</Text>
								<Field as={Input} name={`education.${index}.degree`} placeholder='Enter degree name' py={6} w={'full'} />
							</VStack>
							<VStack align={'start'} w={'full'}>
								<Text color='#4C5361' textShadow={'sm'}>
									Field of Study
								</Text>
								<Field as={Input} name={`education.${index}.fieldOfStudy`} placeholder='Ex Computer Science' py={6} w={'full'} />
							</VStack>
						</VStack>
						<HStack>
							<Checkbox isChecked={formik.values.education[index].current} onChange={(e) => formik.setFieldValue(`education.${index}.current`, e.target.checked)} />
							<Text>I am currently studying here</Text>
						</HStack>
						<VStack align={'start'} w={'full'}>
							<Text color={'#454C58'} fontWeight={700}>
								Date Attended
							</Text>
							<Stack direction={{base: 'column', md: 'row'}} w={'full'} maxW={'605px'}>
								<VStack align={'start'} w={'full'}>
									<Text color='#4C5361' textShadow={'sm'}>
										From
									</Text>
									<HStack align={'start'} w={'full'}>
										<MonthPicker formik={formik} name={`education.${index}.startMonth`} />
										<YearPicker formik={formik} name={`education.${index}.startYear`} />
									</HStack>
								</VStack>
								<VStack align={'start'} w={'full'}>
									<Text color='#4C5361' textShadow={'sm'}>
										To
									</Text>
									<HStack align={'start'} w={'full'}>
										<MonthPicker formik={formik} isDisabled={isDateFilled} name={`education.${index}.endMonth`} />
										<YearPicker minDate={formik.values.education[index]?.startYear} formik={formik} name={`education.${index}.endYear`} isDisabled={isDateFilled} />
									</HStack>
								</VStack>
							</Stack>
						</VStack>
						<VStack w={'full'} maxW={'605px'} align={'start'}>
							<Text color={'#4C5361'}>Description</Text>
							<Textarea placeholder='Description' bg={'#fff'} justifyContent={'space-between'} w={'full'} border={'1px solid #edeeef'} borderRadius={'8px'} py={6} px={4} minH={'115px'} fontWeight={400} resize={'none'} name={`education.${index}.description`} />
						</VStack>
					</VStack>
					<HStack w={'full'} justify={'end'} pb={4} mt={4} pr={4}>
						<Button bg={'#F6F7F7'} color={'#4C5361'} rounded={'12px'} fontWeight={400} px={20} py={2} fontSize={14} h={'max-content'} border={'1px solid #EDEEEF'} onClick={() => formik.setFieldValue(`education.${index}`, educationValues)}>
							Clear
						</Button>
						<Button bg={'#053AF9'} color={'white'} rounded={'12px'} fontWeight={400} px={12} py={2} fontSize={14} h={'max-content'} isDisabled={!isValid} onClick={saveEducation}>
							Save
						</Button>
					</HStack>
				</VStack>
			)}
		</div>
	);
};
