import { Box, Flex } from "@chakra-ui/react";
import { GettingStarted } from "./steps/gettingStarted";
import { HeaderEmpty } from "../Headers";
import { FreelanceGoal, FreelanceScreen } from "./steps/freelanceScreen";
import { ProfileCreation } from "./steps/profileCreation";

export const AccountOnboarding = () => {
  return (
    <Box bg={"#F5F5F5"} minH={"100vh"}>
      <HeaderEmpty />
      <Flex justify={"center"}>
        {/* <GettingStarted /> */}
        <FreelanceScreen />
        <FreelanceGoal/>
        <ProfileCreation/>
      </Flex>
    </Box>
  );
};

export default AccountOnboarding;
