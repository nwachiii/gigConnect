'use client';
import {Fragment, useState} from 'react';
import {VStack, Heading, Text, Link, useToast, Stack, Input, FormControl, FormLabel, Flex, Spinner} from '@chakra-ui/react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {HeaderEmpty} from '@/components/generic-components/Headers';
import {Footer} from '@/components/generic-components/Footer';
import {sharedInputStyles} from '../sign-in/page';
import {GCButton} from '@/ui-lib/ui-lib-components/Button';
import {GoogleBtn} from '@/assets/icons/GoogleBtn';
import {useRouter} from 'next/navigation';
import {GIG_CONNECT_SIGNUP_INFO} from '@/constants/auth-constants';
import {capitalizeTextFormat} from '@/utils/formatText';
import {CreateNewAccount} from '@/api/auth';
import {useMutation} from '@tanstack/react-query';
import {RequestResponseAlert} from '@/ui-lib/ui-lib-components/Alert';
import {SelectAccountType} from './select-type/page';

// InputField Component
export const InputField = ({id, label, type, placeholder, ...rest}) => (
	<FormControl id={id}>
		<FormLabel fontSize={'12px'} color='#0D0D0D' fontWeight={'500'}>
			{label}
		</FormLabel>
		<Input type={type} placeholder={placeholder} {...sharedInputStyles} {...rest} />
	</FormControl>
);

// Validation Schema
const validationSchema = Yup.object().shape({
	firstName: Yup.string().required('First name is required'),
	lastName: Yup.string().required('Last name is required'),
	phoneNumber: Yup.string()
		.matches(/^\+?(\d{10,13})$/, 'Phone number is not valid')
		.required('Phone number is required'),
	email: Yup.string().email('Email is not valid').required('Email is required'),
	password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Passwords must match')
		.required('Confirming password is required'),
});

const CreateAnAccountForm = ({selectedRole, mutation}) => {
	const toast = useToast();
	const router = useRouter();
	const [check, setCheck] = useState(false);

	const handleSubmit = (values, actions) => {
		const {confirmPassword, ...formattedPayload} = {
			...values,
			role: selectedRole,
			email: values.email?.toLowerCase(),
			firstName: capitalizeTextFormat(values?.firstName),
			lastName: capitalizeTextFormat(values?.lastName),
			userName: 'baddest_talent',
		};
		console.log({...formattedPayload});
		mutation.mutate({...formattedPayload});
		localStorage.setItem('GIG_CONNECT_SIGNUP_INFO', JSON.stringify({...formattedPayload}, null, 2));
	};

	return (
		<Formik initialValues={{...GIG_CONNECT_SIGNUP_INFO}} validationSchema={validationSchema} onSubmit={handleSubmit}>
			{({values, isSubmitting, handleChange}) => (
				<Form>
					<Stack spacing={'28px'} w='full'>
						<VStack w='full' align={'left'}>
							<Field name='firstName' id='firstName' onChange={handleChange} component={InputField} label='First Name' placeholder='Enter your first name' />
							<ErrorMessage name='firstName' component={Text} color='red.500' />
						</VStack>
						<VStack w='full' align={'left'}>
							<Field name='lastName' id='lastName' onChange={handleChange} component={InputField} label='Last Name' placeholder='Enter your last name' />
							<ErrorMessage name='lastName' component={Text} color='red.500' />
						</VStack>
						<VStack w='full' align={'left'}>
							<Field name='phoneNumber' id='phoneNumber' component={InputField} onChange={handleChange} label='Phone Number' placeholder='Enter phone number' />
							<ErrorMessage name='phoneNumber' component={Text} color='red.500' />
						</VStack>
						<VStack w='full' align={'left'}>
							<Field name='email' id='email' component={InputField} onChange={handleChange} label='Email' placeholder='Enter your email' />
							<ErrorMessage name='email' component={Text} color='red.500' />
						</VStack>
						<VStack w='full' align={'left'}>
							<Field name='password' id='password' component={InputField} onChange={handleChange} label='Create Password' type='password' placeholder='Enter password' />
							<ErrorMessage name='password' component={Text} color='red.500' />
						</VStack>
						<VStack w='full' align={'left'}>
							<Field name='confirmPassword' id='confirmPassword' component={InputField} onChange={handleChange} label='Confirm Password' type='password' placeholder='Confirm your password' />
							<ErrorMessage name='confirmPassword' component={Text} color='red.500' />
						</VStack>
						<Flex my={'10px'} gap='10px' align={'center'} w='100%' pl={2} justifyContent={'center'}>
							<input type={'checkbox'} onChange={(e) => setCheck(e.target.checked)} ischecked={check} />
							<Text textAlign={'left'} fontSize='10px'>
								I agree to the terms of service
							</Text>
						</Flex>

						<GCButton isDisabled={!check || values?.password !== values?.confirmPassword} type='submit' w={'full'} bg='#0D0D0D' py={'12px'} h='51px' color={'#fff'}>
							{mutation?.isLoading ? <Spinner color='#FFFFFF' /> : 'Next'}
						</GCButton>
					</Stack>
				</Form>
			)}
		</Formik>
	);
};

// CreateAnAccount Component
export const CreateAnAccount = () => {
	const [screen, setScreen] = useState(null);
	const [role, setRole] = useState('talent');
	const router = useRouter();

	const handleScreen = (arg) => {
		// console.log(arg, role);
		setScreen(arg);
	};
	const mutation = useMutation({mutationFn: (formData) => CreateNewAccount(formData)});
	if (mutation.isSuccess) {
		router.push('/auth/create-account/email-verification');
	}

	return (
		<Fragment>
			{!screen ? (
				<SelectAccountType handleScreen={handleScreen} setRole={setRole} />
			) : (
				<>
					<HeaderEmpty />
					<VStack bg='#ffffff' align='center' w='full' spacing={4} maxW={{base: '90%', md: '460px'}} mx='auto'>
						{mutation?.isError && <RequestResponseAlert status={'isError'} title={mutation.error.message || 'An Error occured'} />}
						<Stack spacing={4} m={8} p={8} bg='#ffffffcc' rounded='12px' boxShadow='md' w='full' maxW={{base: '90%', md: '500px'}}>
							<Heading>
								Create an <br /> Account
							</Heading>

							<CreateAnAccountForm selectedRole={role} mutation={mutation} />

							<GCButton my={'15px'} type='submit' w={'full'} py={'12px'} h='42px' color={'#0D0D0D'} bg={'#F0F0F0'} leftIcon={<GoogleBtn />}>
								Sign in with Google
							</GCButton>

							<Flex justify='center' gap='8px' color='#888A8F' fontSize={'14px'} fontWeight={'400'}>
								<Text>Already have an Account? </Text>
								<Link color='#0D0D0D' href='/auth/sign-in'>
									Sign in
								</Link>
							</Flex>
						</Stack>
						<Footer />
					</VStack>
				</>
			)}
		</Fragment>
	);
};

export default CreateAnAccount;
