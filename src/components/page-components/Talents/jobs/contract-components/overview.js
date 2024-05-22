import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  StackDivider,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";

export const ContractOverview = () => {
  return (
    <Flex gap={6} w="full" justify={"space-between"}>
      <VStack
        border={"1px solid #EDEEEF"}
        p={"16px"}
        rounded={"12px"}
        gap={2}
        pb={4}
        align="start"
        flex={1}
      >
        <Heading fontSize={20}>Milestone timeline</Heading>
        <Stack pt={2} gap={6}>
          <Flex gap={4} align="start">
            <Image src="/img/icons/activeMile.svg" />
            <Stack gap={1}>
              <Text pb={2} fontWeight={700}>
                Phase 1
              </Text>
              <Text
                color={"#7D7D7D"}
                fontSize={"14px"}
                fontWeight={"400"}
                maxW={500}
              >
                Nunc eu tellus est. Nullam ultricies blandit nisl et dapibus.
                Sed et lorem libero. Vivamus sodales, justo sed congue bibendum,
                purus dui blandit nulla, nec eleifend est augue et tortor.
                Quisque vitae dui eget quam bibendum consequat vel non augue.
                Aenean vel sem pulvinar, vulputate diam ac, viverra orci. Etiam
                ornare laoreet turpis, in condimentum eros posuere non. Nullam
                nunc tortor, ultricies sed faucibus nec, rutrum vitae lorem.
                Morbi id varius sapien, quis vulputate mauris.
              </Text>
              <Text fontWeight={600}>$ 340.00</Text>
              <Button
                fontWeight={400}
                fontSize={12}
                bg="#27AE60"
                color="#FFF"
                h={"22px"}
                p={"2px 8px"}
                rounded={"16px"}
                w={"max-content"}
              >
                Paid
              </Button>
            </Stack>
          </Flex>
          <Flex gap={4} align="start">
            <Image src="/img/icons/pendingMile.svg" />
            <Stack gap={1}>
              <Text pb={2} fontWeight={700}>
                Phase 2
              </Text>
              <Text
                color={"#7D7D7D"}
                fontSize={"14px"}
                fontWeight={"400"}
                maxW={500}
              >
                Aenean vel sem pulvinar, vulputate diam ac, viverra orci. Etiam
                ornare laoreet turpis, in condimentum eros posuere non. Nullam
                nunc tortor, ultricies sed faucibus nec, rutrum vitae lorem.
                Morbi id varius sapien, quis vulputate mauris.
              </Text>
              <Text fontWeight={600}>$ 340.00</Text>
              <Button
                fontWeight={400}
                fontSize={12}
                bg="#F6F7F7"
                border="1px solid #EDEEEF"
                h={"22px"}
                p={"2px 8px"}
                rounded={"16px"}
                w={"max-content"}
              >
                Pending
              </Button>
            </Stack>
          </Flex>
          <Flex gap={4} align="start">
            <Image src="/img/icons/pendingMile.svg" />
            <Stack gap={1}>
              <Text pb={2} fontWeight={700}>
                Phase 3
              </Text>
              <Text
                color={"#7D7D7D"}
                fontSize={"14px"}
                fontWeight={"400"}
                maxW={500}
              >
                Aenean vel sem pulvinar, vulputate diam ac, viverra orci. Etiam
                ornare laoreet turpis, in condimentum eros posuere non. Nullam
                nunc tortor, ultricies sed faucibus nec, rutrum vitae lorem.
                Morbi id varius sapien, quis vulputate mauris.
              </Text>
              <Text fontWeight={600}>$ 340.00</Text>
              <Button
                fontWeight={400}
                fontSize={12}
                bg="#F6F7F7"
                border="1px solid #EDEEEF"
                h={"22px"}
                p={"2px 8px"}
                rounded={"16px"}
                w={"max-content"}
              >
                Pending
              </Button>
            </Stack>
          </Flex>
        </Stack>
      </VStack>
      <VStack
        border={"1px solid #EDEEEF"}
        p={"16px"}
        rounded={"12px"}
        gap={2}
        pb={4}
        align="start"
        maxW={"250px"}
        h={"max-content"}
      >
        <Heading fontSize={18}>Billings</Heading>
        <Stack w="full" gap={4} pt={2}>
          <Flex justify={"space-between"}>
            <Button
              fontWeight={400}
              fontSize={12}
              bg="#27AE60"
              color="#FFF"
              h={"22px"}
              p={"2px 8px"}
              rounded={"16px"}
              w={"max-content"}
            >
              Paid
            </Button>
            <Text fontSize={14} fontWeight={600}>
              $ 340.00
            </Text>
          </Flex>
          <Flex justify={"space-between"}>
            <Button
              fontWeight={400}
              fontSize={12}
              bg="#F6F7F7"
              border="1px solid #EDEEEF"
              h={"22px"}
              p={"2px 8px"}
              rounded={"16px"}
              w={"max-content"}
            >
              Pending
            </Button>
            <Text fontSize={14} fontWeight={600}>
              $ 340.00
            </Text>
          </Flex>
          <Flex justify={"space-between"}>
            <Button
              fontWeight={400}
              fontSize={12}
              bg="#F6F7F7"
              border="1px solid #EDEEEF"
              h={"22px"}
              p={"2px 8px"}
              rounded={"16px"}
              w={"max-content"}
            >
              Pending
            </Button>
            <Text fontSize={14} fontWeight={600}>
              $ 340.00
            </Text>
          </Flex>
        </Stack>
        <Text color="#878C95" fontSize={14}>
          Next pending payment due on the 28th of May 2023
        </Text>
        <Button
          fontWeight={400}
          fontSize={14}
          bg="#F6F7F7"
          border="1px solid #EDEEEF"
          color='#4C5361'
          p={"6px 14px"}
          rounded={"16px"}
          w='full'
        >
          Request Payment
        </Button>
      </VStack>
    </Flex>
  );
};
