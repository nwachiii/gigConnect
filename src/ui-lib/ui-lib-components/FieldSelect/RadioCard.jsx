import { Box, useRadio } from "@chakra-ui/react";

// 1. Create a component that consumes the `useRadio` hook
export const RadioCard = (props) => {
	const {getInputProps, getRadioProps} = useRadio(props);

	const input = getInputProps();
	const checkbox = getRadioProps();

	return (
		<Box as='label'>
			<input {...input} />
			<Box
				{...checkbox}
				// px={5}
				// py={3}
				boxShadow='sm'
				cursor='pointer'
				// borderWidth='1px'
				// borderRadius='lg'
				// _checked={{
				// 	bg: 'teal.600',
				// 	color: 'white',
				// 	borderColor: 'teal.600',
				// }}
				// _focus={{
				// 	boxShadow: 'outline',
				// }}
				>
				{props.children}
			</Box>
		</Box>
	);
};
