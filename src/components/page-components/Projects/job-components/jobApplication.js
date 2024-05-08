import { JobListing } from "@/components/generic-components/JobListing";
import { techJobs } from "@/lib";
import {
  Button,
  Checkbox,
  Flex,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { ApplicationSuccessful } from "./modals/applicationSuccess";
import dynamic from "next/dynamic";
import { BsChevronLeft } from "react-icons/bs";
const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

export const JobApplication = () => {
  const router = useRouter();
  const query = useParams();
  const job = techJobs.find((job) => job.id === Number(query?.id));
  const [hourlyFee, setHourlyFee] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const toast = useToast();
  const modalDisclosure = useDisclosure();
  const handleInputChange = (event) => {
    // Allow only numbers
    const regex = /^[0-9]*$/;
    if (regex.test(event.target.value)) {
      if (parseFloat(event.target.value) > 100) {
        toast({
          status: "error",
          duration: 3000,
          position: "top-right",
          description: "You cannot charge more than $100 for hourly rate",
        });
      } else {
        setHourlyFee(event.target.value);
      }
    }
  };
  return (
    <Stack
      maxW="1440px"
      w="full"
      padding="16px 44px"
      alignItems="center"
      justifyContent="space-between"
      spacing="36px"
      mx="auto"
    >
      {/* Main Content */}
      <Stack borderRadius={"16px"} gap={4} minW="981px" w="full" bg="#FFFFFF">
        <HStack p={4} borderBottom={"1px solid #ebebeb"} w={"full"}>
          <HStack
            gap={3}
            cursor={"pointer"}
            onClick={() => router.back(- 1)}
          >
            <Stack bg={"#F6F7F7"} justify={"center"} p={3} rounded={"full"}>
              <BsChevronLeft />
            </Stack>
            <Text fontWeight={500} fontSize={18}>
              Back
            </Text>
          </HStack>
        </HStack>
        <Stack p={4}>
          <Heading pb={2} fontSize={24}>Application Process</Heading>
          <JobListing isApplying job={job} />
          <VStack
            align={"start"}
            borderRadius="12px"
            border="1px solid #EDEEEF"
            w="full"
            p={4}
          >
            <Flex
              direction={"column"}
              borderRadius="12px"
              border="1px solid #EDEEEF"
              w="full"
              p={4}
              align={"start"}
              gap={6}
            >
              <Text fontWeight={700} fontSize={18}>
                Proposed Contract Terms
              </Text>
              <HStack align={"end"}>
                <Text fontWeight={700}>
                  Your proposed hourly rate for this project
                </Text>
                <Image src="/img/icons/questionBox.svg" />
              </HStack>
              {isSaved ? (
                <Flex
                  border={"1px solid #EDEEEF"}
                  p={"5px 11px"}
                  h={"max-content"}
                  rounded={"full"}
                  gap={2}
                  bg={"#F6F7F7"}
                >
                  <Text fontWeight={500} color={"#4C5361"}>{`$${parseFloat(
                    hourlyFee
                  ).toFixed(2)}/hr`}</Text>
                  <Image src="/img/icons/edit-pencil.svg" />
                </Flex>
              ) : (
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
                    value={hourlyFee}
                    placeholder="$35"
                    p={"10px 16px"}
                    w={"full"}
                    h={"44px"}
                    maxW={"128px"}
                    onChange={handleInputChange}
                    name="hourlyFee"
                    onBlur={(e) => {
                      if (parseFloat(e.target.value) > 0) {
                        setIsSaved(true);
                      }
                    }}
                  />
                </HStack>
              )}
              <Text color={"#707581"} lineHeight={"20px"} maxW={"530px"}>
                A lower hourly rate might give you a greater chance of getting
                this job. Keep in mind service fees applies
              </Text>
              <Stack>
                <HStack align={"end"}>
                  <Text fontWeight={700}>Service fees</Text>
                  <Image src="/img/icons/questionBox.svg" />
                </HStack>
                <Text>
                  GigConnect processing fee <b>10%</b>
                </Text>
              </Stack>
            </Flex>
            <Flex
              direction={"column"}
              borderRadius="12px"
              border="1px solid #EDEEEF"
              w="full"
              p={4}
              align={"start"}
              gap={6}
            >
              <HStack align={"end"}>
                <Text fontWeight={700}>Cover Letter</Text>
                <Image src="/img/icons/copyIcon.svg" />
              </HStack>
              <Stack w={"full"}>
                <QuillEditor placeholder="Type Message" />
              </Stack>
              <Text color={"#707581"} lineHeight={"20px"} maxW={"530px"}>
                A lower hourly rate might give you a greater chance of getting
                this job. Keep in mind service fees applies
              </Text>
              <Stack>
                <Text fontWeight={700}>Talent Agreement</Text>
                <Flex gap={2}>
                  <Checkbox
                    isChecked={isChecked}
                    onChange={(event) => setIsChecked(event.target.checked)}
                  />
                  <Text>
                    Yes, I understand and agree to{" "}
                    <span style={{ color: "#053AF9", fontWeight: 500 }}>
                      GigConnect Terms of Service
                    </span>
                    , including the{" "}
                    <span style={{ color: "#053AF9", fontWeight: 500 }}>
                      User Agreement
                    </span>{" "}
                    and{" "}
                    <span style={{ color: "#053AF9", fontWeight: 500 }}>
                      Privacy Policy
                    </span>
                    .
                  </Text>
                </Flex>
              </Stack>
            </Flex>
            <HStack w={"full"} justify={"end"} gap={2} my={4}>
              <Button
                bg={"#202329"}
                rounded={"12px"}
                fontWeight={400}
                p={"12px 16px"}
                h={"max-content"}
                color={"#fff"}
                border={"1px solid #EDEEEF"}
                onClick={() => router.back(-1)}
              >
                Cancel
              </Button>
              <Button
                bg={"#053AF9"}
                rounded={"12px"}
                fontWeight={400}
                p={"12px 16px"}
                h={"max-content"}
                color={"#fff"}
                border={"1px solid #EDEEEF"}
                onClick={modalDisclosure.onOpen}
                isDisabled={!isSaved || !isChecked}
              >
                Send Application
              </Button>
            </HStack>
          </VStack>
        </Stack>
      </Stack>
      <ApplicationSuccessful modalDisclosure={modalDisclosure} />
    </Stack>
  );
};
