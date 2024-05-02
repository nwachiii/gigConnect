import { Button, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";

export const ProfileSidebar = () => {
  return (
    <VStack
      borderRadius={"16px"}
      p={4}
      gap={4}
      //   maxW="256px"
      w="full"
      bg="#FFFFFF"
    >
      <VStack borderRadius="12px" border="1px solid #EDEEEF" w="full" p={4}>
        <Image src="/img/icons/userIcon.svg" />
        <Text>Ola Ahmed</Text>
        <Text>CRM Developer | Fintech</Text>
        <Button
          p={"6px 14px"}
          rounded={"12px"}
          border="1px solid #EDEEEF"
          bg={"#F6F7F7"}
          fontWeight={400}
        >
          Complete Profile
        </Button>
      </VStack>
      {profileSteps.map((step, index) => {
        return (
          <HStack
            borderRadius="12px"
            border="1px solid #EDEEEF"
            w="full"
            p={4}
            key={index}
            align={"start"}
          >
            <Image
              src={
                step.isComplete
                  ? "img/icons/radio-tick.svg"
                  : "/img/icons/radio.svg"
              }
            />
            <Stack gap={2}>
              <Text fontWeight={500}>{step.title}</Text>
              <Text fontSize={14}>{step.description}</Text>
            </Stack>
          </HStack>
        );
      })}
    </VStack>
  );
};

const profileSteps = [
  {
    title: "Employment history",
    isComplete: true,
    description: "Past job experience and positions (+20%)",
  },
  {
    title: "Portfolio",
    isComplete: false,
    description: "Work samples, case studies, e.t.c (+20%)",
  },
  {
    title: "Education",
    isComplete: true,
    description: "Include some college, degree or diplomas (+10%)",
  },
  {
    title: "Certifications",
    isComplete: false,
    description: "Recognized skills and knowledge (+10%)",
  },
  {
    title: "Other experience",
    isComplete: false,
    description: "Bootcamps, conferences, awards e.t.c (+5%)",
  },
];
