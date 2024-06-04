import {
  Button,
  Flex,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ProfileSetup } from "../../Projects/job-components/modals/profileSetup";

export const TransactionHistory = () => {
  const modalDisclosure = useDisclosure();

  return (
    <Stack
      maxW="1120px"
      w="full"
      padding="16px 44px"
      alignItems="center"
      justifyContent="space-between"
      spacing="20px"
      mx="auto"
    >
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
      <Text fontSize={24} fontWeight={600}>
        Transaction history
      </Text>

      <ProfileSetup modalDisclosure={modalDisclosure} />
    </Stack>
  );
};
