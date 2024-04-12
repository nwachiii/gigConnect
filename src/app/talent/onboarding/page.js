"use client";
import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { HeaderEmpty } from "@/components/generic-components/Headers";
import { GettingStarted } from "@/components/page-components/Talents/steps/gettingStarted";
import {
  FreelanceGoal,
  FreelanceScreen,
} from "@/components/page-components/Talents/steps/freelanceScreen";
import { ProfileCreation } from "@/components/page-components/Talents/steps/profileCreation";

export const AccountOnboarding = () => {
  const [screenNumber, setScreenNumber] = useState(3);
  // eslint-disable-next-line react/display-name
  const withSetScreenNumber = (Component) => (props) =>
    <Component {...props} setScreenNumber={setScreenNumber} />;
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
