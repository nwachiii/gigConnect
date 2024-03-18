"use client";
import { Box, Flex } from "@chakra-ui/react";
import { GettingStarted } from "./steps/gettingStarted";
import { HeaderEmpty } from "../Headers";
import { FreelanceGoal, FreelanceScreen } from "./steps/freelanceScreen";
import { ProfileCreation } from "./steps/profileCreation";
import { cloneElement, useState } from "react";

export const AccountOnboarding = () => {
  const [screenNumber, setScreenNumber] = useState(0);
  const withSetScreenNumber = Component => props => <Component {...props} setScreenNumber={setScreenNumber} />;
  const OnboardingScreen = withSetScreenNumber(onboardingScreens[screenNumber]);

  return (
    <Box bg={"#F5F5F5"} minH={"100vh"}>
      <HeaderEmpty />
      <Flex justify={"center"}>
        <OnboardingScreen />
      </Flex>
    </Box>
  );
};

export default AccountOnboarding;

const onboardingScreens = [
  GettingStarted,
  FreelanceScreen,
  FreelanceGoal,
  ProfileCreation,
];