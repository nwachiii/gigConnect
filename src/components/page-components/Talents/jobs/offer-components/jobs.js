import { Button, Stack, Text } from "@chakra-ui/react";
import { OfferEmptyState } from "./offerEmpty";
import { techJobs } from "@/lib";
import { JobListing } from "@/components/generic-components/JobListing";

export const ReceivedOffers = ({ handleSaveJob }) => {
  const receivedOffers = [...techJobs];

  return (
    <Stack>
      {receivedOffers.length > 0 && receivedOffers ? (
        receivedOffers.map((job, index) => {
          return (
            <JobListing
              link={`/my-jobs/offers/${job.id}`}
              handleJob={handleSaveJob}
              job={job}
              key={index}
              buttonText={"View Offer"}
            />
          );
        })
      ) : (
        <OfferEmptyState
          headerText={"Received Offers"}
          desc={"received"}
          image={"/img/icons/receivedJobsEmpty.svg"}
        />
      )}
    </Stack>
  );
};

export const ActiveJobs = () => {
  const activeJobs = [...techJobs];
  return (
    <Stack>
      {activeJobs?.length > 0 && activeJobs ? (
        activeJobs.map((job, index) => {
          return (
            <JobListing
              job={job}
              key={index}
              component={
                <Button
                  bg={"#F6F7F7"}
                  color={"#4C5361"}
                  rounded={"12px"}
                  fontWeight={400}
                  p={"6px 16px"}
                  w={"max-content"}
                  fontSize={14}
                  h={"32px"}
                >
                  Message
                </Button>
              }
              buttonText={"View Contract"}
              link={`/my-jobs/contracts/view/${job.id}`}
            />
          );
        })
      ) : (
        <OfferEmptyState
          headerText={"Active Jobs"}
          desc={"actively"}
          image={"/img/icons/activeJobEmpty.svg"}
        />
      )}
    </Stack>
  );
};

export const CompletedJobs = () => {
  const completedJobs = [...techJobs];

  return (
    <Stack>
      {completedJobs?.length > 0 && completedJobs ? (
        completedJobs.map((job, index) => {
          return <JobListing job={job} key={index} buttonText={"View Offer"}  />;
        })
      ) : (
        <OfferEmptyState
          headerText={"Completed Jobs"}
          desc={"completed"}
          image={"/img/icons/completedJobsEmpty.svg"}
        />
      )}
    </Stack>
  );
};
