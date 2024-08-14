import {HStack, Flex, Stack, Image, Text, Box, useRadioGroup, Radio} from '@chakra-ui/react';
import {GCButton} from '@/ui-lib/ui-lib-components/Button';
import {RadioCard} from '@/ui-lib/ui-lib-components/FieldSelect/RadioCard';
import {useState} from 'react';

export const StepThree = ({handleProgress}) => {
	const [scope, setScope] = useState(null);
	const options = [
		{
			leadText: 'Large',
			text: 'Longer term or complex initiatives (ex. design and build a full website)',
		},
		{
			leadText: 'Medium',
			text: 'Well-defined projects (ex. a landing page)',
		},
		{
			leadText: 'Small',
			text: 'Quick and straightforward tasks (ex. update text and images on a webpage)',
		},
	];

	const sizes = ['large', 'medium', 'small'];
	const handleVal = (val) => {
		setScope(options.filter((item) => item.leadText?.toLowerCase() === val)[0]);
	};

	const {value, getRootProps, getRadioProps} = useRadioGroup({
		name: 'sizes',
		defaultValue: scope,
		onChange: () => handleVal(value),
	});

	const group = getRootProps();
	return (
		<Flex justify={'space-between'} gap={'20px'} fontFamily='Inter'>
			<Stack spacing={'18px'} maxW={290}>
				<Image src='/img/step-three-tag.svg' alt='' w='55px' />
				<Text w='95%' color='#202329' fontSize='32px' fontWeight='700' lineHeight='48px'>{`Next, estimate the scope of your work.`}</Text>
				<Text w='95%' color='#202329' fontSize='14px' fontWeight='400' lineHeight='20px'>{`Consider the size of your project and the time it will take.`}</Text>
			</Stack>
			<Box w='647px' h='586px' borderRadius='16px' border='1px solid #ECECEC' background='#FFF' px='12px' pt={'27px'} mb='7px'>
				<Stack spacing={'15px'} {...group}>
					{sizes.map((value) => {
						const radio = getRadioProps({value});
						const idx = sizes.indexOf(value);
						return (
							<RadioCard key={value} {...radio}>
								<HStack maxW='613px' h='116px' borderRadius='16px' border='1px solid #ECECEC' align={'center'} px={2} spacing={2}>
									<Image boxSize={'44px'} src={radio.isChecked ? '/img/icons/radio-tick.svg' : '/img/icons/radio.svg'} pb={6} />
									<Stack>
										<Text color='#2A2E35' fontSize='18px' fontStyle='normal' fontWeight='700' lineHeight='28px'>
											{options[idx]?.leadText}
										</Text>
										<Text color='#4C5361' fontSize='14px' fontStyle='normal' font-Weight='400' lineHeight='20px'>
											{options[idx]?.text}
										</Text>
									</Stack>
								</HStack>
							</RadioCard>
						);
					})}
				</Stack>
				<HStack mt='50px' spacing='12px' w='full' justify={'flex-end'}>
					<GCButton onClick={() => handleProgress('prev')} bg='#E5E5E5' color='#2e2e2e' h='48px' minW='68px' w='fit-content' p='12px 16px'>
						Previous
					</GCButton>
					<GCButton isDisabled={!scope} onClick={() => handleProgress('next')} bg='#053AF9' color='#F9F9F9' h='48px' minW='68px' w='fit-content' p='12px 16px'>
						Next
					</GCButton>
				</HStack>
			</Box>
		</Flex>
	);
};

export default StepThree;
