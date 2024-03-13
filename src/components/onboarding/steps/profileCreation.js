import { Box, Button, HStack, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { BsChevronLeft } from "react-icons/bs";

export const ProfileCreation = () => {
  return (
    <VStack
      w={"full"}
      maxW={"490px"}
      bg={"#FFF"}
      borderRadius={"16px"}
      border={"1px solid #ebebeb"}
    >
      <HStack p={4} borderBottom={"1px solid #ebebeb"} w={"full"}>
        <HStack gap={3}>
          <Stack bg={"#F6F7F7"} justify={"center"} p={3} rounded={"full"}>
            <BsChevronLeft />
          </Stack>
          <Text fontWeight={500} fontSize={18}>
            Create your profile
          </Text>
        </HStack>
      </HStack>
      
    </VStack>
  );
};

