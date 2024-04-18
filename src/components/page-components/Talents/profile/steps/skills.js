import { listSkills } from "@/components/page-components/profile-components/lib";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { RiSearchLine } from "react-icons/ri";
import { IoIosAdd } from "react-icons/io";
import { FormikProvider, useFormik } from "formik";
import { skillSchema } from "@/lib/schema";

export const ProfileSkillsStep = ({ setStep }) => {
  const formik = useFormik({
    initialValues: { skills: [] },
    validationSchema: skillSchema,
    validateOnMount: true,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const toast = useToast()
  const addSkill = (skill) => {
    if (formik.values.skills.length < 15) {
      formik.setFieldValue('skills', [...formik.values.skills, skill]);
    } else {
      toast({
        status: 'error',
        description: 'You cannot add more than 15 skills',
        duration: 3000,
        position: 'top-right'
      })
    }
  };
  
  const removeSkill = (skillToRemove) => {
    formik.setFieldValue('skills', formik.values.skills.filter(skill => skill !== skillToRemove));
  };

  const filteredSkills = useMemo(() => (
    listSkills.filter((skill) =>
      skill.toLowerCase().includes(searchTerm.toLowerCase()) && !formik.values.skills.includes(skill)
    )
  ), [listSkills, searchTerm, formik.values.skills]);

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
            6/10
          </Text>
        </Box>
      </Box>
      <Heading fontWeight={700} fontSize={24} lineHeight={"32px"}>
        Nearly there! What work are you here to do?
      </Heading>
      <Text fontSize={12} color={"#4C5361"}>
        Your skills show clients what you can offer, and help us choose which
        jobs to recommend to you. Add or remove the ones we’ve suggested, or
        start typing to pick more. It’s up to you.
      </Text>
      <VStack align={"start"} w={"full"} maxW={"410px"}>
        <Text fontWeight={600}>Your skills</Text>
        <Stack
          flexWrap={"wrap"}
          h={formik.values.skills.length > 0 ? "auto" : "48px"}
          border={"1px solid #EDEEEF"}
          rounded={"8px"}
          p={"8px"}
          w={"full"}
          align={formik.values.skills.length > 0 ? "start" : "center"}
          flexDirection={"row"}
        >
          {formik.values.skills.length > 0 ? (
            formik.values.skills.map((skill, index) => {
              return (
                <Button
                  key={index}
                  bg={"#053AF9"}
                  border={"1px solid #EDEEEF"}
                  padding={"5px 11px"}
                  rounded={"full"}
                  w={"max-content"}
                  gap={'4px'}
                  color={"white"}
                  h={"28px"}
                  fontWeight={500}
                >
                  <Text whiteSpace={"nowrap"} fontSize={14} fontWeight={500}>
                    {skill}
                  </Text>
                  <HiMiniXMark size={20} onClick={() => removeSkill(skill)} />
                </Button>
              );
            })
          ) : (
            <Text fontSize={14} color={"#878C95"}>
              Search and select a skill
            </Text>
          )}
        </Stack>
      </VStack>
      <VStack align={"start"} w={"full"}>
        <Text>Search skills</Text>
        <InputGroup alignItems={"center"}>
          <InputLeftElement p={2} left={"3px"} top={"5px"}>
            <RiSearchLine color="#707581" size={25} />
          </InputLeftElement>
          <Input
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            py={6}
            w={"full"}
          />
        </InputGroup>
        <Text>For the best results, add 10-15 skills max</Text>
      </VStack>
      <FormikProvider value={formik}>
        <VStack w={"full"} align={"start"}>
          <Text fontWeight={600}>Suggested skills</Text>
          <Flex gap={2} pt={2} maxW={"485px"} flexWrap={"wrap"}>
            {filteredSkills.map((skill, index) => {
              return (
                <Button
                  key={index}
                  bg={"#F6F7F7"}
                  border={"1px solid #EDEEEF"}
                  padding={"5px 11px"}
                  rounded={"14px"}
                  w={"max-content"}
                  h={"28px"}
                  onClick={() => addSkill(skill)}
                  gap={"4px"}
                >
                  <Text
                    whiteSpace={"nowrap"}
                    fontSize={14}
                    fontWeight={500}
                    color={"#4C5361"}
                  >
                    {skill}
                  </Text>
                  <IoIosAdd size={20} color="#4C5361" />
                </Button>
              );
            })}
          </Flex>
        </VStack>
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
          Next, write an overview
        </Button>
      </HStack>
    </VStack>
  );
};
