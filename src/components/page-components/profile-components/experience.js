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
  useToast,
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
import { useEffect, useState } from "react";
import { FormSavedBox } from "@/components/generic-components/FormSavedBox";
import dayjs from "dayjs";

export const ExperienceForm = ({ remove, index, formik }) => {
  const [isSaved, setIsSaved] = useState(false);
  const toast = useToast();
  const IS_CHECKED = formik.values.experiences[index]?.endDate === "Present";
  const [isChecked, setIsChecked] = useState(IS_CHECKED);
  const isValid = !(
    formik.errors.experiences && formik.errors.experiences[index]
  );
  const isDateFilled =
    !(
      formik.values.experiences[index]?.startDate?.month &&
      formik.values.experiences[index]?.startDate?.year
    ) || isChecked;
  useEffect(() => {
    if (isChecked) {
      formik.setFieldValue(`experiences.${index}.endDate`, "Present");
    }
  }, [isChecked]);
  const START_DATE = dayjs(
    `${formik.values.experiences[index]?.startDate?.year}-${formik.values.experiences[index]?.startDate?.month}-01`
  );
  const END_DATE = dayjs(
    `${formik.values.experiences[index]?.endDate?.year}-${formik.values.experiences[index]?.endDate?.month}-01`
  );

  const saveExperience = () => {
    setIsSaved(true);
    toast({
      title: "Experience Saved",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
  };

  const handleDelete = () => {
    if (index < 1) {
      toast({
        status: "error",
        position: "top-right",
        duration: 3000,
        description: "You must have at least one experience",
      });
    } else {
      remove(index);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      {isSaved ? (
        <FormSavedBox
          heading={formik.values.experiences[index]?.title}
          description={formik.values.experiences[index]?.companyName}
          tagline={`${START_DATE.format("MMM, YYYY")} - ${
            isChecked ? "Present" : END_DATE.format("MMM, YYYY")
          }`}
          handleDelete={handleDelete}
          handleEdit={() => setIsSaved(false)}
        />
      ) : (
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
                onClick={handleDelete}
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
                    minDate={formik.values.experiences[index]?.startDate}
                    endYear={formik.values.experiences[index]?.endDate?.year}
                    formik={formik}
                    isDisabled={isDateFilled}
                    name={`experiences.${index}.endDate.month`}
                  />
                  <YearPicker
                    minDate={formik.values.experiences[index]?.startDate?.year}
                    formik={formik}
                    name={`experiences.${index}.endDate.year`}
                    isDisabled={isDateFilled}
                  />
                </HStack>
              </VStack>
            </Stack>
            <HStack>
              <Checkbox
                isChecked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <Text>I am currently working in this role</Text>
            </HStack>
            <VStack align={"start"} w={"full"} maxW={"545px"}>
              <Text color="#4C5361" textShadow={"sm"}>
                Location*
              </Text>
              <HStack align={"start"} w={"full"}>
                <Field
                  as={Input}
                  justifyContent={"space-between"}
                  w={"full"}
                  border={"1px solid #edeeef"}
                  borderRadius={"8px"}
                  p={"10px 15px"}
                  placeholder="Lekki, Lagos"
                  _placeholder={{
                    color: "#4C5361",
                  }}
                  h={"44px"}
                  name={`experiences.${index}.location.state`}
                  fontSize="14px"
                />
                <FieldSelect
                  name={`experiences.${index}.location.country`}
                  options={countries}
                  placeholder={"Nigeria"}
                  formik={formik}
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
              onClick={saveExperience}
            >
              Save
            </Button>
          </HStack>
        </VStack>
      )}
    </div>
  );
};
