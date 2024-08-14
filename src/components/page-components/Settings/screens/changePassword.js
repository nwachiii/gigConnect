import {FormErrorMessage} from '@/components/generic-components/FormErrorMessage';
import {passwordSchema, passwordValues} from '@/lib/schema';
import {Button, Flex, HStack, Input, Progress, Stack, Text, VStack, useToast} from '@chakra-ui/react';
import {Field, FormikProvider, useFormik} from 'formik';
import {BsChevronLeft} from 'react-icons/bs';

export const ChangePassword = ({handleEdit}) => {
	const formik = useFormik({
		initialValues: passwordValues,
		validationSchema: passwordSchema,
		validateOnMount: true,
		validateOnChange: true,
	});

	const {password} = formik.values;
	const hasLength = password.length > 8;
	const hasUpperCase = /[A-Z]/.test(password);
	const hasLowerCase = /[a-z]/.test(password);
	const hasNumbers = /\d/.test(password);

	const isValid = hasLength && hasUpperCase && hasNumbers && hasLowerCase;

	const toast = useToast();
	const saveEdit = () => {
		toast({
			position: 'top-right',
			title: 'Your password has been updated',
			status: 'success',
			duration: 2000,
			isClosable: true,
		});
		handleEdit();
	};
	return (
		<Stack borderRadius='12px' border='1px solid #EDEEEF' w='full' align='start' bg='#FFF' gap={2} pb={4}>
			<HStack cursor='pointer' onClick={handleEdit} w='full' borderBottom='1px solid #EDEEEF' px={4} py={2}>
				<Stack bg={'#F6F7F7'} border='1px solid #EDEEEF' justify={'center'} p={1.5} rounded={'full'}>
					<BsChevronLeft />
				</Stack>
				<Text w='full' fontWeight={500} fontSize={18}>
					Change Password
				</Text>
			</HStack>
			<FormikProvider value={formik}>
				<VStack w='full' px={2}>
					<Stack w='full' justify='space-between' p={2} gap={4}>
						<Stack gap={2}>
							<Text fontSize={14} color='#707581' textShadow='sm'>
								Current Password
							</Text>
							<Input type='password' fontSize={14} placeholder='Enter your current password ' />
						</Stack>
						<Stack gap={2}>
							<Text fontSize={14} color='#707581' textShadow='sm'>
								New Password
							</Text>
							<Field as={Input} type='password' fontSize={14} placeholder='Enter your new password' name='password' />
							<FormErrorMessage name={'password'} />
						</Stack>
						<Stack gap={2}>
							<Text fontSize={14} color='#707581' textShadow='sm'>
								Confirm New Password
							</Text>
							<Field as={Input} type='password' fontSize={14} placeholder='Confirm your new password' name='confirmPassword' />
							<FormErrorMessage name={'confirmPassword'} />
						</Stack>
					</Stack>
					<HStack align='start' w='full'>
						<Stack align='center' justify='center' w='full' gap={0}>
							<Progress w='full' roundedBottom='full' value={password.length * 12.5} size='xs' colorScheme='green' />
							<Text fontWeight={700}>8+</Text>
							<Text fontSize={12} color='#878C95'>
								Characters
							</Text>
						</Stack>
						<Stack align='center' justify='center' w='full' gap={0}>
							<Progress w='full' roundedBottom='full' value={hasUpperCase ? 100 : 0} size='xs' colorScheme='green' />
							<Text fontWeight={700}>AAA</Text>
							<Text fontSize={12} color='#878C95'>
								UpperCase
							</Text>
						</Stack>
						<Stack align='center' justify='center' w='full' gap={0}>
							<Progress w='full' roundedBottom='full' value={hasLowerCase ? 100 : 0} size='xs' colorScheme='green' />
							<Text fontWeight={700}>Aa</Text>
							<Text fontSize={12} color='#878C95'>
								LowerCase
							</Text>
						</Stack>
						<Stack align='center' justify='center' w='full' gap={1}>
							<Progress w='full' roundedBottom='full' value={hasNumbers ? 100 : 0} size='xs' colorScheme='green' />
							<Text fontWeight={700}>123</Text>
							<Text fontSize={12} color='#878C95'>
								Numbers
							</Text>
						</Stack>
					</HStack>
					<HStack w='full' justify='end' mt={8}>
						<Button fontWeight={400} color='#4C5361' h='40px' p='12px 16px' gap={2} rounded={'12px'} bg='#F6F7F7' border='1px solid #EDEEEF' w='150px' onClick={handleEdit}>
							Discard
						</Button>
						<Button fontWeight={400} color='#FFFFFF' h='40px' p='8px 14px' gap={2} rounded={'12px'} bg='#053AF9' boxShadow='sm' w='150px' isDisabled={!isValid || !formik.isValid} onClick={saveEdit}>
							Update
						</Button>
					</HStack>
				</VStack>
			</FormikProvider>
		</Stack>
	);
};
