import { FormErrorMessage } from "@/components/generic-components/FormErrorMessage";
import { countries } from "@/components/page-components/profile-components/lib";
import { profileSchema, profileValues } from "@/lib/schema";
import { FieldSelect } from "@/ui-lib/ui-lib-components/FieldSelect";
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Field, FormikProvider, useFormik } from "formik";
import { forwardRef, useCallback, useState } from "react";
import DatePicker from "react-datepicker";
import { useDropzone } from "react-dropzone";
import { GoPlus } from "react-icons/go";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { getBase64FromUrl } from "../../../../../utils/getBase64FromUrl";

export const ProfileScreenStep = ({ setStep }) => {
  const formik = useFormik({
    initialValues: profileValues,
    validationSchema: profileSchema,
    validateOnMount: true,
  });

  const [file, setFile] = useState(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxFiles: 1,
    onDrop: useCallback((acceptedFiles) => {
      const file = acceptedFiles[0];
      const objectUrl = URL.createObjectURL(file);
      getBase64FromUrl(objectUrl).then((res) => {
        const newFile = Object.assign({ image: res }, file);
        setFile(newFile);
        URL.revokeObjectURL(objectUrl);
      });
    }, []),
  });

  const regex = /^[0-9]*$/;
  const alphaRegex = /^[a-zA-Z]*$/

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
            10/10
          </Text>
        </Box>
      </Box>
      <Heading
        fontWeight={700}
        maxW={"415px"}
        fontSize={24}
        lineHeight={"32px"}
      >
        A few last details, then you can check and publish your profile.
      </Heading>
      <Text fontSize={12} color={"#4C5361"}>
        A professional photo helps you build trust with your clients. To keep
        things safe and simple, they’ll pay you through us - which is why we
        need your personal information.
      </Text>
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
          <Text color={"#363B45"} fontWeight={500}>
            Profile setup
          </Text>
        </HStack>
        <FormikProvider value={formik}>
          <VStack align={"start"} w={"full"} px={4} gap={8} mt={2}>
            <HStack {...getRootProps()} w={"full"} gap={6}>
              {isDragActive ? (
                <Text maxW={'100px'} textAlign={'center'}>Drop files here</Text>
              ) : (
                <Image src={file?.image ?? "/img/profilePicture.png"} alt="" boxSize={'120px'} objectFit={'cover'} rounded={'full'} />
              )}
              <Box
                border={"1px solid #edeeef"}
                p={2}
                w={"full"}
                maxW={"220px"}
                rounded={"12px"}
              >
                <input {...getInputProps()} />
                <HStack
                  justify={"space-between"}
                  bg={"#F6F5F5"}
                  border={"1px solid #EDEAEC"}
                  px={2}
                  py={1}
                  rounded={"8px"}
                  cursor={"pointer"}
                >
                  <Text fontSize={12} color={"#4C5361"}>
                    Upload Photo
                  </Text>
                  <Box
                    bg={"#F6F7F7"}
                    border={"1px solid #edeeef"}
                    cursor={"pointer"}
                    p={1}
                    rounded={"full"}
                  >
                    <GoPlus color="#4C5361" size={15} />
                  </Box>
                </HStack>
              </Box>
            </HStack>
            <VStack align={"start"} w={"full"} maxW={"370px"} gap={6}>
              <VStack align={"start"} w={"full"} maxW={"265px"}>
                <Text color="#4C5361" textShadow={"sm"}>
                  Date-Of-Birth*
                </Text>
                {dobPicker(formik)}
                <FormErrorMessage name={"dateOfBirth"} />
              </VStack>
              <VStack align={"start"} w={"full"}>
                <Text color="#4C5361" textShadow={"sm"}>
                  Phone Number
                </Text>
                <HStack w={"full"}>
                  <Button
                    justifyContent={"space-between"}
                    w={"full"}
                    border={"1px solid #edeeef"}
                    borderRadius={"8px"}
                    p={"10px 15px"}
                    h={"44px"}
                    fontWeight={400}
                    maxW={"100px"}
                    gap={1}
                  >
                    <HStack gap={0.5}>
                      <Image src="/img/icons/country flag.svg" alt="" />
                      <Text color="#4C5361" whiteSpace={"nowrap"} fontSize={14}>
                        +1
                      </Text>
                    </HStack>
                    <HiOutlineChevronDown color="#4C5361" size={20} />
                  </Button>
                  <Field
                    as={Input}
                    placeholder="0000000000"
                    w={"full"}
                    border={"1px solid #edeeef"}
                    p={"10px 15px"}
                    h={"44px"}
                    borderRadius={"8px"}
                    fontWeight={400}
                    name={`phoneNumber`}
                    onChange={(e) => {
                      if (regex.test(e.target.value)) {
                        formik.setFieldValue("phoneNumber", e.target.value);
                      }
                    }}
                    maxLength={11}
                  />
                </HStack>
                <FormErrorMessage name={"phoneNumber"} />
              </VStack>
            </VStack>
            <VStack align={"start"} w={"full"} maxW={"260px"}>
              <Text color="#4C5361" textShadow={"sm"}>
                Country*
              </Text>
              <FieldSelect
                name={`country`}
                options={countries}
                placeholder={"Lekki, Lagos"}
                formik={formik}
              />
            </VStack>
            <VStack align={"start"} w={"full"}>
              <Text color="#4C5361" textShadow={"sm"}>
                Street Address
              </Text>
              <Field
                as={Input}
                placeholder="Enter street address"
                py={8}
                w={"full"}
                rounded={"8px"}
                name={`address`}
              />
            </VStack>
            <Stack
              direction={{ base: "column", md: "row" }}
              w={"full"}
              maxW={"650px"}
              mb={4}
            >
              <VStack align={"start"} w={"full"}>
                <Text color="#4C5361" textShadow={"sm"}>
                  City*
                </Text>
                <Field
                  as={Input}
                  placeholder="Enter City"
                  w={"full"}
                  border={"1px solid #edeeef"}
                  p={"10px 15px"}
                  h={"44px"}
                  borderRadius={"8px"}
                  fontWeight={400}
                  name={`city`}
                  onChange={(e) => {
                    if (alphaRegex.test(e.target.value)) {
                      formik.setFieldValue("city", e.target.value);
                    }
                  }}
                />
                <FormErrorMessage name={"city"} />
              </VStack>
              <VStack align={"start"} w={"full"}>
                <Text color="#4C5361" textShadow={"sm"}>
                  State/Province
                </Text>
                <Field
                  as={Input}
                  placeholder="Enter State/Province"
                  w={"full"}
                  border={"1px solid #edeeef"}
                  p={"10px 15px"}
                  h={"44px"}
                  borderRadius={"8px"}
                  fontWeight={400}
                  name={`state`}
                  onChange={(e) => {
                    if (alphaRegex.test(e.target.value)) {
                      formik.setFieldValue("state", e.target.value);
                    }
                  }}
                />
              </VStack>
              <VStack align={"start"} w={"full"}>
                <Text color="#4C5361" textShadow={"sm"}>
                  ZIP/Postal code
                </Text>
                <Field
                  as={Input}
                  placeholder="Enter ZIP/Postal code"
                  w={"full"}
                  border={"1px solid #edeeef"}
                  p={"10px 15px"}
                  h={"44px"}
                  borderRadius={"8px"}
                  fontWeight={400}
                  name={`zipCode`}
                  onChange={(e) => {
                    if (regex.test(e.target.value)) {
                      formik.setFieldValue("zipCode", e.target.value);
                    }
                  }}
                  maxLength={10}
                />
              </VStack>
            </Stack>
          </VStack>
        </FormikProvider>
      </VStack>
      <HStack gap={2} mb={4}>
        <Button
          bg={"#053AF9"}
          color={"white"}
          rounded={"12px"}
          fontWeight={400}
          px={4}
          py={"6px"}
          fontSize={14}
          h={"max-content"}
          isDisabled={!formik.isValid || !file}
          onClick={(prev) => setStep(prev + 1)}
        >
          Save profile and continue
        </Button>
      </HStack>
    </VStack>
  );
};

const dobPicker = (formik) => {
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <Button
      ref={ref}
      onClick={() => {
        onClick();
        formik.setFieldTouched("dateOfBirth", true);
      }}
      bg={"#fff"}
      justifyContent={"space-between"}
      w={"full"}
      border={"1px solid #edeeef"}
      borderRadius={"8px"}
      p={"10px 15px"}
      h={"44px"}
      fontWeight={400}
    >
      <Text color="#878C95" whiteSpace={"nowrap"}>
        {value || "dd-mm-yyyy"}
      </Text>
      <HiOutlineChevronDown color="#4C5361" size={20} />
    </Button>
  ));

  return (
    <DatePicker
      selected={formik.values?.dateOfBirth}
      onChange={(date) => formik.setFieldValue("dateOfBirth", date)}
      customInput={<ExampleCustomInput />}
      maxDate={new Date()}
      value={formik.values?.dateOfBirth}
      dateFormat={"dd-MM-yyyy"}
    />
  );
};
