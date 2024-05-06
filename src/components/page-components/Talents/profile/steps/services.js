import { listServices } from "@/components/page-components/profile-components/lib";
import { serviceSchema } from "@/lib/schema";
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
import { FormikProvider, useFormik, useFormikContext } from "formik";
import { useMemo, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { IoIosAdd } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";

export const ProfileServicesStep = ({ setStep }) => {
  const formik = useFormikContext();
  const [searchTerm, setSearchTerm] = useState("");
  const toast = useToast();
  const addService = (service) => {
    if (formik.values.services.length < 15) {
      formik.setFieldValue("services", [...formik.values.services, service]);
    } else {
      toast({
        status: "error",
        description: "You cannot add more than 15 services",
        duration: 3000,
        position: "top-right",
      });
    }
  };

  const removeService = (serviceToRemove) => {
    formik.setFieldValue(
      "services",
      formik.values.services.filter((service) => service !== serviceToRemove)
    );
  };

  const filteredServices = useMemo(
    () =>
      listServices.filter(
        (service) =>
          service.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !formik.values.services.includes(service)
      ),
    [listServices, searchTerm, formik.values.services]
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
            8/10
          </Text>
        </Box>
      </Box>
      <Heading fontWeight={700} fontSize={24} lineHeight={"32px"}>
        What are the main services you offer?
      </Heading>
      <Text fontSize={12} color={"#4C5361"}>
        Choose at least one service that best describes the type of work you do.
        This helps us match you with clients who need your unique expertise.
      </Text>
      <VStack align={"start"} w={"full"} maxW={"410px"}>
        <Text fontWeight={600}>Your services</Text>
        <Stack
          flexWrap={"wrap"}
          h={formik.values.services.length > 0 ? "auto" : "48px"}
          border={"1px solid #EDEEEF"}
          rounded={"8px"}
          p={"8px"}
          w={"full"}
          align={formik.values.services.length > 0 ? "start" : "center"}
          flexDirection={"row"}
        >
          {formik.values.services.length > 0 ? (
            formik.values.services.map((service, index) => {
              return (
                <Button
                  key={index}
                  bg={"#053AF9"}
                  border={"1px solid #EDEEEF"}
                  padding={"5px 11px"}
                  rounded={"full"}
                  w={"max-content"}
                  gap={"10px"}
                  color={"white"}
                  h={"28px"}
                  fontWeight={500}
                >
                  <Text whiteSpace={"nowrap"} fontSize={14} fontWeight={500}>
                    {service}
                  </Text>
                  <HiMiniXMark
                    size={20}
                    onClick={() => removeService(service)}
                  />
                </Button>
              );
            })
          ) : (
            <Text fontSize={14} color={"#878C95"}>
              Search and select a service
            </Text>
          )}
        </Stack>
      </VStack>
      <VStack align={"start"} w={"full"}>
        <Text>Services</Text>
        <InputGroup alignItems={"center"}>
          <InputLeftElement p={2} left={"3px"} top={"5px"}>
            <RiSearchLine size={25} />
          </InputLeftElement>
          <Input
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            py={6}
            w={"full"}
          />
        </InputGroup>
        <Text>For the best results, add 10-15 services max</Text>
      </VStack>
      <VStack w={"full"} align={"start"}>
          <Text fontWeight={600}>Suggested services</Text>
          <Flex gap={2} pt={2} maxW={"485px"} flexWrap={"wrap"}>
            {filteredServices.map((service, index) => {
              return (
                <Button
                  key={index}
                  bg={"#F6F7F7"}
                  border={"1px solid #EDEEEF"}
                  padding={"5px 11px"}
                  rounded={"full"}
                  w={"max-content"}
                  h={"28px"}
                  onClick={() => addService(service)}
                  gap={"10px"}
                >
                  <Text
                    whiteSpace={"nowrap"}
                    fontSize={14}
                    fontWeight={500}
                    color={"#4C5361"}
                  >
                    {service}
                  </Text>
                  <IoIosAdd size={20} color="#4C5361" />
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
          isDisabled={formik.errors.services}
        >
          Next, set your rate
        </Button>
      </HStack>
    </VStack>
  );
};
