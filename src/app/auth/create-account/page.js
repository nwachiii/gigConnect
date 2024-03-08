'use client';
import React, {Fragment, useState} from 'react';
import {VStack, Heading, Text, Link, useToast, Stack, Input, FormControl, FormLabel, Flex} from '@chakra-ui/react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
// import {useMutation} from 'react-query';
import {HeaderEmpty} from '@/components/Headers';
import {Footer} from '@/components/Footer';
import {sharedInputStyles} from '../sign-in/page';
import {GCButton} from '@/ui-lib/ui-lib-components/Button';
import {GoogleBtn} from '@/assets/icons/GoogleBtn';
import {useRouter} from 'next/navigation';

// InputField Component
const InputField = ({id, label, type, placeholder, ...rest}) => (
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
		.matches(/^\+?(\d{10,12})$/, 'Phone number is not valid')
		.required('Phone number is required'),
	email: Yup.string().email('Email is not valid').required('Email is required'),
	password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Passwords must match')
		.required('Confirming password is required'),
});

// Formik form component
const CreateAnAccountForm = () => {
	const toast = useToast();
	const router = useRouter;
	const [check, setCheck] = useState(false);

	// React Query mutation
	// const mutation = useMutation((newAccount) => {
	// 	return fetch('/api/accounts', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify(newAccount),
	// 	});
	// });

	const handleSubmit = (values, actions) => {
		// mutation.mutate(values, {
		// 	onSuccess: () => {
		// 		toast({title: 'Account created successfully', status: 'success'});
		// 		// Handle successful account creation, e.g., redirect to dashboard
		// 	},
		// 	onError: (error) => {
		// 		toast({title: 'Account creation failed', description: error.message, status: 'error'});
		// 		actions.setSubmitting(false);
		// 	},
		// });
		console.log({...values});
		router.push('/auth/create-account/email-verification');
	};

	return (
		<Formik
			initialValues={{
				firstName: '',
				lastName: '',
				phoneNumber: '',
				email: '',
				password: '',
				confirmPassword: '',
			}}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}>
			{({isSubmitting}) => (
				<Form>
					<Stack spacing={'28px'} w='full'>
						<Field name='firstName' component={InputField} label='First Name' placeholder='Enter your first name' />
						<ErrorMessage name='firstName' component={Text} color='red.500' />
						<Field name='lastName' component={InputField} label='Last Name' placeholder='Enter your last name' />
						<ErrorMessage name='lastName' component={Text} color='red.500' />
						<Field name='phoneNumber' component={InputField} label='Phone Number' placeholder='Enter phone number' />
						<ErrorMessage name='phoneNumber' component={Text} color='red.500' />
						<Field name='email' component={InputField} label='Email' placeholder='Enter your email' />
						<ErrorMessage name='email' component={Text} color='red.500' />
						<Field name='password' component={InputField} label='Create Password' type='password' placeholder='Enter password' />
						<ErrorMessage name='password' component={Text} color='red.500' />
						<Field name='confirmPassword' component={InputField} label='Confirm Password' type='password' placeholder='Confirm your password' />
						<ErrorMessage name='confirmPassword' component={Text} color='red.500' />
						<Flex my={'10px'} gap='10px' align={'center'} w='100%' pl={2} justifyContent={'center'}>
							<input type={'checkbox'} onChange={(e) => setCheck(e.target.checked)} ischecked={check} />
							<Text textAlign={'left'} fontSize='10px'>
								I agree to the terms of service
							</Text>
						</Flex>

						<GCButton isLoading={isSubmitting} type='submit' w={'full'} bg='#0D0D0D' py={'12px'} h='51px' color={'#fff'}>
							Next
						</GCButton>
					</Stack>
				</Form>
			)}
		</Formik>
	);
};

// CreateAnAccount Component
const CreateAnAccount = () => {
	return (
		<Fragment>
			<HeaderEmpty />
			<VStack bg='#ffffff' align='center' w='full' spacing={4}>
				<Stack spacing={4} m={8} p={8} bg='#ffffffcc' rounded='12px' boxShadow='md' w='full' maxW={{base: '90%', md: '500px'}}>
					<Heading>
						Create an <br /> Account
					</Heading>

					<CreateAnAccountForm />

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
		</Fragment>
	);
};

export default CreateAnAccount;
