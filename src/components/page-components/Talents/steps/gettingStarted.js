import {
  Box,
  Button,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export const GettingStarted = ({ setScreenNumber }) => {
  return (
    <Box
      bg={"#fff"}
      border={"1px solid #ebebeb"}
      w={"full"}
      maxW={"980px"}
      borderRadius={"16px"}
    >
      <HStack
        justify={"space-between"}
        p={8}
        align={"flex-start"}
        lineHeight={"32px"}
        gap={8}
      >
        <VStack align={"flex-start"} gap={4} w={"full"} maxW={"427px"}>
          <Text fontWeight={700} fontSize={"24px"} color={"#202329"}>
            Hey Ola. Ready for your next big opportunity?
          </Text>
          <VStack
            border={"1px solid #EDEEEF"}
            p={4}
            borderRadius={"12px"}
            align={"start"}
            w={"full"}
          >
            <HStack
              gap={2}
              border={"1px solid #EDEEEF"}
              p={2}
              borderRadius={"12px"}
              w={"full"}
              align={"center"}
            >
              <Image src="/img/icons/message-question-circle.svg" alt="" />
              <Text fontSize={14} whiteSpace={"nowrap"} color={"#454C58"}>
                Answer a few questions and start building your profile
              </Text>
            </HStack>
            <HStack
              gap={2}
              border={"1px solid #EDEEEF"}
              p={2}
              borderRadius={"12px"}
              w={"full"}
            >
              <Image src="/img/icons/mailIcon.svg" alt="" />
              <Text fontSize={14} whiteSpace={"nowrap"} color={"#454C58"}>
                Apply for open roles or list services for clients to buy
              </Text>
            </HStack>
            <HStack
              gap={2}
              border={"1px solid #EDEEEF"}
              p={2}
              borderRadius={"12px"}
              w={"full"}
            >
              <Image src="/img/icons/currency-dollar-circle.svg" alt="" />
              <Text fontSize={14} whiteSpace={"nowrap"} color={"#454C58"}>
                Get paid safely and know we're there to help
              </Text>
            </HStack>
          </VStack>
          <Text
            color={"#4C5361"}
            fontSize={"12px"}
            maxW={"250px"}
            lineHeight={"18px"}
          >
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
            onClick={() => setScreenNumber(1)}
          >
            Get Started
          </Button>
        </VStack>
        <VStack
          border={"1px solid #ebebeb"}
          rounded={"12px"}
          justify={"center"}
          p={8}
          minW={"432px"}
          w={"full"}
          maxW={"432px"}
        >
          <VStack gap={0.5} justify={"center"}>
            <Stack>
              <Image src="/img/profilePicture.png" alt="" />
            </Stack>
            <Text fontSize={18} color={"#2E2E2E"} fontWeight={500}>
              James Daniels
            </Text>
            <Text>CRM Developer | Fintech</Text>
          </VStack>
          <HStack
            bg={"#FFF"}
            borderRadius={"12px"}
            border={"1px solid #EDEEEF"}
            gap={8}
            p={2}
          >
            <HStack w={"full"}>
              <Image src="/img/icons/heart.svg" alt="" w={"24px"} h={"24px"} />
              <Text color={"#4c5361"} fontWeight={700} fontSize={12}>
                $15.00
                <span className="font-normal">/hr</span>
              </Text>
            </HStack>
            <HStack
              w={"full"}
              minW={"90px"}
              bg={"#F6F5F5"}
              border={"1px solid #EDEAEC"}
              py={2}
              px={3}
              justify={"center"}
              borderRadius={"12px"}
            >
              <Text fontSize={12} lineHeight={"18px"}>
                Verified
              </Text>
              <Image src="/img/icons/check-verified.svg" alt="" />
            </HStack>
          </HStack>
          <Text textAlign={"center"} maxW={"300px"}>
            “GigConnect has enabled me to increase my rates. I know what I&#39;m
            bringing to the table and love the feeling of being able to help a
            variety of clients.”
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};
