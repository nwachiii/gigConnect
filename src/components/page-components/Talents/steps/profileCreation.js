import {HStack, Stack, Text, VStack} from '@chakra-ui/react';
import {BsChevronLeft} from 'react-icons/bs';
import {useState} from 'react';
import {ProfileEduStep, ProfileExpStep, ProfileInfoStep, ProfileLangStep, ProfileStep} from '../profile';
import {ProfileBioStep, ProfileRateStep, ProfileScreenStep, ProfileServicesStep, ProfileSkillsStep} from '../profile/profile-skills-steps';
import {ProfileCompleteScreen} from '../profile/steps/complete';

export const ProfileCreation = () => {
	const [step, setStep] = useState(0);
	const ProfileSteps = profileSteps[step];

	const handleProgress = () => {
		setStep((prev) => prev + 1);
	};

	return (
		<VStack w={'full'} maxW={'750px'} bg={'#FFF'} borderRadius={'16px'} border={'1px solid #ebebeb'} mb={16}>
			{step < 10 && (
				<HStack p={4} borderBottom={'1px solid #ebebeb'} w={'full'}>
					<HStack gap={3} cursor={'pointer'} onClick={() => setStep((prev) => prev - 1)}>
						<Stack bg={'#F6F7F7'} justify={'center'} p={3} rounded={'full'}>
							<BsChevronLeft />
						</Stack>
						<Text fontWeight={500} fontSize={18}>
							Create your profile
						</Text>
					</HStack>
				</HStack>
			)}
			<ProfileSteps handleProgress={handleProgress} />
		</VStack>
	);
};

const profileSteps = [ProfileStep, ProfileInfoStep, ProfileExpStep, ProfileEduStep, ProfileLangStep, ProfileSkillsStep, ProfileBioStep, ProfileServicesStep, ProfileRateStep, ProfileScreenStep, ProfileCompleteScreen];
