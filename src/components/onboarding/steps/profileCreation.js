import { HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { BsChevronLeft } from "react-icons/bs";
import {
  ProfileEduStep,
  ProfileExpStep,
  ProfileInfoStep,
  ProfileLangStep,
  ProfileStep,
} from "../profile";
import { useState } from "react";
import {
  ProfileBioStep,
  ProfileRateStep,
  ProfileScreenStep,
  ProfileServicesStep,
  ProfileSkillsStep,
} from "../profile/steps";

export const ProfileCreation = () => {
  const [step, setStep] = useState(9);
  return (
    <VStack
      w={"full"}
      maxW={"750px"}
      bg={"#FFF"}
      borderRadius={"16px"}
      border={"1px solid #ebebeb"}
      mb={16}
    >
      <HStack p={4} borderBottom={"1px solid #ebebeb"} w={"full"}>
        <HStack gap={3}>
          <Stack bg={"#F6F7F7"} justify={"center"} p={3} rounded={"full"}>
            <BsChevronLeft />
          </Stack>
          <Text fontWeight={500} fontSize={18}>
            Create your profile
          </Text>
        </HStack>
      </HStack>
      {profileSteps[step]}
    </VStack>
  );
};

const profileSteps = [
  <ProfileStep key={0} />,
  <ProfileInfoStep key={1} />,
  <ProfileExpStep key={2} />,
  <ProfileEduStep key={3} />,
  <ProfileLangStep key={4} />,
  <ProfileSkillsStep key={5} />,
  <ProfileBioStep key={6} />,
  <ProfileServicesStep key={7} />,
  <ProfileRateStep key={8} />,
  <ProfileScreenStep key={9} />
];
