import { Button, Image, Text, VStack } from "@chakra-ui/react";

export const OfferEmptyState = ({ tabIndex }) => {
  return (
    <VStack minH={"50vh"} align={"center"} justify={"center"}>
      <Image
        src={
          tabIndex === 1
            ? `/img/icons/activeJobEmpty.svg`
            : `/img/icons/compJobsEmpty.svg`
        }
      />
      <Text textTransform={'capitalize'} fontWeight={600}>{tabIndex === 1 ? `active` : `completed`} Jobs</Text>
      <Text
        color={"#7D7D7D"}
        textAlign={"center"}
        lineHeight={"18px"}
        maxW={"350px"}
      >
        Jobs/Contracts you've {tabIndex === 1 ? `actively` : `completed`}{" "}
        working on will appear here.
      </Text>
      <Button
        p={"6px 14px"}
        rounded={"12px"}
        border="1px solid #EDEEEF"
        bg={"#053AF9"}
        fontWeight={400}
        color={"white"}
      >
        Find Work
      </Button>
    </VStack>
  );
};