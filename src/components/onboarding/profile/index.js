import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IoCloudUploadOutline } from "react-icons/io5";
export const ProfileStep = () => {
  return (
    <VStack gap={4} align={"start"} w={"full"} px={6}>
      <Box bg={"#efefef"} borderRadius={"24px"} px={"6px"} py={"5px"}>
        <Box
          bg={"#fff"}
          px={3}
          py={1}
          border={"1px solid #dfdfdf"}
          borderRadius={"14px"}
        >
          <Text fontSize={14} fontWeight={500}>
            1/10
          </Text>
        </Box>
      </Box>
      <Heading
        fontWeight={700}
        maxW={"360px"}
        fontSize={24}
        lineHeight={"32px"}
      >
        How would you like to tell us about yourself?
      </Heading>
      <Text maxW={"400px"} fontSize={12} color={"#4C5361"}>
        We need to get a sense of your education, experience and skills. It’s
        quickest to import your information — you can edit it before your
        profile goes live.
      </Text>
      <VStack
        align={"start"}
        border={"1px solid #edeeef"}
        rounded={"12px"}
        p={2}
        w={"full"}
      >
        <HStack border={"1px solid #edeeef"} w={"full"} p={2} rounded={"12px"}>
          <Text fontSize={14} color={"#053AF9"}>
            Import from LinkedIn
          </Text>
        </HStack>
        <HStack border={"1px solid #edeeef"} w={"full"} p={2} rounded={"12px"}>
          <IoCloudUploadOutline />
          <Text fontSize={14} color={"#454C58"}>
            Upload your resume
          </Text>
        </HStack>
        <HStack border={"1px solid #edeeef"} w={"full"} p={2} rounded={"12px"}>
          <Text fontSize={14} color={"#454C58"}>
            Fill out manually (10 min)
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export const ProfileInfoStep = () => {
  return (
    <VStack gap={4} align={"start"} w={"full"} px={6}>
      <Box bg={"#efefef"} borderRadius={"24px"} px={"6px"} py={"5px"}>
        <Box
          bg={"#fff"}
          px={3}
          py={1}
          border={"1px solid #dfdfdf"}
          borderRadius={"14px"}
        >
          <Text fontSize={14} fontWeight={500}>
            2/10
          </Text>
        </Box>
      </Box>
      <Heading
        fontWeight={700}
        maxW={"360px"}
        fontSize={24}
        lineHeight={"32px"}
      >
        Got it. Now, add a title to tell the world what you do.
      </Heading>
      <Text maxW={"400px"} fontSize={12} color={"#4C5361"}>
        It’s the very first thing clients see, so make it count. Stand out by
        describing your expertise in your own words.
      </Text>
      <VStack align={"start"}>
        <Text fontSize={14} color={"#454C58"}>
          Your professional role
        </Text>
        <Input
          placeholder="Software Developer | Javascript | iOS"
          border={"1px solid #edeeef"}
          w={"full"}
          p={4}
          rounded={"12px"}
        />
      </VStack>
      <HStack gap={4} mb={4}>
        <Button
          bg={"#053AF9"}
          color={"white"}
          rounded={"12px"}
          fontWeight={400}
          px={4}
          py={"6px"}
          fontSize={14}
          h={"max-content"}
        >
          Next, add your experience
        </Button>
      </HStack>
    </VStack>
  );
};

export const ProfileLangStep = () => {
    return (
      <VStack gap={4} align={"start"} w={"full"} px={6}>
        <Box bg={"#efefef"} borderRadius={"24px"} px={"6px"} py={"5px"}>
          <Box
            bg={"#fff"}
            px={3}
            py={1}
            border={"1px solid #dfdfdf"}
            borderRadius={"14px"}
          >
            <Text fontSize={14} fontWeight={500}>
              5/10
            </Text>
          </Box>
        </Box>
        <Heading
          fontWeight={700}
          maxW={"360px"}
          fontSize={24}
          lineHeight={"32px"}
        >
          Looking good. Next, tell us which languages you speak.
        </Heading>
        <Text maxW={"400px"} fontSize={12} color={"#4C5361"}>
        GigConnect is global, so clients are often interested to know what languages you speak. English is a must, but do you speak any other languages?
        </Text>
        <VStack align={"start"}>
          <Text fontSize={14} color={"#454C58"}>
            Your professional role
          </Text>
          <Input
            placeholder="Software Developer | Javascript | iOS"
            border={"1px solid #edeeef"}
            w={"full"}
            p={4}
            rounded={"12px"}
          />
        </VStack>
        <HStack gap={4} mb={4}>
          <Button
            bg={"#053AF9"}
            color={"white"}
            rounded={"12px"}
            fontWeight={400}
            px={4}
            py={"6px"}
            fontSize={14}
            h={"max-content"}
          >
            Next, add your experience
          </Button>
        </HStack>
      </VStack>
    );
  };
  