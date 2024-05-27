import {
  Box,
  Button,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { OTPInput } from "chakra-otp-input";
import { useState } from "react";

export const PhoneFA = ({ step, setStep }) => {
  const [pwrdOTP, setPwrdOTP] = useState(null);
  return (
    <VStack gap={4} align={"start"} w={"full"} maxW={980} pb={4}>
      <Box bg={"#efefef"} borderRadius={"24px"} px={"6px"} py={"5px"}>
        <Box
          bg={"#fff"}
          px={3}
          py={1}
          border={"1px solid #dfdfdf"}
          borderRadius={"14px"}
        >
          <Text fontSize={14} fontWeight={500}>
            1/3
          </Text>
        </Box>
      </Box>
      <HStack w='full' align='self-start' >
        <Stack maxW={"300px"}>
          <Heading lineHeight={"48px"}>
            Enable 2 step verification
          </Heading>
          <Text maxW={200} fontSize={14} color={"#4C5361"}>
            A verification code has been sent to your phone number that ends
            with **59
          </Text>
        </Stack>
        <VStack
          align={"start"}
          border={"1px solid #edeeef"}
          rounded={"12px"}
          p={2}
          // w={"full"}
          gap={'24px'}
          maxW={650}
          minH={220}
          flex={1}
        >
          <HStack w='full' justify={'end'} gap={2} mb={2}>
            <Button
              bg={"#F6F7F7"}
              rounded={"12px"}
              fontWeight={400}
              px={4}
              py={"6px"}
              h={"max-content"}
              border='1px solid #EDEEEF'
              fontSize={14}
            >
              Change Phone Number
            </Button>
            <Button
              bg={"#F6F7F7"}
              rounded={"12px"}
              fontWeight={400}
              px={4}
              py={"6px"}
              h={"max-content"}
              fontSize={14}
              border='1px solid #EDEEEF'
              onClick={() => setStep(1)}
            >
              Skip
            </Button>
          </HStack>
          <Stack>
            <Text maxW={"400px"} fontSize={14} color={"#4C5361"}>
              Verification Code
            </Text>
            <OTPInput
              typeof="number"
              placeholder="0"
              noInputs="6"
              onChange={(e) => setPwrdOTP(e)}
              style={{
                height: "76px",
                border: "1px solid #F2F4F7",
                width: "55px",
              }}
              fontSize={48}
              boxShadow={"none"}
            />
            <Text maxW={"400px"} fontSize={14} color={"#4C5361"}>
              Didn't receive a verification code?{" "}
              <span style={{ color: "#053AF9" }}>Resend</span>
            </Text>
          </Stack>
          <HStack w='full' justify={'end'} gap={2} mb={2}>
            <Button
              bg={"#F6F7F7"}
              rounded={"12px"}
              fontWeight={400}
              h={"50px"}
              fontSize={14}
              isDisabled={step <= 0}
              border='1px solid #EDEEEF'
              w='140px'
            >
              Previous
            </Button>
            <Button
              bg={"#053AF9"}
              color={"white"}
              rounded={"12px"}
              fontWeight={400}
              fontSize={14}
              h={"50px"}
              w='140px'
              isDisabled={pwrdOTP === null || pwrdOTP.length < 6 }
              onClick={() => setStep(1)}
            >
              Save Changes
            </Button>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
};
