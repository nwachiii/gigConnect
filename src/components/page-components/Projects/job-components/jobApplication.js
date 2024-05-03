import { Heading, Stack, Text } from "@chakra-ui/react";

export const JobApplication = () => {
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

      {/* Main Content */}
      <Stack
        borderRadius={"16px"}
        p={4}
        gap={4}
        minW="981px"
        w="full"
        bg="#FFFFFF"
      >
        <Heading fontSize={24}>Application Process</Heading>
      </Stack>
    </Stack>
  );
};
