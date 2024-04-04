import { Field } from "formik";
import {
  Box,
  Button,
  Checkbox,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { HiOutlineChevronDown, HiOutlineMinus } from "react-icons/hi2";

export const ExperienceForm = ({ experience, remove, index }) => {
  return (
    <VStack
      bg={"#FFF"}
      rounded={"12px"}
      border={"1px solid #edeeef"}
      align={"start"}
      gap={2}
      w={"full"}
      key={index}
    >
      <HStack
        borderBottom={"1px solid #edeeef"}
        justify={"space-between"}
        w={"full"}
        p={2}
      >
        <Text>Add work experience</Text>
        <Box
          bg={"#F6F7F7"}
          border={"1px solid #edeeef"}
          cursor={"pointer"}
          p={2}
          rounded={"full"}
        >
          <HiOutlineMinus
            cursor={"pointer"}
            onClick={() => remove(index)}
            color="#4C5361"
            size={20}
          />
        </Box>
      </HStack>
      <VStack align={"start"} w={"full"} px={4} gap={8} mt={2}>
        <VStack align={"start"} w={"full"} maxW={"370px"} gap={6}>
          <VStack align={"start"} w={"full"}>
            <Text color="#4C5361" textShadow={"sm"}>
              Title*
            </Text>
            <Field
              name={`experiences.${index}.title`}
              as={Input}
              placeholder="Ex Software Developer"
              py={6}
              w={"full"}
            />
          </VStack>
          <VStack align={"start"} w={"full"}>
            <Text color="#4C5361" textShadow={"sm"}>
              Company*
            </Text>
            <Field
              name={`experiences.${index}.company`}
              as={Input}
              placeholder="Enter company name"
              py={6}
              w={"full"}
            />
          </VStack>
        </VStack>
        <Stack
          direction={{ base: "column", md: "row" }}
          w={"full"}
          maxW={"605px"}
        >
          <VStack align={"start"} w={"full"}>
            <Text color="#4C5361" textShadow={"sm"}>
              Start Date*
            </Text>
            <HStack w={"full"}>
              <Button
                bg={"#fff"}
                justifyContent={"space-between"}
                w={"full"}
                border={"1px solid #edeeef"}
                borderRadius={"8px"}
                py={6}
                fontWeight={400}
              >
                <Text color="#4C5361" whiteSpace={"nowrap"} fontSize={14}>
                  Month
                </Text>
                <HiOutlineChevronDown color="#4C5361" size={25} />
              </Button>
              <Button
                bg={"#fff"}
                justifyContent={"space-between"}
                w={"full"}
                border={"1px solid #edeeef"}
                py={6}
                borderRadius={"8px"}
                fontWeight={400}
              >
                <Text color="#4C5361" whiteSpace={"nowrap"} fontSize={14}>
                  Year
                </Text>
                <HiOutlineChevronDown color="#4C5361" size={25} />
              </Button>
            </HStack>
          </VStack>
          <VStack align={"start"} w={"full"}>
            <Text color="#4C5361" textShadow={"sm"}>
              End Date*
            </Text>
            <HStack w={"full"}>
              <Button
                bg={"#fff"}
                justifyContent={"space-between"}
                w={"full"}
                border={"1px solid #edeeef"}
                borderRadius={"8px"}
                py={6}
                fontWeight={400}
              >
                <Text color="#4C5361" whiteSpace={"nowrap"} fontSize={14}>
                  Month
                </Text>
                <HiOutlineChevronDown color="#4C5361" size={25} />
              </Button>
              <Button
                bg={"#fff"}
                justifyContent={"space-between"}
                w={"full"}
                border={"1px solid #edeeef"}
                py={6}
                borderRadius={"8px"}
                fontWeight={400}
              >
                <Text color="#4C5361" whiteSpace={"nowrap"} fontSize={14}>
                  Year
                </Text>
                <HiOutlineChevronDown color="#4C5361" size={25} />
              </Button>
            </HStack>
          </VStack>
        </Stack>
        <HStack>
          <Checkbox />
          <Text>I am currently working in this role</Text>
        </HStack>
        <VStack align={"start"} w={"full"} maxW={"545px"}>
          <Text color="#4C5361" textShadow={"sm"}>
            Location*
          </Text>
          <HStack w={"full"}>
            <Field
              as={Input}
              bg={"#fff"}
              justifyContent={"space-between"}
              w={"full"}
              border={"1px solid #edeeef"}
              borderRadius={"8px"}
              py={6}
              placeholder=""
              value={"Lekki, Lagos"}
            />
            <Button
              bg={"#fff"}
              justifyContent={"space-between"}
              w={"full"}
              border={"1px solid #edeeef"}
              py={6}
              borderRadius={"8px"}
              fontWeight={400}
            >
              <Text color="#4C5361" whiteSpace={"nowrap"} fontSize={14}>
                Nigeria
              </Text>
              <HiOutlineChevronDown color="#4C5361" size={25} />
            </Button>
          </HStack>
        </VStack>
        <VStack w={"full"} maxW={"605px"} align={"start"}>
          <Text color={"#4C5361"}>Description</Text>
          <Textarea
            placeholder="Description"
            bg={"#fff"}
            justifyContent={"space-between"}
            w={"full"}
            border={"1px solid #edeeef"}
            borderRadius={"8px"}
            py={6}
            px={4}
            minH={"115px"}
            fontWeight={400}
            resize={"none"}
          />
        </VStack>
      </VStack>
      <HStack w={"full"} justify={"end"} pb={4} mt={4} pr={4}>
        <Button
          bg={"#F6F7F7"}
          color={"#4C5361"}
          rounded={"12px"}
          fontWeight={400}
          px={20}
          py={2}
          fontSize={14}
          h={"max-content"}
          border={"1px solid #EDEEEF"}
        >
          Clear
        </Button>
        <Button
          bg={"#053AF9"}
          color={"white"}
          rounded={"12px"}
          fontWeight={400}
          px={12}
          py={2}
          fontSize={14}
          h={"max-content"}
        >
          Save
        </Button>
      </HStack>
    </VStack>
  );
};
