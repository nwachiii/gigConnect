import {
  Box,
  Button,
  Checkbox,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { GoPlus } from "react-icons/go";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { RiSearchLine } from "react-icons/ri";

export const ProfileSkillsStep = ({ setStep }) => {
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
        <Input placeholder="Search and select a skill" py={6} w={"full"} />
      </VStack>
      <VStack align={"start"} w={"full"}>
        <Text>Search skills</Text>
        <InputGroup alignItems={"center"}>
          <InputLeftElement p={2} left={"3px"} top={"5px"}>
            <RiSearchLine size={25} />
          </InputLeftElement>
          <Input placeholder="Search" py={6} w={"full"} />
        </InputGroup>
        <Text>For the best results, add 10-15 skills max</Text>
      </VStack>
      <VStack>
        <Text fontWeight={600}>Suggested skills</Text>
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
        >
          Next, write an overview
        </Button>
      </HStack>
    </VStack>
  );
};

export const ProfileBioStep = ({ setStep }) => {
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
            7/10
          </Text>
        </Box>
      </Box>
      <Heading
        fontWeight={700}
        // maxW={"360px"}
        fontSize={24}
        lineHeight={"32px"}
      >
        Great. Now write a bio to tell the world about yourself.
      </Heading>
      <Text fontSize={12} color={"#4C5361"}>
        Help people get to know you at a glance. What work do you do best? Tell
        them clearly, using paragraphs or bullet points. You can always edit
        later; just make sure you proofread now.
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
          <Text>Write an overview</Text>
        </HStack>
        <VStack align={"start"} w={"full"} px={4} gap={8} mt={2} mb={8}>
          <VStack w={"full"} maxW={"605px"} align={"start"}>
            <Text color={"#4C5361"}>Description</Text>
            <Textarea
              placeholder="Enter your top skills, experience and interest. This is one of the first things clients
                will see on your profile."
              bg={"#fff"}
              justifyContent={"space-between"}
              w={"full"}
              border={"1px solid #edeeef"}
              borderRadius={"8px"}
              py={6}
              px={4}
              minH={"115px"}
              fontWeight={400}
              resize={"none"}
            />
            <Text>At least 100 characters</Text>
          </VStack>
        </VStack>
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
          onClick={() => setStep((prev) => prev + 1)}
          h={"max-content"}
        >
          Next, choose your categories
        </Button>
      </HStack>
    </VStack>
  );
};

export const ProfileServicesStep = ({ setStep }) => {
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
        <Input placeholder="Search and select a service" py={6} w={"full"} />
      </VStack>
      <VStack align={"start"} w={"full"}>
        <Text>Services</Text>
        <InputGroup alignItems={"center"}>
          <InputLeftElement p={2} left={"3px"} top={"5px"}>
            <RiSearchLine size={25} />
          </InputLeftElement>
          <Input placeholder="Search" py={6} w={"full"} />
        </InputGroup>
        <Text>For the best results, add 10-15 services max</Text>
      </VStack>
      <VStack>
        <Text fontWeight={600}>Suggested services</Text>
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
        >
          Next, set your rate
        </Button>
      </HStack>
    </VStack>
  );
};

export const ProfileRateStep = ({ setStep }) => {
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
      <Heading
        fontWeight={700}
        // maxW={"360px"}
        fontSize={24}
        lineHeight={"32px"}
      >
        Now, let’s set your hourly rate.
      </Heading>
      <Text fontSize={12} color={"#4C5361"}>
        Clients will see this rate on your profile and in search results once
        you publish your profile. You can adjust your rate every time you submit
        a proposal.
      </Text>
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
            <Box border={"1px solid #EDEEEF"} px={4} py={3} rounded={"8px"}>
              /hr
            </Box>
            <Input placeholder="$0.00" py={6} px={4} w={"full"} maxW={"90px"} />
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
            <Box border={"1px solid #EDEEEF"} px={4} py={3} rounded={"8px"}>
              /hr
            </Box>
            <Input placeholder="$0.00" py={6} px={4} w={"full"} maxW={"90px"} />
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
              You'll get
            </Text>
            <Text fontSize={14} color={"#4C5361"}>
              The estimated amount you'll receive after service fees
            </Text>
          </VStack>
          <HStack align={"start"}>
            <Box border={"1px solid #EDEEEF"} px={4} py={3} rounded={"8px"}>
              /hr
            </Box>
            <Input placeholder="$0.00" py={6} px={4} w={"full"} maxW={"90px"} />
          </HStack>
        </HStack>
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
        >
          Next, add your profile photo and location
        </Button>
      </HStack>
    </VStack>
  );
};

export const ProfileScreenStep = ({ setStep }) => {
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
        <VStack align={"start"} w={"full"} px={4} gap={8} mt={2}>
          <HStack w={"full"} gap={6}>
            <Image src="/img/profilePicture.png" alt="" />
            <Box
              border={"1px solid #edeeef"}
              p={2}
              w={"full"}
              maxW={"220px"}
              rounded={"12px"}
            >
              <HStack
                justify={"space-between"}
                bg={"#F6F5F5"}
                border={"1px solid #EDEAEC"}
                px={2}
                py={1}
                rounded={"8px"}
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
              <Button
                bg={"#fff"}
                justifyContent={"space-between"}
                w={"full"}
                border={"1px solid #edeeef"}
                borderRadius={"8px"}
                py={6}
                fontWeight={400}
              >
                <Text color="#878C95" whiteSpace={"nowrap"}>
                  dd-mm-yyyy
                </Text>
                <HiOutlineChevronDown color="#4C5361" size={20} />
              </Button>
            </VStack>
            <VStack align={"start"} w={"full"}>
              <Text color="#4C5361" textShadow={"sm"}>
                Phone Number
              </Text>
              <HStack w={"full"}>
                <Button
                  bg={"#fff"}
                  justifyContent={"space-between"}
                  w={"full"}
                  border={"1px solid #edeeef"}
                  borderRadius={"8px"}
                  py={6}
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
                <Input
                  bg={"#fff"}
                  placeholder="00000000"
                  w={"full"}
                  border={"1px solid #edeeef"}
                  py={6}
                  borderRadius={"8px"}
                  fontWeight={400}
                />
              </HStack>
            </VStack>
          </VStack>
          <VStack align={"start"} w={"full"} maxW={"260px"}>
            <Text color="#4C5361" textShadow={"sm"}>
              Country*
            </Text>
            <Button
              bg={"#fff"}
              justifyContent={"space-between"}
              w={"full"}
              border={"1px solid #edeeef"}
              py={6}
              borderRadius={"8px"}
              fontWeight={400}
            >
              <Text color="#4C5361" whiteSpace={"nowrap"} fontSize={14}>
                Lekki, Lagos
              </Text>
              <HiOutlineChevronDown color="#4C5361" size={25} />
            </Button>
          </VStack>
          <VStack align={"start"} w={"full"}>
            <Text color="#4C5361" textShadow={"sm"}>
              Street Address
            </Text>
            <Input
              placeholder="Enter street address"
              py={8}
              w={"full"}
              rounded={"8px"}
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
                Start Date*
              </Text>
              <Input
                bg={"#fff"}
                placeholder="Enter City"
                w={"full"}
                border={"1px solid #edeeef"}
                py={6}
                borderRadius={"8px"}
                fontWeight={400}
              />
            </VStack>
            <VStack align={"start"} w={"full"}>
              <Text color="#4C5361" textShadow={"sm"}>
                State/Province
              </Text>
              <Input
                bg={"#fff"}
                placeholder="Enter State/Province"
                w={"full"}
                border={"1px solid #edeeef"}
                py={6}
                borderRadius={"8px"}
                fontWeight={400}
              />
            </VStack>
            <VStack align={"start"} w={"full"}>
              <Text color="#4C5361" textShadow={"sm"}>
                ZIP/Postal code
              </Text>
              <Input
                bg={"#fff"}
                placeholder="Enter ZIP/Postal code"
                w={"full"}
                border={"1px solid #edeeef"}
                py={6}
                borderRadius={"8px"}
                fontWeight={400}
              />
            </VStack>
          </Stack>
        </VStack>
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
        >
          Save profile and continue
        </Button>
      </HStack>
    </VStack>
  );
};
