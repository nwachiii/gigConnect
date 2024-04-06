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
import { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { RiSearchLine } from "react-icons/ri";
import { IoIosAdd } from "react-icons/io";

export const ProfileSkillsStep = ({ setStep }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [skills, setSkills] = useState([]);
  const [suggestedSkills, setSuggestedSkills] = useState(listSkills);
  const toast = useToast()
  const addSkill = (skill) => {
    if (skills.length < 15) {
      setSkills([...skills, skill]);
      setSuggestedSkills(listSkills.filter((item) => item !== skill));
    } else {
      toast({
        status: 'error',
        description: 'You cannot add more skills',
        duration: 3000,
        position: 'top-right'
      })
    }
  };
  const removeSkill = (skill) => {
    setSkills(skills.filter((item) => item !== skill));
    setSuggestedSkills([...listSkills, skill]);
  };

  const filteredSkills = suggestedSkills.filter((skill) =>
    skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          h={skills.length > 0 ? "auto" : "48px"}
          border={"1px solid #EDEEEF"}
          rounded={"8px"}
          p={"8px"}
          w={"full"}
          align={skills.length > 0 ? "start" : "center"}
          flexDirection={"row"}
        >
          {skills.length > 0 ? (
            skills.map((skill, index) => {
              return (
                <Button
                  key={index}
                  bg={"#053AF9"}
                  border={"1px solid #EDEEEF"}
                  padding={"5px 11px"}
                  rounded={"full"}
                  w={"max-content"}
                  justify={"space-between"}
                  color={"white"}
                  h={"28px"}
                  fontWeight={500}
                >
                  <Text whiteSpace={"nowrap"} fontSize={14} fontWeight={500}>
                    {skill}
                  </Text>
                  <HiMiniXMark size={25} onClick={() => removeSkill(skill)} />
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
                rounded={"full"}
                w={"max-content"}
                h={"28px"}
                onClick={() => addSkill(skill)}
                gap={"10px"}
              >
                <Text
                  whiteSpace={"nowrap"}
                  fontSize={14}
                  fontWeight={500}
                  color={"#4C5361"}
                >
                  {skill}
                </Text>
                <IoIosAdd size={25} color="#4C5361" />
              </Button>
            );
          })}
        </Flex>
      </VStack>
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
          isDisabled={skills.length < 1}
        >
          Next, write an overview
        </Button>
      </HStack>
    </VStack>
  );
};
