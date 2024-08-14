import {Button, Image, Text, VStack} from '@chakra-ui/react';
import {useState} from 'react';

export const OfferEmptyState = ({headerText, desc, image}) => {
	return (
		<VStack minH={'50vh'} align={'center'} justify={'center'}>
			<Image src={image} />
			<Text textTransform={'capitalize'} fontWeight={600}>
				{headerText}
			</Text>
			<Text color={'#7D7D7D'} textAlign={'center'} lineHeight={'18px'} maxW={'300px'}>
				Jobs/Contracts you've {desc} working on will appear here.
			</Text>
			<Button p={'6px 14px'} rounded={'12px'} border='1px solid #EDEEEF' bg={'#053AF9'} fontWeight={400} color={'white'}>
				Find Work
			</Button>
		</VStack>
	);
};
