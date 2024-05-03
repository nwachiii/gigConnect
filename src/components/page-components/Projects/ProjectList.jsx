import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { JobPostings } from "./WorkPostings";
import { ProfileSidebar } from "./profileSidebar";
import { ProfileSetup } from "./job-components/modals/profileSetup";

export const ProjectList = () => {
  const modalDisclosure = useDisclosure()

  return (
    <Stack
      maxW="1440px"
      w="full"
      padding="16px 44px"
      alignItems="center"
      justifyContent="space-between"
      spacing="36px"
      mx="auto"
    >
      {/* Subnav */}
      <VStack w="full" align="self-start" justifyContent={"space-between"}>
        <Flex gap={2}>
          <Heading fontSize="24px" fontWeight="600">
            Discovery Space
          </Heading>
          <Image src="/img/waving-hand.svg" alt="waving hand" />
        </Flex>
        <Text color="#2E2E2E" fontSize="14px" fontWeight="400">
          Welcome to your workspace Ola
        </Text>
      </VStack>

      {/* Banner */}
      <Flex
        h="58px"
        bg="#202329"
        align="center"
        p="13px 15px 13px 18px"
        w="full"
        borderRadius={"16px"}
        justify={"space-between"}
      >
        <Text color="#FFFFFF" fontSize={"14px"} fontWeight={"500"}>
          Complete your account setup to build trust and connect with talents
        </Text>
        <Button
          color="#4C5361"
          fontSize="14px"
          fontWeight="400"
          bg="#F6F7F7"
          w="106px"
          h="32px"
          p="6px 14px"
          borderRadius="12px"
          onClick={modalDisclosure.onOpen}
        >
          Get Started
        </Button>
      </Flex>

      {/* Main Content */}
      <Flex w="full" columnGap="20px">
        <JobPostings />
        <ProfileSidebar showSteps />
      </Flex>
      <ProfileSetup modalDisclosure={modalDisclosure} />
    </Stack>
  );
};
