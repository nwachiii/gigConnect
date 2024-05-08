import { HStack, Image, Stack, Text } from "@chakra-ui/react";

export const ActiveProposals = () => {
  return (
    <Stack>
      <HStack
        borderRadius="12px"
        border="1px solid #EDEEEF"
        w="full"
        p={4}
        justify={"space-between"}
        gap={4}
      >
        <Stack gap={2}>
          <Text fontWeight={500}>Offers (0)</Text>
          <Text fontSize={14}>These are offers sent from clients</Text>
        </Stack>
        <Image src="/img/icons/rightArrow.svg" />
      </HStack>
      <HStack
        borderRadius="12px"
        border="1px solid #EDEEEF"
        w="full"
        p={4}
        justify={"space-between"}
        gap={4}
      >
        <Stack gap={2}>
          <Text fontWeight={500}>Invitation to interview (0)</Text>
          <Text fontSize={14}>
            Clients may contact you first about a job posting. If you don't want
            these inquiries, you can set your profile to private.
          </Text>
        </Stack>
        <Image src="/img/icons/rightArrow.svg" />
      </HStack>
      <HStack
        borderRadius="12px"
        border="1px solid #EDEEEF"
        w="full"
        p={4}
        justify={"space-between"}
        gap={4}
      >
        <Stack gap={2}>
          <Text fontWeight={500}>Active proposals (0)</Text>
          <Text fontSize={14}>
            These are proposals that you are discussing with a client.
          </Text>
        </Stack>
        <Image src="/img/icons/rightArrow.svg" />
      </HStack>
      <HStack
        borderRadius="12px"
        border="1px solid #EDEEEF"
        w="full"
        p={4}
        justify={"space-between"}
        gap={4}
      >
        <Stack gap={2}>
          <Text fontWeight={500}>Submitted proposals (0)</Text>
          <Text fontSize={14}>
            These are proposals you sent which have not yet received a reply.
          </Text>
        </Stack>
        <Image src="/img/icons/rightArrow.svg" />
      </HStack>
    </Stack>
  );
};
