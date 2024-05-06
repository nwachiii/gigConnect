import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { freelanceGoals, freelanceOptions } from "./options";
import { RadioButton } from "./radio";
import { useFormikContext } from "formik";

export const FreelanceScreen = ({ setScreenNumber }) => {
  const formik = useFormikContext()
  return (
    <VStack
      w={"full"}
      maxW={"490px"}
      bg={"#FFF"}
      borderRadius={"16px"}
      border={"1px solid #ebebeb"}
    >
      <HStack p={4} borderBottom={"1px solid #ebebeb"} w={"full"}>
        <HStack
          gap={3}
          cursor={"pointer"}
          onClick={() => setScreenNumber((prev) => prev - 1)}
        >
          <Stack bg={"#F6F7F7"} justify={"center"} p={3} rounded={"full"}>
            <BsChevronLeft />
          </Stack>
          <Text fontWeight={500} fontSize={18}>
            Back
          </Text>
        </HStack>
      </HStack>
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
              1/2
            </Text>
          </Box>
        </Box>
        <Heading
          fontWeight={700}
          maxW={"360px"}
          fontSize={24}
          lineHeight={"32px"}
        >
          A few quick questions: first, have you freelanced before?
        </Heading>
        <Text maxW={"400px"} fontSize={12} color={"#4C5361"}>
          This lets us know how much help to give you along the way. We
          won&apos;t share your answer with anyone else, including potential
          clients.
        </Text>
        <VStack
          align={"start"}
          border={"1px solid #edeeef"}
          rounded={"12px"}
          p={2}
          w={"full"}
        >
          {freelanceOptions.map((option, index) => (
            <RadioButton
              key={index}
              label={option.label}
              isChecked={formik.values.freelancedBefore === option.value}
              onChange={() => formik.setFieldValue('freelancedBefore', option.value)}
            />
          ))}
        </VStack>
        <HStack gap={4} mb={4}>
          <Button
            bg={"#F6F7F7"}
            rounded={"12px"}
            fontWeight={400}
            px={4}
            py={"6px"}
            h={"max-content"}
            fontSize={14}
            onClick={() => setScreenNumber(2)}
          >
            Skip for now
          </Button>
          <Button
            bg={"#053AF9"}
            color={"white"}
            rounded={"12px"}
            fontWeight={400}
            px={4}
            fontSize={14}
            py={"6px"}
            h={"max-content"}
            isDisabled={formik.errors.freelancedBefore}
            onClick={() => setScreenNumber(2)}
          >
            Next
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

export const FreelanceGoal = ({ setScreenNumber }) => {
  const formik = useFormikContext()

  return (
    <VStack
      w={"full"}
      maxW={"490px"}
      bg={"#FFF"}
      borderRadius={"16px"}
      border={"1px solid #ebebeb"}
    >
      <HStack p={4} borderBottom={"1px solid #ebebeb"} w={"full"}>
        <HStack
          gap={3}
          cursor={"pointer"}
          onClick={() => setScreenNumber((prev) => prev - 1)}
        >
          <Stack bg={"#F6F7F7"} justify={"center"} p={3} rounded={"full"}>
            <BsChevronLeft />
          </Stack>
          <Text fontWeight={500} fontSize={18}>
            Back
          </Text>
        </HStack>
      </HStack>
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
              2/2
            </Text>
          </Box>
        </Box>
        <Heading
          fontWeight={700}
          maxW={"360px"}
          fontSize={24}
          lineHeight={"32px"}
        >
          Got it. What’s your biggest goal for freelancing?
        </Heading>
        <Text maxW={"400px"} fontSize={12} color={"#4C5361"}>
          Different people come to Upwork for various reasons. We want to
          highlight the opportunities that fit your goals best while still
          showing you all the possibilities.
        </Text>
        <VStack
          align={"start"}
          border={"1px solid #edeeef"}
          rounded={"12px"}
          p={2}
          w={"full"}
        >
          {freelanceGoals.map((option, index) => (
            <RadioButton
              key={index}
              label={option.label}
              isChecked={formik.values.freelancingGoal === option.value}
              onChange={() => formik.setFieldValue('freelancingGoal', option.value)}
            />
          ))}
        </VStack>
        <HStack gap={4} mb={4}>
          <Button
            bg={"#F6F7F7"}
            rounded={"12px"}
            fontWeight={400}
            px={4}
            py={"6px"}
            fontSize={14}
            onClick={() => setScreenNumber(3)}
            h={"max-content"}
          >
            Skip for now
          </Button>
          <Button
            bg={"#053AF9"}
            color={"white"}
            rounded={"12px"}
            fontWeight={400}
            px={4}
            py={"6px"}
            fontSize={14}
            h={"max-content"}
            isDisabled={formik.errors.freelancingGoal}
            onClick={() => setScreenNumber(3)}
          >
            Create Profile
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};
