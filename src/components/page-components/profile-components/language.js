import {
  Box,
  Button,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Field } from "formik";
import { HiOutlineChevronDown, HiOutlineMinus } from "react-icons/hi2";
import { listLanguages, proficiencyLevels } from "./lib";
import { useState } from "react";

export const LanguageForm = ({ setFieldValue, language, remove, index }) => {
  const [isSaved, setIsSaved] = useState(true);
  return (
    <>
      {isSaved ? (
        <HStack
          bg={"#FFF"}
          rounded={"12px"}
          border={"1px solid #edeeef"}
          align={"start"}
          gap={2}
          w={"full"}
        >
          <VStack align={"start"} w={"full"} px={4} gap={8} mt={2}>
            <Text>{language.lang}</Text>
            <Text>{language.proficiency.label}</Text>
            <Text>{language.proficiency.description}</Text>
          </VStack>
          <VStack w={"full"} justify={"end"} pb={4} mt={4} pr={4}>
            <Box padding={"12px"} border={"1px solid #FEE4E2"}>
              <Image src="/img/icons/editt-icon.svg" alt="" />
            </Box>
            <Box padding={"12px"} border={"1px solid #FEE4E2"}>
              <Image src="/img/icons/trash-icon.svg" alt="" />
            </Box>
          </VStack>
        </HStack>
      ) : (
        <VStack
          bg={"#FFF"}
          rounded={"12px"}
          border={"1px solid #edeeef"}
          align={"start"}
          gap={2}
          w={"full"}
        >
          <HStack
            borderBottom={"1px solid #edeeef"}
            justify={"space-between"}
            w={"full"}
            p={2}
          >
            <Text fontWeight={500}>Add language</Text>
            <Box
              bg={"#F6F7F7"}
              border={"1px solid #edeeef"}
              cursor={"pointer"}
              p={2}
              rounded={"full"}
              onClick={() => remove(index)}
            >
              <HiOutlineMinus color="#4C5361" size={20} />
            </Box>
          </HStack>
          <VStack align={"start"} w={"full"} px={4} gap={8} mt={2}>
            <HStack
              fontSize={14}
              align={"start"}
              w={"full"}
              maxW={"545px"}
              gap={8}
            >
              <VStack align={"start"} w={"full"}>
                <Text color="#4C5361" textShadow={"sm"}>
                  Language {index < 1 ? "(English is required)" : ""}
                </Text>
                <Select
                  icon={<HiOutlineChevronDown color="#4C5361" size={25} />}
                  value={language.lang}
                  w={"292px"}
                  placeholder="Select language"
                  h={"44px"}
                  fontSize={14}
                  onChange={(e) =>
                    setFieldValue(`languages.${index}.lang`, e.target.value)
                  }
                  bg={index < 1 ? "#F2F4F7" : ""}
                  isDisabled={index < 1}
                >
                  {listLanguages.map((lang, index) => {
                    return <option key={index}>{lang}</option>;
                  })}
                </Select>
              </VStack>
              <VStack align={"start"} w={"full"}>
                <Text color="#4C5361" textShadow={"sm"}>
                  Proficiency
                </Text>
                <Menu matchWidth>
                  <MenuButton
                    bg={"#fff"}
                    w={"292px"}
                    h={"44px"}
                    border={"1px solid #edeeef"}
                    py={6}
                    justifyContent={"space-between"}
                    textAlign={"start"}
                    borderRadius={"8px"}
                    fontSize={14}
                    fontWeight={400}
                    as={Button}
                    rightIcon={
                      <HiOutlineChevronDown color="#4C5361" size={22.5} />
                    }
                    value={`languages.${index}.proficiency`}
                  >
                    {language.proficiency
                      ? language.proficiency.label
                      : "Select proficiency level"}
                  </MenuButton>
                  <MenuList w={"full"}>
                    {proficiencyLevels.map((level, idx) => {
                      return (
                        <Field
                          as={MenuItem}
                          onClick={() =>
                            setFieldValue(
                              `languages.${index}.proficiency`,
                              level
                            )
                          }
                        >
                          <VStack align={"start"} key={idx}>
                            <Text fontWeight={500} fontSize={14}>
                              {level.label}
                            </Text>
                            <Text fontSize={12}>{level.description}</Text>
                          </VStack>
                        </Field>
                      );
                    })}
                  </MenuList>
                </Menu>
              </VStack>
            </HStack>
          </VStack>
          <HStack w={"full"} justify={"end"} pb={4} mt={4} pr={4}>
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
      )}
    </>
  );
};

export default LanguageForm;
