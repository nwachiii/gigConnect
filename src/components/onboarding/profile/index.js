import {
  Box,
  Button,
  Checkbox,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { GoPlus } from "react-icons/go";
import { IoCloudUploadOutline } from "react-icons/io5";
import { HiOutlineChevronDown, HiOutlineMinus } from "react-icons/hi2";

export const ProfileStep = () => {
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
            1/10
          </Text>
        </Box>
      </Box>
      <Heading
        fontWeight={700}
        // maxW={"360px"}
        fontSize={24}
        lineHeight={"32px"}
      >
        How would you like to tell us about yourself?
      </Heading>
      <Text fontSize={12} color={"#4C5361"}>
        We need to get a sense of your education, experience and skills. It’s
        quickest to import your information — you can edit it before your
        profile goes live.
      </Text>
      <VStack
        align={"start"}
        border={"1px solid #edeeef"}
        rounded={"12px"}
        p={2}
        w={"full"}
        maxW={"360px"}
      >
        <HStack
          justify={"center"}
          background={"#053AF9"}
          border={"1px solid #edeeef"}
          w={"full"}
          px={4}
          py={2}
          rounded={"12px"}
        >
          <Text textAlign={"center"} fontSize={14} color={"#FFF"}>
            Import from LinkedIn
          </Text>
        </HStack>
        <HStack
          justify={"center"}
          bg={"#F6F7F7"}
          border={"1px solid #edeeef"}
          w={"full"}
          px={4}
          py={2}
          rounded={"12px"}
        >
          <IoCloudUploadOutline />
          <Text fontSize={14} color={"#454C58"}>
            Upload your resume
          </Text>
        </HStack>
        <HStack
          justify={"center"}
          bg={"#F6F7F7"}
          border={"1px solid #edeeef"}
          w={"full"}
          px={4}
          py={2}
          rounded={"12px"}
        >
          <Text fontSize={14} color={"#454C58"}>
            Fill out manually (10 min)
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export const ProfileInfoStep = () => {
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
            2/10
          </Text>
        </Box>
      </Box>
      <Heading fontWeight={700} fontSize={24} lineHeight={"32px"}>
        Got it. Now, add a title to tell the world what you do.
      </Heading>
      <Text fontSize={12} color={"#4C5361"}>
        It&apos;s the very first thing clients see, so make it count. Stand out
        by describing your expertise in your own words.
      </Text>
      <VStack align={"start"} w={"full"}>
        <Text fontSize={14} color={"#454C58"}>
          Your professional role
        </Text>
        <Input
          placeholder="Software Developer | Javascript | iOS"
          border={"1px solid #edeeef"}
          w={"full"}
          maxW={"365px"}
          p={4}
          rounded={"12px"}
        />
      </VStack>
      <HStack gap={4} mb={4}>
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
          Next, add your experience
        </Button>
      </HStack>
    </VStack>
  );
};

export const ProfileExpStep = () => {
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
            3/10
          </Text>
        </Box>
      </Box>
      <Heading
        fontWeight={700}
        // maxW={"360px"}
        fontSize={24}
        lineHeight={"32px"}
      >
        If you have relevant work experience, add it here.
      </Heading>
      <Text fontSize={12} color={"#4C5361"}>
        Freelancers who add their experience are twice as likely to win work.
        But if you’re just starting out, you can still create a great profile.
        Just head on to the next page.
      </Text>
      <Button
        bg={"#fff"}
        justifyContent={"space-between"}
        w={"full"}
        maxW={"410px"}
        border={"1px solid #edeeef"}
        py={8}
      >
        <Text color="#4C5361" whiteSpace={"nowrap"} fontSize={14}>
          Add experience
        </Text>
        <Box
          bg={"#F6F7F7"}
          border={"1px solid #edeeef"}
          cursor={"pointer"}
          p={3}
          rounded={"full"}
        >
          <GoPlus color="#4C5361" size={30} />
        </Box>
      </Button>
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
          <Text>Add work experience</Text>
          <Box
            bg={"#F6F7F7"}
            border={"1px solid #edeeef"}
            cursor={"pointer"}
            p={2}
            rounded={"full"}
          >
            <HiOutlineMinus color="#4C5361" size={20} />
          </Box>
        </HStack>
        <VStack align={"start"} w={"full"} px={4} gap={8} mt={2}>
          <VStack align={"start"} w={"full"} maxW={"370px"} gap={6}>
            <VStack align={"start"} w={"full"}>
              <Text color="#4C5361" textShadow={"sm"}>
                Title*
              </Text>
              <Input placeholder="Ex Software Developer" py={6} w={"full"} />
            </VStack>
            <VStack align={"start"} w={"full"}>
              <Text color="#4C5361" textShadow={"sm"}>
                Company*
              </Text>
              <Input placeholder="Enter company name" py={6} w={"full"} />
            </VStack>
          </VStack>
          <Stack
            direction={{ base: "column", md: "row" }}
            w={"full"}
            maxW={"605px"}
          >
            <VStack align={"start"} w={"full"}>
              <Text color="#4C5361" textShadow={"sm"}>
                Start Date*
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
                >
                  <Text color="#4C5361" whiteSpace={"nowrap"} fontSize={14}>
                    Month
                  </Text>
                  <HiOutlineChevronDown color="#4C5361" size={25} />
                </Button>
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
                    Year
                  </Text>
                  <HiOutlineChevronDown color="#4C5361" size={25} />
                </Button>
              </HStack>
            </VStack>
            <VStack align={"start"} w={"full"}>
              <Text color="#4C5361" textShadow={"sm"}>
                End Date*
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
                >
                  <Text color="#4C5361" whiteSpace={"nowrap"} fontSize={14}>
                    Month
                  </Text>
                  <HiOutlineChevronDown color="#4C5361" size={25} />
                </Button>
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
                    Year
                  </Text>
                  <HiOutlineChevronDown color="#4C5361" size={25} />
                </Button>
              </HStack>
            </VStack>
          </Stack>
          <HStack>
            <Checkbox />
            <Text>I am currently working in this role</Text>
          </HStack>
          <VStack align={"start"} w={"full"} maxW={"545px"}>
            <Text color="#4C5361" textShadow={"sm"}>
              Location*
            </Text>
            <HStack w={"full"}>
              <Input
                bg={"#fff"}
                justifyContent={"space-between"}
                w={"full"}
                border={"1px solid #edeeef"}
                borderRadius={"8px"}
                py={6}
                placeholder=""
                value={"Lekki, Lagos"}
              />
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
                  Nigeria
                </Text>
                <HiOutlineChevronDown color="#4C5361" size={25} />
              </Button>
            </HStack>
          </VStack>
          <VStack w={'full'} maxW={'605px'} align={'start'}>
            <Text color={"#4C5361"}>Description</Text>
            <Textarea
              placeholder="Description"
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
          </VStack>
        </VStack>
        <HStack w={'full'} justify={'end'} pb={4} mt={4} pr={4}>
        <Button
          bg={"#F6F7F7"}
          color={"#4C5361"}
          rounded={"12px"}
          fontWeight={400}
          px={20}
          py={2}
          fontSize={14}
          h={"max-content"}
          border={'1px solid #EDEEEF'}
        >
          Clear
        </Button>
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
          border={'1px solid #EDEEEF'}
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
        >
          Next, add your experience
        </Button>
      </HStack>
    </VStack>
  );
};

export const ProfileEduStep = () => {
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
            4/10
          </Text>
        </Box>
      </Box>
      <Heading
        fontWeight={700}
        maxW={"415px"}
        fontSize={24}
        lineHeight={"32px"}
      >
        Clients like to know what you know - add your education here.
      </Heading>
      <Text fontSize={12} color={"#4C5361"}>
        You don’t have to have a degree. Adding any relevant education helps make your profile more visible.
      </Text>
      <Button
        bg={"#fff"}
        justifyContent={"space-between"}
        w={"full"}
        maxW={"410px"}
        border={"1px solid #edeeef"}
        py={8}
      >
        <Text color="#4C5361" whiteSpace={"nowrap"} fontSize={14}>
          Add education
        </Text>
        <Box
          bg={"#F6F7F7"}
          border={"1px solid #edeeef"}
          cursor={"pointer"}
          p={3}
          rounded={"full"}
        >
          <GoPlus color="#4C5361" size={30} />
        </Box>
      </Button>
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
          <Text>Add education</Text>
          <Box
            bg={"#F6F7F7"}
            border={"1px solid #edeeef"}
            cursor={"pointer"}
            p={2}
            rounded={"full"}
          >
            <HiOutlineMinus color="#4C5361" size={20} />
          </Box>
        </HStack>
        <VStack align={"start"} w={"full"} px={4} gap={8} mt={2}>
          <VStack align={"start"} w={"full"} maxW={"370px"} gap={6}>
            <VStack align={"start"} w={"full"}>
              <Text color="#4C5361" textShadow={"sm"}>
                School/Organisation*
              </Text>
              <Input placeholder="Ex Northpole University" py={6} w={"full"} />
            </VStack>
            <VStack align={"start"} w={"full"}>
              <Text color="#4C5361" textShadow={"sm"}>
                Degree (Optional)
              </Text>
              <Input placeholder="Enter company name" py={6} w={"full"} />
            </VStack>
            <VStack align={"start"} w={"full"}>
              <Text color="#4C5361" textShadow={"sm"}>
                Field of Study
              </Text>
              <Input placeholder="Ex Computer Science" py={6} w={"full"} />
            </VStack>
          </VStack>
          <HStack>
            <Checkbox />
            <Text>I am currently studying here</Text>
          </HStack>
          <Text fontWeight={700}>Date Attended</Text>
          <Stack
            direction={{ base: "column", md: "row" }}
            w={"full"}
            maxW={"605px"}
          >
            <VStack align={"start"} w={"full"}>
              <Text color="#4C5361" textShadow={"sm"}>
                Start Date*
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
                >
                  <Text color="#4C5361" whiteSpace={"nowrap"} fontSize={14}>
                    Month
                  </Text>
                  <HiOutlineChevronDown color="#4C5361" size={25} />
                </Button>
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
                    Year
                  </Text>
                  <HiOutlineChevronDown color="#4C5361" size={25} />
                </Button>
              </HStack>
            </VStack>
            <VStack align={"start"} w={"full"}>
              <Text color="#4C5361" textShadow={"sm"}>
                End Date*
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
                >
                  <Text color="#4C5361" whiteSpace={"nowrap"} fontSize={14}>
                    Month
                  </Text>
                  <HiOutlineChevronDown color="#4C5361" size={25} />
                </Button>
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
                    Year
                  </Text>
                  <HiOutlineChevronDown color="#4C5361" size={25} />
                </Button>
              </HStack>
            </VStack>
          </Stack>

          <VStack align={"start"} w={"full"} maxW={"545px"}>
            <Text color="#4C5361" textShadow={"sm"}>
              Location*
            </Text>
            <HStack w={"full"}>
              <Input
                bg={"#fff"}
                justifyContent={"space-between"}
                w={"full"}
                border={"1px solid #edeeef"}
                borderRadius={"8px"}
                py={6}
                placeholder=""
                value={"Lekki, Lagos"}
              />
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
                  Nigeria
                </Text>
                <HiOutlineChevronDown color="#4C5361" size={25} />
              </Button>
            </HStack>
          </VStack>
          <VStack w={'full'} maxW={'605px'} align={'start'}>
            <Text color={"#4C5361"}>Description</Text>
            <Textarea
              placeholder="Description"
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
          </VStack>
        </VStack>
        <HStack w={'full'} justify={'end'} pb={4} mt={4} pr={4}>
        <Button
          bg={"#F6F7F7"}
          color={"#4C5361"}
          rounded={"12px"}
          fontWeight={400}
          px={20}
          py={2}
          fontSize={14}
          h={"max-content"}
          border={'1px solid #EDEEEF'}
        >
          Clear
        </Button>
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
          border={'1px solid #EDEEEF'}
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
        >
          Next, add your education
        </Button>
      </HStack>
    </VStack>
  );
};

export const ProfileLangStep = () => {
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
            5/10
          </Text>
        </Box>
      </Box>
      <Heading
        fontWeight={700}
        fontSize={24}
        lineHeight={"32px"}
      >
        Looking good. Next, tell us which languages you speak.
      </Heading>
      <Text fontSize={12} color={"#4C5361"}>
        GigConnect is global, so clients are often interested to know what
        languages you speak. English is a must, but do you speak any other
        languages?
      </Text>
      <Button
        bg={"#fff"}
        justifyContent={"space-between"}
        w={"full"}
        maxW={"410px"}
        border={"1px solid #edeeef"}
        py={8}
      >
        <Text color="#4C5361" whiteSpace={"nowrap"} fontSize={14}>
          Add a language
        </Text>
        <Box
          bg={"#F6F7F7"}
          border={"1px solid #edeeef"}
          cursor={"pointer"}
          p={3}
          rounded={"full"}
        >
          <GoPlus color="#4C5361" size={30} />
        </Box>
      </Button>
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
          <Text>Add language</Text>
          <Box
            bg={"#F6F7F7"}
            border={"1px solid #edeeef"}
            cursor={"pointer"}
            p={2}
            rounded={"full"}
          >
            <HiOutlineMinus color="#4C5361" size={20} />
          </Box>
        </HStack>
        <VStack align={"start"} w={"full"} px={4} gap={8} mt={2}>
          <HStack align={"start"} w={"full"} maxW={"545px"} gap={8}>
            <VStack align={'start'} w={'full'}>
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
                  <HiOutlineChevronDown color="#4C5361" size={25} />
                </Button>
            </VStack>
            <VStack align={'start'} w={'full'}>
              <Text color="#4C5361" textShadow={"sm"}>
               Proficiency
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
                    Nigeria
                  </Text>
                  <HiOutlineChevronDown color="#4C5361" size={25} />
                </Button>
            </VStack>
            
          </HStack>
        </VStack>
        <HStack w={'full'} justify={'end'} pb={4} mt={4} pr={4}>
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
          border={'1px solid #EDEEEF'}
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
        >
          Next, add your skills
        </Button>
      </HStack>
    </VStack>
  );
};
