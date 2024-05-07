"use client";
import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import {
  HeaderEmpty,
  HeaderWithNav,
} from "@/components/generic-components/Headers";
import { GettingStarted } from "@/components/page-components/Talents/steps/gettingStarted";
import {
  FreelanceGoal,
  FreelanceScreen,
} from "@/components/page-components/Talents/steps/freelanceScreen";
import { ProfileCreation } from "@/components/page-components/Talents/steps/profileCreation";
import { FormikProvider, useFormik } from "formik";
import { userProfileSchema, userProfileValues } from "@/lib/schema";

export const AccountOnboarding = () => {
  const [screenNumber, setScreenNumber] = useState(0);
  // eslint-disable-next-line react/display-name
  const OnboardingScreen = onboardingScreens[screenNumber];

  const formik = useFormik({
    initialValues: userProfileValues,
    validationSchema: userProfileSchema,
    validateOnMount: true,
  });

  console.log(formik.values)

  return (
    <Box bg={"#F5F5F5"} minH={"100vh"}>
      <HeaderWithNav isLogin />
      <Flex pt={10} justify={"center"}>
        <FormikProvider value={formik}>
        <OnboardingScreen setScreenNumber={setScreenNumber} />
        </FormikProvider>
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
