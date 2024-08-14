import {Select, VStack} from '@chakra-ui/react';
import {Field} from 'formik';
import {HiOutlineChevronDown} from 'react-icons/hi2';
import {FormErrorMessage} from '../FormErrorMessage';
import {months} from '@/lib';
export const MonthPicker = ({name, minDate, endYear, formik, isDisabled}) => {
	return (
		<VStack align={'start'} w={'full'}>
			<Field
				as={Select}
				w={'full'}
				h={'44px'}
				placeholder={'Month'}
				_placeholder={{
					color: '#4C5361',
				}}
				icon={<HiOutlineChevronDown color='#4C5361' size={25} />}
				onChange={(e) => formik.setFieldValue(name, e.target.value)}
				name={name}
				fontSize={14}
				disabled={isDisabled}>
				{months.map((value, index) => {
					return (
						<option key={index} value={value}>
							{value}
						</option>
					);
				})}
			</Field>
			<FormErrorMessage name={name} />
		</VStack>
	);
};

export const YearPicker = ({name, minDate, formik, isDisabled}) => {
	let years = [];
	for (let year = new Date().getFullYear(); year >= (minDate ?? 1924); year--) {
		years.push(year);
	}
	return (
		<VStack align={'start'} w={'full'}>
			<Field
				w={'full'}
				as={Select}
				h={'44px'}
				placeholder={'Year'}
				_placeholder={{
					color: '#4C5361',
				}}
				icon={<HiOutlineChevronDown color='#4C5361' size={25} />}
				onChange={(e) => formik.setFieldValue(name, e.target.value)}
				name={name}
				fontSize={14}
				disabled={isDisabled}>
				{years.map((value, index) => {
					return (
						<option key={index} value={value}>
							{value}
						</option>
					);
				})}
			</Field>
			<FormErrorMessage name={name} />
		</VStack>
	);
};
