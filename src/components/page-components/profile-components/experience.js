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
import { HiOutlineMinus } from "react-icons/hi2";
import { FormErrorMessage } from "@/components/generic-components/FormErrorMessage";
import { experienceValues } from "@/lib/schema";
import {
  MonthPicker,
  YearPicker,
} from "@/components/generic-components/DatePicker";
import { FieldSelect } from "@/ui-lib/ui-lib-components/FieldSelect";
import { countries } from "./lib";

export const ExperienceForm = ({ remove, index, formik }) => {
  const isValid = !(
    formik.errors.experiences && formik.errors.experiences[index]
  );
  const isDateFilled = !(formik.values.experiences[index].startDate.month && formik.values.experiences[index].startDate.year)
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
        <Text fontWeight={500}>Add work experience</Text>
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
            <FormErrorMessage name={`experiences.${index}.title`} />
          </VStack>
          <VStack align={"start"} w={"full"}>
            <Text color="#4C5361" textShadow={"sm"}>
              Company*
            </Text>
            <Field
              name={`experiences.${index}.companyName`}
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
            <HStack align={"start"} w={"full"}>
              <MonthPicker
                formik={formik}
                name={`experiences.${index}.startDate.month`}
              />
              <YearPicker
                formik={formik}
                name={`experiences.${index}.startDate.year`}
              />
            </HStack>
          </VStack>
          <VStack align={"start"} w={"full"}>
            <Text color="#4C5361" textShadow={"sm"}>
              End Date*
            </Text>
            <HStack align={"start"} w={"full"}>
              <MonthPicker
                minDate={formik.values.experiences[index].startDate}
                endYear={formik.values.experiences[index].endDate.year}
                formik={formik}
                isDisabled={isDateFilled}
                name={`experiences.${index}.endDate.month`}
              />
              <YearPicker
                minDate={formik.values.experiences[index].startDate.year}
                formik={formik}
                name={`experiences.${index}.endDate.year`}
                isDisabled={isDateFilled}
              />
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
          <HStack align={'start'} w={"full"}>
            <Field
              as={Input}
              justifyContent={"space-between"}
              w={"full"}
              border={"1px solid #edeeef"}
              borderRadius={"8px"}
              p={'10px 15px'}
              placeholder="Lekki, Lagos"
              _placeholder={{
                color: "#4C5361",
              }}
              h={'44px'}
              name={`experiences.${index}.location.state`}
              fontSize="14px"
            />
            <FieldSelect
              name={`experiences.${index}.location.country`}
              options={countries}
              placeholder={'Nigeria'}
            />
          </HStack>
        </VStack>
        <VStack w={"full"} maxW={"605px"} align={"start"}>
          <Text color={"#4C5361"}>Description</Text>
          <Field
            as={Textarea}
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
            name={`experiences.${index}.description`}
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
          onClick={() =>
            formik.setFieldValue(`experiences.${index}`, experienceValues)
          }
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
          isDisabled={!isValid}
        >
          Save
        </Button>
      </HStack>
    </VStack>
  );
};
