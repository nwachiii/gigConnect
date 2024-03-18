"use client";
import { Box, Flex } from "@chakra-ui/react";
import { GettingStarted } from "./steps/gettingStarted";
import { HeaderEmpty } from "../Headers";
import { FreelanceGoal, FreelanceScreen } from "./steps/freelanceScreen";
import { ProfileCreation } from "./steps/profileCreation";
import { useState } from "react";

export const AccountOnboarding = () => {
  const [step, setStep] = useState(3);
  return (
    <Box bg={"#F5F5F5"} minH={"100vh"}>
      <HeaderEmpty />
      <Flex justify={"center"}>{onboardingScreens[step]}</Flex>
    </Box>
  );
};

export default AccountOnboarding;

const onboardingScreens = [
  <GettingStarted key={0} />,
  <FreelanceScreen key={1} />,
  <FreelanceGoal key={2} />,
  <ProfileCreation key={3} />,
];
