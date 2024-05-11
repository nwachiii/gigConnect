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
  useToast,
} from "@chakra-ui/react";
import { Field } from "formik";
import { HiOutlineChevronDown, HiOutlineMinus } from "react-icons/hi2";
import { listLanguages, proficiencyLevels } from "../../../lib";
import { useState } from "react";
import { FormSavedBox } from "@/components/generic-components/FormSavedBox";
import { FieldSelect } from "@/ui-lib/ui-lib-components/FieldSelect";

export const LanguageForm = ({ formik, remove, index }) => {
  const [isSaved, setIsSaved] = useState(false);
  const toast = useToast();
  const isValid = !(formik.errors.languages && formik.errors.languages?.[index]);
  const handleRemoveLang = () => {
    if (index >= 1) {
      remove(index);
    } else {
      toast({
        status: "error",
        position: "top-right",
        duration: 3000,
        description: "You must have at least one language",
      });
    }
  };

  const saveLanguage = () => {
    setIsSaved(true);
    toast({
      title: "Language Saved",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
  };

  const proficiencyValue = formik.values.languages[index]?.proficiency;
  const matchedProficiency = proficiencyLevels.find(level => level.label === proficiencyValue);

  return (
    <>
      {isSaved ? (
        <FormSavedBox
          heading={formik.values.languages[index]?.name}
          description={formik.values.languages[index]?.proficiency}
          tagline={matchedProficiency?.description}
          handleDelete={handleRemoveLang}
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
              onClick={handleRemoveLang}
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
                <FieldSelect
                  name={`languages.${index}.name`}
                  options={listLanguages}
                  placeholder={"Select language"}
                  formik={formik}
                  value={index < 1 && "English"}
                  bg={index < 1 ? '#F2F4F7' : ''}
                  disabled={index < 1}
                  w={'292px'}
                />
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
                    {formik.values.languages?.[index].proficiency
                      ? formik.values.languages?.[index].proficiency
                      : "Select proficiency level"}
                  </MenuButton>
                  <MenuList w={"full"}>
                    {proficiencyLevels.map((level, idx) => {
                      return (
                        <Field
                          as={MenuItem}
                          onClick={() =>
                            formik.setFieldValue(
                              `languages.${index}.proficiency`,
                              level.label
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
              onClick={saveLanguage}
              isDisabled={!isValid}
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
