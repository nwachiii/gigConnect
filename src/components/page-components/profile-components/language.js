import {
  Box,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Field } from "formik";
import { HiOutlineChevronDown, HiOutlineMinus } from "react-icons/hi2";

export const LanguageForm = ({ setFieldValue, language, remove, index }) => {
  return (
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
        <HStack align={"start"} w={"full"} maxW={"545px"} gap={8}>
          <VStack align={"start"} w={"full"}>
            <Text color="#4C5361" textShadow={"sm"}>
              Language (English is required)
            </Text>
            <Button
              bg={"#F2F4F7"}
              justifyContent={"space-between"}
              w={"full"}
              border={"1px solid #D0D5DD"}
              borderRadius={"8px"}
              py={6}
              placeholder=""
              value={"Lekki, Lagos"}
            >
              <Text color="#4C5361" whiteSpace={"nowrap"} fontSize={14}>
                English
              </Text>
            </Button>
          </VStack>
          <VStack align={"start"} w={"full"}>
            <Text color="#4C5361" textShadow={"sm"}>
              Proficiency
            </Text>
            <Menu matchWidth>
              <MenuButton
                bg={"#fff"}
                w={"full"}
                border={"1px solid #edeeef"}
                py={6}
                justifyContent={"space-between"}
                textAlign={"start"}
                borderRadius={"8px"}
                fontSize={14}
                fontWeight={400}
                as={Button}
                rightIcon={<HiOutlineChevronDown color="#4C5361" size={25} />}
                value={`languages.${index}.proficiency`}
              >
                Select proficiency level
              </MenuButton>
              <MenuList w={"full"}>
                {proficiencyLevels.map((level, index) => {
                  return (
                    <Field
                      as={MenuItem}
                      onClick={() =>
                        setFieldValue(
                          `languages.${index}.proficiency`,
                          level.value
                        )
                      }
                    >
                      <VStack align={"start"}>
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
  );
};

export default LanguageForm;

const proficiencyLevels = [
  {
    value: "basic",
    label: "Basic",
    description: "I write clearly in this language",
  },
  {
    value: "conversational",
    label: "Conversational",
    description: "I write and speak clearly in this language",
  },
  {
    value: "fluent",
    label: "Fluent",
    description: "I write and speak this language to a high level",
  },
  {
    value: "native",
    label: "Native or Bilingual",
    description: "I write and speak this language perfectly",
  },
];
