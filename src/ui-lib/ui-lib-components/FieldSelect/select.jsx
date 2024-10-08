import {Field} from 'formik';
import {VStack, Select} from '@chakra-ui/react';
import {HiOutlineChevronDown} from 'react-icons/hi2';
import {FormErrorMessage} from '@/components/generic-components/FormErrorMessage';

export const FieldSelect = ({formik, name, placeholder, options, ...rest}) => {
	return (
		<VStack align={'start'} w={rest.w || 'full'}>
			<Field
				as={Select}
				w={'full'}
				h={'44px'}
				placeholder={placeholder}
				_placeholder={{
					color: '#4C5361',
				}}
				icon={<HiOutlineChevronDown color='#4C5361' size={25} />}
				onChange={(e) => formik.setFieldValue(name, e.target.value)}
				name={name}
				fontSize={14}
				value={rest.value}
				{...rest}>
				{options.map((value, index) => {
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
