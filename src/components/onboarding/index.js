import { Box, Flex } from "@chakra-ui/react";
import { GettingStarted } from "./steps/gettingStarted";
import { HeaderEmpty } from "../Headers";

export const AccountOnboarding = () => {
    return (
      <Box bg={"#F5F5F5"} minH={"100vh"}>
        <HeaderEmpty/>
        <Flex justify={"center"}>
          <Box
            bg={"#fff"}
            border={"1px solid #ebebeb"}
            w={"full"}
            maxW={"980px"}
            borderRadius={"16px"}
          >
            <GettingStarted/>
          </Box>
          {/* <HeaderGeneral className="!fixed !left-0 !top-0" /> */}
        </Flex>
      </Box>
    );
  };
  
  export default AccountOnboarding;
  