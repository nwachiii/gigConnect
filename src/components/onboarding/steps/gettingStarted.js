import { Button, HStack, Stack, Text, VStack } from "@chakra-ui/react";

export const GettingStarted = () => {
  return (
    <HStack
      justify={"space-between"}
      p={8}
      align={"flex-start"}
      lineHeight={"32px"}
    >
      <VStack align={"flex-start"} w={"50%"}>
        <Text fontWeight={700} fontSize={"24px"} color={"#202329"}>
          Hey Ola. Ready for your next big opportunity?
        </Text>
        <Text color={"#4C5361"} fontSize={"12px"} maxW={"200px"}>
          It only takes 5-10 minutes and you can edit it later. We'll save as
          you go.
        </Text>
        <Button
          background={"#053AF9"}
          px={6}
          py={2}
          color={"#fff"}
          borderRadius={"12px"}
          boxShadow={"sm"}
        >
          Get Started
        </Button>
      </VStack>
      <VStack
        border={"1px solid #ebebeb"}
        rounded={"12px"}
        justify={"center"}
        p={10}
        w={"50%"}
      >
        <VStack gap={0.5} justify={"center"}>
          <Stack>
            <img
              className="relative w-[120px] h-[120px]"
              alt="Ellipse"
              src="ellipse-855.svg"
            />
          </Stack>
          <Text fontSize={18} color={"#2E2E2E"} fontWeight={500}>
            James Daniels
          </Text>
          <Text>CRM Developer | Fintech</Text>
        </VStack>
        <VStack
          bg={"#FFF"}
          borderRadius={"12px"}
          border={"1px solid #EDEEEF"}
          gap={20}
        >
          <Text color={"#4c5361"} fontWeight={700} fontSize={12}>
            $15.00
            <span className="font-normal">/hr</span>
          </Text>
        </VStack>
        <Text textAlign={"center"} maxW={"300px"}>
          “GigConnect has enabled me to increase my rates. I know what I&#39;m
          bringing to the table and love the feeling of being able to help a
          variety of clients.”
        </Text>
      </VStack>
    </HStack>
  );
};
