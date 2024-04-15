import { feeSchema, feeValues } from "@/lib/schema";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { Field, FormikProvider, useFormik } from "formik";
import { useEffect } from "react";

export const ProfileRateStep = ({ setStep }) => {
  const formik = useFormik({
    initialValues: feeValues,
    validationSchema: feeSchema,
    validateOnMount: true,
  });
  const toast = useToast()
  const handleInputChange = (event) => {
    // Allow only numbers
    const regex = /^[0-9]*$/;
    if (regex.test(event.target.value)) {
      if (parseFloat(event.target.value) > 100) {
        toast({
          status: 'error',
          duration: 3000,
          position: 'top-right',
          description: 'You cannot charge more than $100 for hourly rate'
        })
      } else {
        formik.setFieldValue('hourlyFee', event.target.value)
      }
    }
  };

  useEffect(() => {
    if (formik.values.hourlyFee) {
      const hourFee = parseFloat(formik.values.hourlyFee);
      const serviceFee = hourFee * 0.05; // 5% of hourly fee
      const finalFee = hourFee - serviceFee;

      formik.setFieldValue('serviceFee', serviceFee.toFixed(2)),
      formik.setFieldValue('finalFee', finalFee.toFixed(2))
    }
  }, [formik.values.hourlyFee]);

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
            9/10
          </Text>
        </Box>
      </Box>
      <Heading fontWeight={700} fontSize={24} lineHeight={"32px"}>
        Now, let’s set your hourly rate.
      </Heading>
      <Text fontSize={12} color={"#4C5361"}>
        Clients will see this rate on your profile and in search results once
        you publish your profile. You can adjust your rate every time you submit
        a proposal.
      </Text>
      <FormikProvider value={formik}>
        <VStack
          align={"start"}
          border={"1px solid #edeeef"}
          rounded={"12px"}
          p={2}
          w={"full"}
          gap={4}
        >
          <HStack
            justify={"space-between"}
            border={"1px solid #edeeef"}
            w={"full"}
            px={4}
            py={2}
            rounded={"12px"}
          >
            <VStack align={"start"} gap={"4px"} py={2}>
              <Text fontSize={18} fontWeight={600}>
                Hourly rate
              </Text>
              <Text fontSize={14} color={"#4C5361"}>
                Total amount the client will see.
              </Text>
            </VStack>
            <HStack align={"start"}>
              <Flex
                border={"1px solid #EDEEEF"}
                p={"10px 14px"}
                h={"44px"}
                rounded={"8px"}
              >
                /hr
              </Flex>
              <Field
                as={Input}
                value={formik.values.hourlyFee}
                placeholder="$0.00"
                p={"10px 16px"}
                w={"full"}
                h={"44px"}
                maxW={"90px"}
                onChange={handleInputChange}
                name="hourlyFee"
                onBlur={(e) => {
                  e.target.value = parseFloat(e.target.value).toFixed(2);
                }}
              />
            </HStack>
          </HStack>
          <HStack
            justify={"space-between"}
            border={"1px solid #edeeef"}
            w={"full"}
            px={4}
            py={2}
            rounded={"12px"}
          >
            <VStack align={"start"} gap={"4px"} py={2}>
              <Text fontSize={18} fontWeight={600}>
                Service fee
              </Text>
              <Text fontSize={14} maxW={"340px"} color={"#4C5361"}>
                This helps us run the platform and provide services like payment
                protection and customer support.
              </Text>
            </VStack>
            <HStack align={"start"}>
              <Flex
                border={"1px solid #EDEEEF"}
                p={"10px 14px"}
                h={"44px"}
                rounded={"8px"}
              >
                /hr
              </Flex>
              <Input
                value={formik.values.serviceFee}
                isDisabled
                placeholder="$0.00"
                p={"10px 16px"}
                h={"44px"}
                w={"full"}
                maxW={"90px"}
              />
            </HStack>
          </HStack>
          <HStack
            justify={"space-between"}
            border={"1px solid #edeeef"}
            w={"full"}
            px={4}
            py={2}
            rounded={"12px"}
            mb={16}
          >
            <VStack align={"start"} gap={"4px"} py={2}>
              <Text fontSize={18} fontWeight={600}>
                {`You'll get`}
              </Text>
              <Text fontSize={14} color={"#4C5361"}>
                {`The estimated amount you'll receive after service fees`}
              </Text>
            </VStack>
            <HStack align={"start"}>
              <Flex
                border={"1px solid #EDEEEF"}
                p={"10px 14px"}
                h={"44px"}
                rounded={"8px"}
              >
                /hr
              </Flex>
              <Input
                value={formik.values.finalFee}
                isDisabled
                placeholder="$0.00"
                p={"10px 16px"}
                w={"full"}
                h={"44px"}
                maxW={"90px"}
              />
            </HStack>
          </HStack>
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
          Next, add your profile photo and location
        </Button>
      </HStack>
    </VStack>
  );
};
