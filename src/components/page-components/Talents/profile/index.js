import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Text,
  VStack} from "@chakra-ui/react";
import { GoPlus } from "react-icons/go";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useState } from "react";
import { FieldArray, Form, Formik, FormikProvider, useFormik } from "formik";
import { ExperienceForm } from "../../profile-components/experience";
import { EducationForm } from "../../profile-components/education";
import { LanguageForm } from "../../profile-components/language";
import { educationSchema, educationValues, experienceSchema, experienceValues, languageSchema, languageValues } from "@/lib/schema";

export const ProfileStep = ({ setStep }) => {
  return (
    <VStack gap={4} align={"start"} w={"full"} px={6} mb={4}>
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
      <Heading fontWeight={700} fontSize={24} lineHeight={"32px"}>
        How would you like to tell us about yourself?
      </Heading>
      <Text fontSize={12} color={"#4C5361"}>
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
        maxW={"360px"}
      >
        <Button
          justify={"center"}
          background={"#053AF9"}
          border={"1px solid #edeeef"}
          w={"full"}
          px={4}
          py={2}
          rounded={"12px"}
          fontWeight={400}
          isDisabled={true}
        >
          <Text textAlign={"center"} fontSize={14} color={"#FFF"}>
            Import from LinkedIn
          </Text>
        </Button>
        <Button
          justify={"center"}
          bg={"#F6F7F7"}
          border={"1px solid #edeeef"}
          w={"full"}
          px={4}
          py={2}
          rounded={"12px"}
          fontWeight={400}
          gap={2}
          isDisabled
        >
          <IoCloudUploadOutline />
          <Text fontSize={14} color={"#454C58"}>
            Upload your resume
          </Text>
        </Button>
        <Button
          justify={"center"}
          bg={"#F6F7F7"}
          border={"1px solid #edeeef"}
          w={"full"}
          px={4}
          py={2}
          rounded={"12px"}
          onClick={() => setStep(1)}
          fontWeight={400}
        >
          <Text fontSize={14} color={"#454C58"}>
            Fill out manually (10 min)
          </Text>
        </Button>
      </VStack>
    </VStack>
  );
};

export const ProfileInfoStep = ({ setStep }) => {
  const [profession, setProfession] = useState("");

  const handleChange = (event) => {
    const text = event.target.value;
    const newText = text.replace(/[^a-zA-Z\s]/g, "");
    setProfession(newText);
  };
  return (
    <VStack gap={4} align={"start"} w={"full"} px={6} mb={4}>
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
      <Heading fontWeight={700} fontSize={24} lineHeight={"32px"}>
        Got it. Now, add a title to tell the world what you do.
      </Heading>
      <Text fontSize={12} color={"#4C5361"}>
        It&apos;s the very first thing clients see, so make it count. Stand out
        by describing your expertise in your own words.
      </Text>
      <VStack align={"start"} w={"full"}>
        <Text fontSize={14} color={"#454C58"}>
          Your professional role
        </Text>
        <Input
          placeholder="Software Developer | Javascript | iOS"
          border={"1px solid #edeeef"}
          w={"full"}
          maxW={"365px"}
          p={"10px 16px"}
          rounded={"8px"}
          h={"44px"}
          type="text"
          value={profession}
          onChange={handleChange}
        />
      </VStack>
      <HStack gap={4} mb={4}>
        <Button
          bg={"#053AF9"}
          color={"white"}
          rounded={"12px"}
          fontWeight={400}
          p={"6px 16px"}
          fontSize={14}
          h={"34px"}
          onClick={(prev) => setStep(prev + 1)}
          isDisabled={profession === ""}
        >
          Next, add your experience
        </Button>
      </HStack>
    </VStack>
  );
};

export const ProfileExpStep = ({ setStep }) => {
  const formik = useFormik({
    initialValues: { experiences: [experienceValues] },
    validationSchema: experienceSchema,
    validateOnMount: true,
  })

  return (
    <VStack gap={4} align={"start"} w={"full"} px={6} mb={4}>
      <Box bg={"#efefef"} borderRadius={"24px"} px={"6px"} py={"5px"}>
        <Box
          bg={"#fff"}
          px={3}
          py={1}
          border={"1px solid #dfdfdf"}
          borderRadius={"14px"}
        >
          <Text fontSize={14} fontWeight={500}>
            3/10
          </Text>
        </Box>
      </Box>
      <Heading fontWeight={700} fontSize={24} lineHeight={"32px"}>
        If you have relevant work experience, add it here.
      </Heading>
      <Text fontSize={12} color={"#4C5361"}>
        Freelancers who add their experience are twice as likely to win work.
        But if you’re just starting out, you can still create a great profile.
        Just head on to the next page.
      </Text>
      <FormikProvider value={formik}>
        <Form style={{ width: '100%' }}>
          <FieldArray
            name="experiences"
            render={(arrayHelpers) => (
              <div>
                <Button
                  bg={"#fff"}
                  justifyContent={"space-between"}
                  w={"full"}
                  maxW={"410px"}
                  border={"1px solid #edeeef"}
                  py={8}
                >
                  <Text color="#4C5361" whiteSpace={"nowrap"} fontSize={14}>
                    Add experience
                  </Text>
                  <Box
                    bg={"#F6F7F7"}
                    border={"1px solid #edeeef"}
                    cursor={"pointer"}
                    p={3}
                    rounded={"full"}
                  >
                    <GoPlus
                      color="#4C5361"
                      size={30}
                      cursor={"pointer"}
                      onClick={
                        formik.values.experiences.length > 4
                          ? null
                          : () => arrayHelpers.push("")
                      }
                    />
                  </Box>
                </Button>
                <VStack align={"start"} gap={8} w={"full"} mt={10}>
                  {formik.values.experiences.length > 0
                    ? formik.values.experiences.map((experience, index) => (
                        <ExperienceForm
                          key={index}
                          // experience={experience}
                          index={index}
                          remove={arrayHelpers.remove}
                          formik={formik}
                        />
                      ))
                    : null}
                </VStack>
              </div>
            )}
          />
        </Form>
      </FormikProvider>
      <HStack gap={2} mb={4}>
        <Button
          bg={"#F6F7F7"}
          color={"#4C5361"}
          rounded={"12px"}
          fontWeight={400}
          px={4}
          py={"6px"}
          fontSize={14}
          h={"max-content"}
          onClick={() => setStep((prev) => prev + 1)}
          border={"1px solid #EDEEEF"}
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
          onClick={() => setStep((prev) => prev + 1)}
          isDisabled={!formik.isValid}
        >
          Next, add your experience
        </Button>
      </HStack>
    </VStack>
  );
};

export const ProfileEduStep = ({ setStep }) => {
  const formik = useFormik({
    initialValues: { education: [educationValues] },
    validationSchema: educationSchema,
    validateOnMount: true,
  })
  return (
    <VStack gap={4} align={"start"} w={"full"} px={6} mb={4}>
      <Box bg={"#efefef"} borderRadius={"24px"} px={"6px"} py={"5px"}>
        <Box
          bg={"#fff"}
          px={3}
          py={1}
          border={"1px solid #dfdfdf"}
          borderRadius={"14px"}
        >
          <Text fontSize={14} fontWeight={500}>
            4/10
          </Text>
        </Box>
      </Box>
      <Heading
        fontWeight={700}
        maxW={"415px"}
        fontSize={24}
        lineHeight={"32px"}
      >
        Clients like to know what you know - add your education here.
      </Heading>
      <Text fontSize={12} color={"#4C5361"}>
        You don’t have to have a degree. Adding any relevant education helps
        make your profile more visible.
      </Text>
      <FormikProvider value={formik}>
        <Form style={{ width: '100%' }}>
          <FieldArray
            name="education"
            render={(arrayHelpers) => (
              <div>
                <Button
                  bg={"#fff"}
                  justifyContent={"space-between"}
                  w={"full"}
                  maxW={"410px"}
                  border={"1px solid #edeeef"}
                  py={8}
                >
                  <Text color="#4C5361" whiteSpace={"nowrap"} fontSize={14}>
                    Add education
                  </Text>
                  <Box
                    bg={"#F6F7F7"}
                    border={"1px solid #edeeef"}
                    cursor={"pointer"}
                    p={3}
                    rounded={"full"}
                  >
                    <GoPlus
                      color="#4C5361"
                      size={30}
                      cursor={"pointer"}
                      onClick={
                        formik.values.education.length > 4
                          ? null
                          : () => arrayHelpers.push("")
                      }
                    />
                  </Box>
                </Button>
                <VStack align={"start"} gap={8} w={"full"} mt={10}>
                  {formik.values.education.length > 0
                    ? formik.values.education.map((experience, index) => (
                        <EducationForm
                          key={index}
                          // experience={experience}
                          index={index}
                          remove={arrayHelpers.remove}
                          formik={formik}
                        />
                      ))
                    : null}
                </VStack>
              </div>
            )}
          />
        </Form>
      </FormikProvider>
      <HStack gap={2} mb={4}>
        <Button
          bg={"#F6F7F7"}
          color={"#4C5361"}
          rounded={"12px"}
          fontWeight={400}
          px={4}
          py={"6px"}
          fontSize={14}
          h={"max-content"}
          border={"1px solid #EDEEEF"}
          onClick={() => setStep((prev) => prev + 1)}
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
          onClick={() => setStep((prev) => prev + 1)}
          isDisabled={!formik.isValid}
        >
          Next, add your education
        </Button>
      </HStack>
    </VStack>
  );
};

export const ProfileLangStep = ({ setStep }) => {
  const formik = useFormik({
    initialValues: { languages: [languageSchema] },
    validationSchema: languageSchema,
    validateOnMount: true,
  })
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
      <Heading fontWeight={700} fontSize={24} lineHeight={"32px"}>
        Looking good. Next, tell us which languages you speak.
      </Heading>
      <Text fontSize={12} color={"#4C5361"}>
        GigConnect is global, so clients are often interested to know what
        languages you speak. English is a must, but do you speak any other
        languages?
      </Text>
      <FormikProvider value={formik}>
        <Form style={{ width: '100%' }}>
          <FieldArray
            name="languages"
            render={(arrayHelpers) => (
              <div>
                <Button
                  bg={"#fff"}
                  justifyContent={"space-between"}
                  w={"full"}
                  maxW={"410px"}
                  border={"1px solid #edeeef"}
                  py={8}
                >
                  <Text color="#4C5361" whiteSpace={"nowrap"} fontSize={14}>
                    Add language
                  </Text>
                  <Box
                    bg={"#F6F7F7"}
                    border={"1px solid #edeeef"}
                    cursor={"pointer"}
                    p={3}
                    rounded={"full"}
                  >
                    <GoPlus
                      color="#4C5361"
                      size={30}
                      cursor={"pointer"}
                      onClick={
                        formik.values.languages.length > 4
                          ? null
                          : () => arrayHelpers.push("")
                      }
                    />
                  </Box>
                </Button>
                <VStack align={"start"} gap={8} w={"full"} mt={10}>
                  {formik.values.languages.length > 0
                    ? formik.values.languages.map((experience, index) => (
                        <LanguageForm
                          key={index}
                          // experience={experience}
                          index={index}
                          remove={arrayHelpers.remove}
                          formik={formik}
                        />
                      ))
                    : null}
                </VStack>
              </div>
            )}
          />
        </Form>
      </FormikProvider>
    </VStack>
  );
};
