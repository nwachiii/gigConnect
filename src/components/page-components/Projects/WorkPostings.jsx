import { JobListing } from "@/components/generic-components/JobListing";
import { techJobs } from "@/lib";
import {
    Box,
  Flex,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

export const JobPostings = () => {
  return (
    <Stack borderRadius={"16px"} p={4} gap={4} maxW="981px" w="full" bg="#FFFFFF">
      <InputGroup alignItems={"center"}>
        <InputRightElement p={2} right={'4px'} top={"5px"}>
          <CiSearch size={25} />
        </InputRightElement>
        <Input placeholder="Search for jobs" py={6} w={"full"} />
      </InputGroup>
      <Heading fontSize={24}>Jobs you might like</Heading>
      <Flex
        h="56px"
        borderRadius="12px"
        border="1px solid #EDEEEF"
        w="full"
        align="center"
        px="12px"
        justifyContent={"space-between"}
      >
        <HStack spacing="13px">
          <Text color="#2e2e2e" fontWeight={"600"} fontSize={"18px"}>
            Posting
          </Text>
          <HStack
            spacing="10px"
            h="42px"
            px="5px"
            justify={"center"}
            align="center"
            bg="#F5F5F5"
            borderRadius={"16px"}
          >
            <Text
              fontSize={"14px"}
              borderRadius={"16px"}
              p="5px 9px"
              bg="#FFFFFF"
            >{`Active (0)`}</Text>
            <Text
              fontSize={"14px"}
              borderRadius={"16px"}
              p="5px 9px"
              bg="#FFFFFF"
            >{`Archived (0)`}</Text>
          </HStack>
        </HStack>
      </Flex>
      <Flex
        borderRadius="12px"
        border="1px solid #EDEEEF"
        w="full"
        px="12px"
        h={'55px'}
        align={'center'}
      >
        <Text>Browse jobs that match your experience to a client's hiring preferences. Ordered by most relevant.</Text>
      </Flex>
      <Stack>
        {techJobs.map((job, index) => {
          return <JobListing job={job} key={index} />
        })}
      </Stack>
    </Stack>
  );
};
