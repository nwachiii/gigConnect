import {Flex, Stack, Image, Text} from '@chakra-ui/react';
import SkillsSelector from './AddSkillsToJob';

export const StepTwo = ({handleProgress}) => {
	return (
		<Flex justify={'space-between'} gap={'20px'}>
			<Stack spacing={'18px'} maxW={290}>
				<Image src='/img/step-two-tag.svg' alt='' w='55px' />
				<Text w='95%' color='#202329' fontSize='32px' fontWeight='700' lineHeight='48px'>{`What are the main
skills required for
your work?`}</Text>
			</Stack>
			<SkillsSelector handleProgress={handleProgress} />
		</Flex>
	);
};

export default StepTwo;
