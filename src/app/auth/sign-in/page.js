/* eslint-disable @next/next/no-img-element */
import { BsEyeSlash } from "react-icons/bs";
import {
  Box,
  Flex,
  HStack,
  Text,
  Link,
  Image,
  Button,
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  Heading,
} from "@chakra-ui/react";
import GigConnectLogo from "@/assets/logo.svg";
import { Footer } from "@/components/Footer";

export const SignIn = () => {
  return (
    <Box background={"#fff"} w={"full"} justify={"center"}>
      <Link href="/">
        <Image src={GigConnectLogo.src} alt="logo" p={10} />
      </Link>
      <Flex alignItems={"center"} justify={"center"}>
        <Box
          width="460px"
          height="626px"
          bg="#ffffffcc"
          borderRadius={10}
          border="1px solid #ebebeb"
          p={10}
        >
          <Heading
            fontFamily={"Inter"}
            fontWeight="extrabold"
            color="#0c0c0c"
            fontSize="28px"
            width={"222px"}
            mb={8}
          >
            Sign in to your account
          </Heading>
          <Flex direction={"column"} alignItems="center" gap="28px" w={"full"}>
            <VStack align={"start"} w={"full"}>
              <Text fontWeight="medium" fontSize="12px">
                Email
              </Text>
              <Input
                type="email"
                placeholder="Enter your email"
                border="1px solid #e0e0e0"
                borderRadius={"12px"}
                px="16px"
                py="18px"
                fontSize="12px"
              />
            </VStack>
            {/* Password */}
            <VStack align={"start"} w={"full"}>
              <Text fontSize="12px">Password</Text>
              <InputGroup>
                <Input
                  type="password"
                  placeholder="Enter password"
                  border="1px solid #e0e0e0"
                  borderRadius={"12px"}
                  px="16px"
                  py="18px"
                  fontSize="12px"
                />
                <InputRightElement>
                  <BsEyeSlash size={25} color="#727272" />
                </InputRightElement>
              </InputGroup>
            </VStack>
            {/* Keep me signed in */}
            <HStack align={"center"} justify={"space-between"} w={"full"}>
              <HStack alignItems="center" gap="4px">
                <Box
                  position="relative"
                  width="24px"
                  height="24px"
                  bg="#f8f8f8"
                  rounded="8px"
                  border="1.5px solid #e0e0e0"
                />
                <Text
                  position="relative"
                  width="fit-content"
                  fontFamily="Inter"
                  fontWeight="medium"
                  color="#0c0c0c"
                  fontSize="12px"
                  textAlign="center"
                  lineHeight="18px"
                  whiteSpace="nowrap"
                >
                  Keep me signed in
                </Text>
              </HStack>
              <Text
                fontWeight={500}
                color="#0c0c0c"
                fontSize="12px"
                textAlign="right"
                lineHeight="18px"
                whiteSpace="nowrap"
              >
                Forgot Password?
              </Text>
            </HStack>
            {/* Sign in */}
            <Button
              alignItems="center"
              justifyContent="center"
              gap="10px"
              px="28px"
              py="12px"
              bg="#0c0c0c"
              borderRadius={"10px"}
              color={"#fff"}
              w={"full"}
              fontWeight={500}
            >
              Sign in
            </Button>
            {/* Sign in with Google */}
            <Button
              alignItems="center"
              justifyContent="center"
              gap="10px"
              px="28px"
              py="12px"
              bg="#f0f0f0"
              borderRadius={10}
              w={"full"}
            >
              <Flex
                alignItems="center"
                justifyContent="center"
                gap="4px"
                position="relative"
              >
                <Image
                  src="/img/google-g-logo-1.svg"
                  alt="Google g logo"
                  boxSize={"16px"}
                />
                <Text
                  fontWeight="medium"
                  color="#0c0c0c"
                  fontSize="14px"
                  textAlign="center"
                >
                  Sign in with Google
                </Text>
              </Flex>
            </Button>
            {/* Create an Account */}
            <HStack gap={1} fontSize={14}>
              <Text color="#878a8f">Don’t have an Account? </Text>
              <Link href="/auth/create-account/select-type">
                <Text fontWeight="medium" color="#0c0c0c">
                  Create an Account
                </Text>
              </Link>
            </HStack>
          </Flex>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};

export default SignIn;
