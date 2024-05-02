import { JobListing } from "@/components/generic-components/JobListing";
import { Image, Stack, Text, VStack } from "@chakra-ui/react";

export const SavedPostings = ({ savedJobs, handleSaveJob }) => {
  return (
    <Stack>
      {savedJobs.length > 0 && savedJobs ? (
        savedJobs.map((job, index) => {
          const isSaved = savedJobs.find((savedJob) => savedJob.id === job.id);
          return <JobListing isSaved={isSaved} handleJob={handleSaveJob} job={job} key={index} />;
        })
      ) : (
        <VStack minH={'37.5vh'} align={'center'} justify={'center'}>
          <Image src="/img/icons/blueHeart.svg" />
          <Text fontWeight={600}>No Saved Jobs</Text>
          <Text color={"#7D7D7D"} textAlign={"center"} lineHeight={'18px'} maxW={'350px'}>
            Keep track of jobs you're interested in. Select the heart icon on a
            job post to save it for later.
          </Text>
        </VStack>
      )}
    </Stack>
  );
};
