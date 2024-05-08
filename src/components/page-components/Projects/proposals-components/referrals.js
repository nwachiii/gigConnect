import { Button, Image, Text, VStack } from "@chakra-ui/react";

export const Referrals = () => {
  return (
    <VStack minH={"37.5vh"} align={"center"} justify={"center"} gap={4}>
      <Image src="/img/icons/blueArrow.svg" />
      <Text fontWeight={600}>You haven't referred anyone yet</Text>
      <Text
        color={"#7D7D7D"}
        textAlign={"center"}
        lineHeight={"18px"}
        maxW={"350px"}
      >
        When declining an invitation, you can make a referral to help other freelancers succeed and help clients fill their job
      </Text>
      <Button
          p={"6px 14px"}
          rounded={"12px"}
          border="1px solid #EDEEEF"
          bg={"#F6F7F7"}
          fontWeight={400}
        >
          Learn more
        </Button>
    </VStack>
  );
};
