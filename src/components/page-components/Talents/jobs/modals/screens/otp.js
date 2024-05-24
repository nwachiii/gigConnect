import {
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  ModalContent,
  Text,
  VStack,
} from "@chakra-ui/react";
import { OTPInput } from "chakra-otp-input";
import { useState } from "react";

export const WithdrawOTP = ({ formattedValue, handleScreen, handleClose }) => {
  const [pwrdOTP, setPwrdOTP] = useState(null);
  return (
    <ModalContent
      rounded={"16px"}
      maxW={"586px"}
      //   maxH={"412px"}
      w={"full"}
      p={4}
    >
      <VStack
        // minH={"379px"}
        maxW={"565px"}
        p="10px"
        bg="#EDEEEF"
        rounded={"16px"}
        align={"center"}
        gap={6}
        pb={10}
      >
        <Image
          src="/img/icons/wallet.svg"
          boxSize={"32px"}
          objectFit={"cover"}
        />
        <Heading lineHeight={"32px"} fontSize={24} textAlign={"center"}>
          Confirm withdrawal
        </Heading>
        <Text
          color={"#4C5361"}
          textAlign={"center"}
          lineHeight={"18px"}
          fontSize={14}
          px={20}
        >
          A six (6) digit code has been sent to your email address
          ***mkl@gmail.com and your phone number ***490 to confirm fund transfer
        </Text>
        <Flex
          //   maxW="165px"
          h="48px"
          rounded="14px"
          border="1px solid #EDEEEF"
          bg="#C8CACE"
          alignItems="center"
          p="5px 16px"
          gap={2}
        >
          <Text color="#4C5361" fontSize={24} fontWeight={500}>
            {formattedValue}
          </Text>
          <Image
            src="/img/icons/editIcon.svg"
            boxSize={"16px"}
            cursor={"pointer"}
            onClick={() => handleScreen("withdrawScreen")}
          />
        </Flex>
        <OTPInput
          sx={{
            bg: "#fff",
            border: "1px solid #E0E0E0",
            p: "18px 16px",
            boxShadow: "none",
          }}
          typeof="number"
          isNumeric
          noInputs={6}
          onChange={(value) => setPwrdOTP(value)}
        />
        <HStack w="full" align="center" justify="space-between" maxW={"375px"}>
          <Text fontSize={12} fontWeight={500}>
            Didn't receive OTP?
          </Text>
          <Text fontSize={12} fontWeight={500}>
            Resend in 0:25 Sec
          </Text>
        </HStack>
        <HStack w="full" align="center" justify="center">
          <Button
            fontWeight={400}
            fontSize={14}
            bg="#FFF"
            color="#4C5361"
            p={"6px 14px"}
            rounded={"12px"}
            w="full"
            maxW={"195px"}
            h="32px"
            _hover={{
              bg: "",
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            fontWeight={400}
            fontSize={14}
            bg="#053AF9"
            color="#FFF"
            p={"6px 14px"}
            rounded={"12px"}
            w="full"
            maxW={"195px"}
            h="32px"
            boxShadow="md"
            _hover={{
              bg: "",
            }}
            onClick={() => handleScreen("withdrawSuccess")}
            isDisabled={pwrdOTP?.length !== 6}
          >
            Approve withdrawal
          </Button>
        </HStack>
      </VStack>
    </ModalContent>
  );
};
