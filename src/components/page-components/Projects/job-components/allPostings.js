import { JobListing } from "@/components/generic-components/JobListing";
import { techJobs } from "@/lib";
import { Flex, Stack, Text } from "@chakra-ui/react";
import dayjs from "dayjs";

export const AllPostings = ({ tabIndex, handleSaveJob }) => {
  const sortedJobs =
    tabIndex === 1
      ? [...techJobs].sort(
          (a, b) => dayjs(b.postedDate) - dayjs(a.postedDate)
        )
      : techJobs;

  return (
    <Stack>
      <Flex
        borderRadius="12px"
        border="1px solid #EDEEEF"
        w="full"
        px="12px"
        h={"55px"}
        align={"center"}
      >
        <Text>
          Browse jobs that match your experience to a client's hiring
          preferences. Ordered by most relevant.
        </Text>
      </Flex>
      {sortedJobs.map((job, index) => {
        return <JobListing index={index} handleJob={handleSaveJob} job={job} key={index} />;
      })}
    </Stack>
  );
};
