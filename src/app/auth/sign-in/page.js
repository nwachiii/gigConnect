'use client';
import * as Yup from 'yup';
import {logInRequest} from '@/api/auth';
import {BsEyeSlash} from 'react-icons/bs';
import {useRouter} from 'next/navigation';
import {Formik, Form, Field} from 'formik';
import {useMutation} from '@tanstack/react-query';
import {GoogleBtn} from '@/assets/icons/GoogleBtn';
import {GCButton} from '@/ui-lib/ui-lib-components/Button';
import {Footer} from '@/components/generic-components/Footer';
import {RequestResponseAlert} from '@/ui-lib/ui-lib-components/Alert';
import {Box, Flex, Heading, VStack, Input, InputGroup, InputRightElement, Text, Image, useToast, Link, Stack, Spinner} from '@chakra-ui/react';
import {useState} from 'react';

// Validation Schema
const SignInSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string().required('Required'),
});

export const sharedInputStyles = {
	borderRadius: '12px',
	fontWeight: '500',
	height: '51px',
	border: '1px solid #E0E0E0',
	background: '#FFF',
	focusBorderColor: 'gray.50',
	_placeholder: {
		color: '#888A8F',
		fontSize: '12px',
		fontWeight: '400',
	},
};

export const SignIn = () => {
	const toast = useToast();
	const router = useRouter();
	const [viewPassword, setViewPassword] = useState(false);
	const mutation = useMutation({mutationFn: (formData) => logInRequest(formData)});

	if (mutation?.isSuccess) {
		console.log(mutation?.data?.data?.accessToken);
		router.push('/client/workspace');
	}

	const togglePwrdView = () => {
		setViewPassword(!viewPassword);
	};

	return (
		<Box background={'#fff'} w={'full'} justify={'center'}>
			<Flex maxW='1400px' mx='auto' px='70px'>
				<Link href='/'>
					<Image src={'/img/brand/GigConnectLogo.svg'} alt='logo' p={10} />
				</Link>
			</Flex>
			<Flex alignItems={'center'} justify={'center'} direction={'column'} gap='16px' maxW={{base: '90%', md: '460px'}} mx='auto'>
				{mutation?.isError && <RequestResponseAlert status={'isError'} title={mutation.error.message || 'An Error occured'} />}
				{mutation?.isSuccess && <RequestResponseAlert status={'isSuccess'} title={'Login Successful, Redirecting to workspace...'} />}
				<Box width={{base: '90%', md: '460px'}} bg='#ffffffcc' borderRadius={10} border='1px solid #ebebeb' p={10}>
					<Heading fontWeight='800' color='#0D0D0D' fontSize='32px' mb={8}>
						Sign in to <br /> your account
					</Heading>
					<Formik
						initialValues={{email: '', password: ''}}
						onSubmit={(values, actions) => {
							console.log('Formik actions', actions);
							mutation.mutate({...values});
						}}
						validationSchema={SignInSchema}>
						{({errors, touched, isSubmitting, isLoading, isInvalid}) => (
							<Form>
								<VStack spacing={'28px'}>
									<Field name='email'>
										{({field}) => (
											<VStack align={'start'} w={'full'}>
												<Text fontWeight='500' fontSize='12px' color='#0D0D0D'>
													Email
												</Text>
												<Input {...field} type='email' placeholder='Enter your email' isInvalid={errors.email && touched.email} {...sharedInputStyles} />
												{errors.email && touched.email ? (
													<Text fontSize='sm' color='red.500'>
														{errors.email}
													</Text>
												) : null}
											</VStack>
										)}
									</Field>
									<Field name='password'>
										{({field}) => (
											<VStack align={'start'} w={'full'}>
												<Text fontWeight='500' fontSize='12px' color='#0D0D0D'>
													Password
												</Text>
												<InputGroup align='center'>
													<Input {...field} type={viewPassword ? 'text' : 'password'} placeholder='Enter password' isInvalid={errors.password && touched.password} {...sharedInputStyles} />
													<InputRightElement onClick={togglePwrdView} cursor={'pointer'}>
														<BsEyeSlash size={25} color='#727272' />
													</InputRightElement>
												</InputGroup>
												{errors.password && touched.password ? (
													<Text fontSize='sm' color='red.500'>
														{errors.password}
													</Text>
												) : null}
											</VStack>
										)}
									</Field>
									<Stack w='full' spacing='28px'>
										<GCButton type='submit' w={'full'} bg='#0D0D0D' py={'12px'} h='42px' color={'#fff'} isDisabled={isInvalid}>
											{mutation?.isLoading ? <Spinner color='#FFFFFF' /> : 'Sign in'}
										</GCButton>
										<GCButton type='submit' w={'full'} py={'12px'} h='42px' color={'#0D0D0D'} bg={'#F0F0F0'} leftIcon={<GoogleBtn />}>
											Sign in with Google
										</GCButton>
										<Text textAlign={'center'} color='#888A8F' fontSize={'14px'} fontWeight={'400'}>
											{`Don’t have an Account? `}
											<Link href='/auth/create-account/select-type' style={{fontWeight: '500', color: '#0D0D0D'}}>
												Create an Account
											</Link>
										</Text>
									</Stack>
								</VStack>
							</Form>
						)}
					</Formik>
				</Box>
			</Flex>
			<Footer />
		</Box>
	);
};

export default SignIn;
