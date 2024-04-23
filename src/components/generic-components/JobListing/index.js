import { Flex, HStack, Image, Stack, StackDivider, Text } from "@chakra-ui/react";
import { CiHeart } from "react-icons/ci";

export const JobListing = ({ job }) => {
  console.log(job);
  return (
    <Stack borderRadius="12px" border="1px solid #EDEEEF" p={4} gap={4}>
      <HStack>
        <Text>{job.clientName}</Text>
      </HStack>
      <HStack align={"start"} color={"#878C95"}>
        <Image src="/img/icons/location.svg" alt="location" />
        <Text>Lagos, Nigeria | {job.location}</Text>
      </HStack>
      <Flex
        borderRadius="16px"
        border="1px solid #EDEEEF"
        w="full"
        px="12px"
        h={"55px"}
        align={"center"}
        justify={'space-around'}
      >
        <CiHeart size={30} />
        <HStack
          bg={"#F6F5F5"}
          border={"1px solid #EDEAEC"}
          h={'max-content'}
          p={'4px 8px'}
          justify={"center"}
          borderRadius={"12px"}
        >
          <Text>Verified</Text>
          <Image src="/img/icons/check-verified.svg" alt="" />
        </HStack>
        <HStack
            color={'#4C5361'}
            divider={<StackDivider dir="horizontal" color={'#4C5361'}/>}
        >
            <Text>Fixed-Price</Text>
            <Text>{job.difficulty}</Text>
        </HStack>
      </Flex>
      <Text fontSize={18} fontWeight={500}>
        {job.projectTitle}
      </Text>
      <Text>{job.jobDescription}</Text>
    </Stack>
  );
};
